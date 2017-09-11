<template>
    <div class="tree">
        <!--<div class="tree-coll">-->
            <!--<span class="tree-coll-text">是否展开</span>-->
            <!--<el-switch-->
                    <!--class="tree-coll-switch"-->
                    <!--v-model="collapsible"-->
                    <!--:change="switchTree()"-->
                    <!--on-text="开"-->
                    <!--off-text="关">-->
            <!--</el-switch>-->
        <!--</div>-->
        <el-tree
                :data="data2"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2,3]"
                :props="defaultProps">
        </el-tree>
    </div>
</template>

<style scoped lang="less">
    @import 'TreeMenu.less';
</style>

<script>
    export default {
        data () {
            return {
                collapsible: true,
                keys: '[1, 2, 3]',
                data2: [{
                    id: 1,
                    label: '项目管理(组1)',
                    children: [{
                        id: 4,
                        label: '一班',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '项目管理(组2)',
                    children: [{
                        id: 5,
                        label: '一班'
                    }, {
                        id: 6,
                        label: '二班'
                    }]
                }, {
                    id: 3,
                    label: '项目管理(组3)',
                    children: [{
                        id: 7,
                        label: '一班'
                    }, {
                        id: 8,
                        label: '二班'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            switchTree (value) {
                console.log(this.collapsible);
//                this.collapsible = !this.collapsible;
                this.keys = this.collapsible ? '[]' : '[1, 2, 3, 4]';
            }
        }
    };
</script>