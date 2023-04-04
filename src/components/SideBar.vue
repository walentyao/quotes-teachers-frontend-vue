<template>
    <div class="side-panel" :class="{'side-panel__open':isOpen}">
    <slot></slot>
    </div>
</template>

<script>

export default {
    name: "SideBar",
    props:{
        isOpen:Boolean
    }
}
</script>

<style scoped>

.side-panel{
    display: block;
    position: fixed;
    left: -320px;
    top: 0;
    width: 320px;
    height: 100vh;
    transition: all 0.5s;
    margin-top: 10%;
}

.side-panel__open{
    left: 0;
}
</style>