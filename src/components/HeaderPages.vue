<template>
    <div class="header">
        <div @click="this.$router.push('/')" class="logo">
            <icon-logo></icon-logo>
        </div>

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
            <span>{{ username }}</span>
            <button
                    class="buttons-group_btn"
                    @click="logOut"
            >Выйти
            </button>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import IconLogo from "@/assets/icon-logo.vue";

export default {
    name: "HeaderPages",
    components: {IconLogo},
    computed: {
        ...mapState({
            authorization: state => state.authStore.authorization,
            username: state => state.authStore.username
        })
    },
    methods: {
        ...mapMutations('authStore', ['logOut'])
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
    flex-direction: row;
    align-items: center;
    column-gap: 10px;
}

.buttons-group_btn {
    text-decoration: none;
    color: black;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;

    font-size: 16px;
}

.buttons-group_btn:hover {
    background: #5a71dc;
    color: white;
    border: 1px solid #5a71dc;
}

.logo {
    cursor: pointer;
    padding:0 20px;
}
</style>