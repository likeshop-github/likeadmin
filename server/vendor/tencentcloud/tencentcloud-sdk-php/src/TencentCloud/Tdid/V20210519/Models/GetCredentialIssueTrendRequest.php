<?php
/*
 * Copyright (c) 2017-2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
namespace TencentCloud\Tdid\V20210519\Models;
use TencentCloud\Common\AbstractModel;

/**
 * GetCredentialIssueTrend请求参数结构体
 *
 * @method string getStartTime() 获取开始时间（支持到天 2021-4-23）
 * @method void setStartTime(string $StartTime) 设置开始时间（支持到天 2021-4-23）
 * @method string getEndTime() 获取结束时间（支持到天 2021-4-23）
 * @method void setEndTime(string $EndTime) 设置结束时间（支持到天 2021-4-23）
 * @method string getClusterId() 获取网络ID
 * @method void setClusterId(string $ClusterId) 设置网络ID
 */
class GetCredentialIssueTrendRequest extends AbstractModel
{
    /**
     * @var string 开始时间（支持到天 2021-4-23）
     */
    public $StartTime;

    /**
     * @var string 结束时间（支持到天 2021-4-23）
     */
    public $EndTime;

    /**
     * @var string 网络ID
     */
    public $ClusterId;

    /**
     * @param string $StartTime 开始时间（支持到天 2021-4-23）
     * @param string $EndTime 结束时间（支持到天 2021-4-23）
     * @param string $ClusterId 网络ID
     */
    function __construct()
    {

    }

    /**
     * For internal only. DO NOT USE IT.
     */
    public function deserialize($param)
    {
        if ($param === null) {
            return;
        }
        if (array_key_exists("StartTime",$param) and $param["StartTime"] !== null) {
            $this->StartTime = $param["StartTime"];
        }

        if (array_key_exists("EndTime",$param) and $param["EndTime"] !== null) {
            $this->EndTime = $param["EndTime"];
        }

        if (array_key_exists("ClusterId",$param) and $param["ClusterId"] !== null) {
            $this->ClusterId = $param["ClusterId"];
        }
    }
}