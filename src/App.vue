<template>
    <div id="app">
        <header-component></header-component>
        <router-view></router-view>
    </div>
</template>

<script>
    import HeaderComponent from './components/Header/Header.vue';

    export default {
        name: 'app',
        components: { HeaderComponent }
    };
</script>

<style>
    @import "common.less";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>