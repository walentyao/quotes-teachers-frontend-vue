<template>
    <div class="header">
        <div @click="this.$router.push('/')" class="logo">Logo</div>

        <div class="buttons-group" v-if="!authorization">
            <router-link
                    class="buttons-group_btn"
                    to="/login"
                    v-if="this.$route.path!=='/login'"
            >Войти
            </router-link>

            <router-link
                    class="buttons-group_btn"
                    to="/register"
                    v-if="this.$route.path!=='/register'"
            >Зарегистрироваться
            </router-link>
        </div>

        <div class="buttons-group" v-else>
            <router-link
                    class="buttons-group_btn"
                    to="/register"
            >Выйти
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "HeaderPages",
    computed: {
        ...mapState({
            authorization: state => state.authStore.authorization
        })
    }
}
</script>

<style scoped>
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 10px;

}

.buttons-group {
    display: flex;
    column-gap: 10px;
}

.buttons-group_btn {
    text-decoration: none;
    color: black;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;

    transition: all 0.2s;
}

.buttons-group_btn:hover {
    background: #5a71dc;
    color: white;
    border: 1px solid #5a71dc;
}

.logo {
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
}
</style>