import {login} from "@/store/auth/auth.service";

export const authStore = {
    namespaced: true,
    state: () => ({
        token: '',
        username: '',
        authorization: false,
        error: ''
    }),
    mutations: {
        addUser(state, {token, username}) {
            state.token = token;
            state.username = username;
            state.authorization = true;
            window.localStorage.setItem('token', token);
            window.localStorage.setItem('username', username);
        },
        addError(state, error) {
            state.error = error;
        }
    },
    actions: {
        async login({commit}, {email, password}) {
            try {
                const {token, username} = await login(email, password);
                commit('addUser', {token, username});
            } catch (error) {
                commit('addError', error.message)
            }
        }
    },
    getters: {}
}