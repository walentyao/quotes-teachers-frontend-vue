import {createQuote, getAllQuotes, getQuotes} from "@/store/quotes/quotes.service";

export const quotesStore = {
    namespaced: true,
    state: () => ({
        quotes: [],
        countQuotes:0,
        limit: 10,
        pack:1
    }),
    mutations: {
        addQuote(state, quote) {
            state.quotes = [...state.quotes, quote];
        },
        addQuotes(state, quotes) {
            state.quotes = [...state.quotes, ...quotes];
        },
        setLikes(state, {quoteId, likes}){
            state.quotes.forEach((element)=>{
                if (element.id===quoteId)
                    element.likes = likes;
            })
        }
    },
    actions: {
        async getAllQuotes({commit}) {
            try {
                const quotes = await getAllQuotes();
                commit('addQuotes', quotes)
            } catch (e) {
                console.log(e.message)
            }
        },
        async getLimitQuotes({commit, state}) {
            try {
                const {quotes, headers} = await getQuotes(state.pack, state.limit);
                state.countQuotes = headers['count-quotes'];
                if (quotes.length > 0){
                    commit('addQuotes', quotes);
                    state.pack += 1;
                }
            } catch (e) {
                console.log(e.message)
            }
        },
        async createQuote({commit, rootState}, quote) {
            try {
                const createdQuote = await createQuote({...quote}, rootState.authStore.token);
                commit('addQuote', createdQuote);
            } catch (e) {
                console.log(e.message)
            }
        }
    },
    getters: {}
}