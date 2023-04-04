import {createStore} from "vuex";
import {quotesStore} from "@/store/quotes/quotes.store";
import {authStore} from "@/store/auth/auth.store";

export const store = createStore({
    modules:{
        quotesStore,
        authStore
    }
})