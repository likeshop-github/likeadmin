<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\api\service;

use app\common\logic\UserLogic;
use app\common\model\user\{User, UserAuth};
use app\common\enum\UserTerminalEnum;
use app\common\service\{ConfigService, storage\Driver as StorageDriver};
use think\Exception;

/**
 * 用户功能类（主要微信登录后创建和更新用户）
 * Class UserService
 * @package app\shopapi\service
 */
class WechatUserService
{
    protected int $terminal = UserTerminalEnum::WECHAT_MMP;
    protected array $response = [];
    protected ?string $code = null;
    protected ?string $openid = null;
    protected ?string $unionid = null;
    protected ?string $nickname = null;
    protected ?string $headimgurl = null;
    protected User $user;


    public function __construct(array $response, int $terminal)
    {
        $this->terminal = $terminal;
        $this->setParams($response);
    }

    /**
     * @notes 设置微信返回的用户信息
     * @param $response
     * @author cjhao
     * @date 2021/8/2 11:49
     */
    private function setParams($response): void
    {
        $this->response = $response;
        $this->openid = $response['openid'];
        $this->unionid = $response['unionid'] ?? '';
        $this->nickname = $response['nickname'] ?? '';
        $this->headimgurl = $response['headimgurl'] ?? '';
    }


    /**
     * @notes 根据微信opendid或unionid获取用户信息
     * @author cjhao
     * @date 2021/8/2 11:06
     */
    public function getResopnseByUserInfo($source = ''): self
    {
        $user = User::hasWhere('userAuth', ['openid' => $this->openid], 'id,sn,nickname,avatar,mobile,disable')
            ->findOrEmpty();
        /*
         * 用户没有该端记录，且微信返回了unionid，则用unionid找该用户
         * 如果是小程序的静默登录，只按open_id找用户信息，如果没有用户信息，返回空，前端重新调用授权登录接口。
         */
        if ($user->isEmpty() && $this->unionid && 'silent' != $source) {
            $user = User::hasWhere('userAuth', ['unionid' => $this->unionid], 'id,sn,nickname,avatar,mobile,disable')
                ->findOrEmpty();
        }

        $this->user = $user;
        return $this;
    }


    /**
     * @notes
     * @param bool $isCheck 是否验证账号是否可用
     * @return array
     * @throws Exception
     * @author cjhao
     * @date 2021/8/3 11:42
     */
    public function getUserInfo($isCheck = true): array
    {
        if (!$this->user->isEmpty() && $isCheck) {
            $this->checkAccount();
        }
        if (!$this->user->isEmpty()) {
            $this->getToken();
        }
        return $this->user->toArray();
    }


    /**
     * @notes 验证账号是否可用
     * @return bool|string
     * @author cjhao
     * @date 2021/8/2 15:07
     */
    private function checkAccount()
    {
        if ($this->user->disable) {
            throw new Exception('您的账号异常，请联系客服。');
        }
    }


    /**
     * @notes 创建用户
     * @throws Exception
     * @author cjhao
     * @date 2021/8/2 16:26
     */
    private function createUser(): void
    {
        // 获取存储引擎
        $config = [
            'default' => ConfigService::get('storage', 'default', 'local'),
            'engine' => ConfigService::get('storage')
        ];
        //设置头像
        if (empty($this->headimgurl)) {
            //默认头像
            $avatar = ConfigService::get('config', 'default_avatar', '');

        } else {
            if ($config['default'] == 'local') {
                $file_name = md5($this->openid . time()) . '.jpeg';
                $avatar = download_file($this->headimgurl, 'uploads/user/avatar/', $file_name);
            } else {
                $avatar = 'uploads/user/avatar/' . md5($this->openid . time()) . '.jpeg';
                $StorageDriver = new StorageDriver($config);
                if (!$StorageDriver->fetch($this->headimgurl, $avatar)) {
                    throw new Exception('头像保存失败:' . $StorageDriver->getError());
                }
            }

        }

        $this->user->nickname = $this->nickname;
        $this->user->sn = create_user_sn();
        $this->user->avatar = $avatar;
        $this->user->code = generate_code();
        $this->user->register_source = $this->terminal;

        if (empty($this->nickname)) {
            $this->user->nickname = '用户' . $this->user->sn;
        }

        $this->user->save();
        (new UserAuth)->save([
            'user_id' => $this->user->id,
            'openid' => $this->openid,
            'unionid' => $this->unionid,
            'terminal' => $this->terminal,
        ]);
    }

    /**
     * 更新用户信息（如果该端没授权信息，会重新写入一条该端的授权信息）
     * @param $response
     * @param $client
     * @param $user_id
     * @return array|\PDOStatement|string|\think\Model|null
     */
    private function updateUser(): void
    {
        //无头像需要更新头像
        if (empty($this->user->avatar)) {
            // 获取存储引擎
            $config = [
                'default' => ConfigService::get('storage', 'default', 'local'),
                'engine' => ConfigService::get('storage_engine')
            ];

            if ($config['default'] == 'local') {
                $file_name = md5($this->openid . time()) . '.jpeg';
                $avatar = download_file($this->headimgurl, 'uploads/user/avatar/', $file_name);
            } else {
                $avatar = 'uploads/user/avatar/' . md5($this->openid . time()) . '.jpeg';
                $StorageDriver = new StorageDriver($config);
                if (!$StorageDriver->fetch($this->headimgurl, $avatar)) {
                    throw new Exception('头像保存失败:' . $StorageDriver->getError());
                }
            }
            $this->user->avatar = $avatar;
        }
        $this->user->save();

        $userAuth = UserAuth::where(['user_id' => $this->user->id, 'openid' => $this->openid])->findOrEmpty();
        //无该端信息，新增一条
        if ($userAuth->isEmpty()) {
            $userAuth->user_id = $this->user->id;
            $userAuth->openid = $this->openid;
            $userAuth->unionid = $this->unionid;
            $userAuth->terminal = $this->terminal;
            $userAuth->save();
        }
    }

    /**
     * @notes 获取token
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author cjhao
     * @date 2021/8/2 16:45
     */
    private function getToken()
    {
        $user = UserTokenService::setToken($this->user->id, $this->terminal);
        $this->user->token = $user['token'];
    }


    /**
     * @notes 用户授权登录，
     * 如果用户不存在，创建用户；用户存在，更新用户信息，并检查该端信息是否需要写入
     * @return WechatUserService
     * @throws Exception
     * @author cjhao
     * @date 2021/8/2 16:35
     */
    public function authUserLogin(): self
    {
        if ($this->user->isEmpty()) {
            $this->createUser();
        } else {
            $this->updateUser();
        }
        return $this;
    }
}