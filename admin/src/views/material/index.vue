<template>
    <div class="material-index">
        <el-card shadow="never">
            <el-tabs v-model="activeTab">
                <el-tab-pane
                    v-for="item in tabsMap"
                    :label="item.name"
                    :name="item.type"
                    :index="item.type"
                >
                    <Material
                        :type="item.type"
                        mode="page"
                        file-size="120px"
                        :limit="-1"
                        :page-size="15"
                    />
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template> 

<script lang="ts" setup>
import { provide, ref } from 'vue'
import Material from '@/components/material-select/material.vue'
const tabsMap = [{
    type: 'image',
    name: '图片'
}, {
    type: 'video',
    name: '视频'
}]
const activeTab = ref('image')

</script>

<style lang="scss" scoped>
.material-index {
    :deep(.el-tabs) {
        min-height: calc(100vh - 140px);
        display: flex;
        flex-direction: column;
        .el-tabs__header {
            margin-bottom: 0 !important;
        }
        .el-tabs__content,
        .el-tab-pane {
            min-height: 0;
            flex: 1;
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
