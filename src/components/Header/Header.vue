<template>
    <div class="header">
        <el-menu theme="dark" :default-active="activeIndex" class="header-menu" mode="horizontal" @select="handleSelect">
            <div class="header-menu-logo">
                <img class="header-menu-logo-img" src="../../assets/logo.png" />
                <span class="header-menu-logo-text">Element-UI</span>
            </div>
            <el-menu-item class="header-menu-tab" index="1">处理中心</el-menu-item>
            <el-submenu class="header-menu-tab" index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item class="header-menu-tab-item" index="2-1">选项1</el-menu-item>
                <el-menu-item class="header-menu-tab-item" index="2-2">选项2</el-menu-item>
                <el-menu-item class="header-menu-tab-item" index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item class="header-menu-tab" index="3">订单管理</el-menu-item>
        </el-menu>
    </div>
</template>

<style scoped lang="less">
    @import 'Header.less';
</style>

<script>
    export default {
        name: 'header',
        data () {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect (key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>
