<template>
<div class="register-container">
    <register-panel></register-panel>
</div>
</template>

<script>
import RegisterPanel from "@/pages/RegisterPage/components/RegisterPanel.vue";

export default {
    name: "RegisterPage",
    components: {RegisterPanel}
}
</script>

<style scoped>
.register-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20%;
}
</style>