import {login, registration} from "@/store/auth/auth.service";

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
        },
        logOut(state){
            state.token = '';
            state.username = '';
            state.authorization = false;
            state.error = '';

            window.localStorage.removeItem('token');
            window.localStorage.removeItem('username');

        },
        checkAuth(state){
            const token = window.localStorage.getItem('token');
            const username = window.localStorage.getItem('username');
            if (token&&username){
                state.authorization = true;
                state.username = username;
                state.token = token;
            }
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
        },
        async registration({commit}, {email,password, username}){
            try {
                const token = await registration({email, password, username});
                commit('addUser', {token, username});
            } catch (error) {
                commit('addError', error.message)
            }
        }
    },
    getters: {}
}