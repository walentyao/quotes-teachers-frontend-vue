<template>
<div class="login-container">
    <login-panel></login-panel>
</div>
</template>

<script>
import LoginPanel from "@/components/LoginPanel.vue";

export default {
    name: "LoginPage",
    components: {LoginPanel}
}
</script>

<style scoped>
.login-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20%;
}
</style>