<template>
    <header-pages></header-pages>
    <router-view></router-view>
</template>

<script>
import HeaderPages from "@/components/HeaderPages.vue";
import {mapMutations} from "vuex";

export default {
    name: 'App',
    components: {
        HeaderPages
    },
    methods:{
        ...mapMutations('authStore',['checkAuth'])
    },

    beforeMount() {
        this.checkAuth();
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>
