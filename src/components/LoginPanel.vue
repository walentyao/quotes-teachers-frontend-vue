<template>
    <div class="login-block">
        <div class="block_input">
            <label for="email">Email</label>
            <input type="email"
                   id="email"
                   class="login-block_input"
                   placeholder="example@email.com"
                   v-model="email"
            >
        </div>
        <div class="block_input">
            <label for="password">Пароль</label>
            <input type="password"
                   id="password"
                   class="login-block_input"
                   placeholder="Введите пароль"
                   v-model="password"
            >
        </div>
        <div class="error" v-if="error">
            {{error}}
        </div>
        <div class="block_btn">
            <button class="btn_button" @click="login({email, password})">Войти</button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: "LoginPanel",
    data(){
        return{
            email:'',
            password:''
        }
    },
    computed:{
      ...mapState({
          authorization:state => state.authStore.authorization,
          error:state => state.authStore.error
      })
    },
    methods:{
        ...mapActions('authStore',[
            'login'
        ])
    },
    watch:{
        authorization(){
            if(this.authorization){
                this.$router.push({path:'/'})
            }
        }
    }
}
</script>

<style scoped>
.login-block{
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    max-width: max-content;
}
.block_input{
    display: flex;
    flex-direction: column;
}
.block_btn{
    display: flex;
    align-items: center;
    justify-content: center;
}
.btn_button{
    border: none;
    padding: 5px 10px;
    background: #5a71dc;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}
.login-block_input{
    padding: 5px;
    border: 1px solid grey;
    border-radius: 5px;
}
.error{
    background: #cc7d7d;
    color: white;
    padding: 5px;
    border-radius: 5px;
}
</style>