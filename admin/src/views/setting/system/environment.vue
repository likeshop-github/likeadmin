<!-- 系统环境 -->
<template>
    <div class="system-environment">
        <el-card shadow="never">
            <div>服务器信息</div>
            <div class="m-t-15">
                <el-table :data="info.server">
                    <el-table-column prop="param" label="参数"></el-table-column>
                    <el-table-column prop="value" label="值"></el-table-column>
                </el-table>
            </div>
        </el-card>

        <el-card shadow="never" class="m-t-15">
            <div>PHP环境要求</div>
            <div class="m-t-15">
                <el-table :data="info.env">
                    <el-table-column prop="option" label="选项"></el-table-column>
                    <el-table-column prop="require" label="要求"></el-table-column>
                    <el-table-column label="状态">
                        <template #default="scope">
                            <icon v-if="scope.row.status" name="el-icon-Select" color="#67C23A" />
                            <icon v-else name="el-icon-CloseBold" color="#DB2828" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="remark" label="说明及帮助"></el-table-column>
                </el-table>
            </div>
        </el-card>

        <el-card shadow="never" class="m-t-15">
            <div>目录权限</div>
            <div class="m-t-15">
                <el-table :data="info.auth">
                    <el-table-column prop="dir" label="选项"></el-table-column>
                    <el-table-column prop="require" label="要求"></el-table-column>
                    <el-table-column label="状态">
                        <template #default="scope">
                            <icon v-if="scope.row.status" name="el-icon-Select" color="#67C23A" />
                            <icon v-else name="el-icon-CloseBold" color="#DB2828" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="remark" label="说明及帮助"></el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'
import { apiSystemInfo } from '@/api/setting'
export default defineComponent({
    setup() {
        const info = reactive({
            server: [], // 服务器信息
            env: [], // PHP环境要求
            auth: [] // 目录权限
        })

        const getSystemInfo = () => {
            apiSystemInfo().then((res: any) => {
                console.log('res', res)
                info.server = res.server
                info.env = res.env
                info.auth = res.auth
            })
        }

        onMounted(() => {
            getSystemInfo()
        })

        return {
            info,
            getSystemInfo
        }
    }
})
</script>

<style lang="scss" scoped></style>
