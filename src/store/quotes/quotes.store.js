export const quotesStore = {
    namespaced:true,
    state: () => ({
        quotes:[]
    }),
    mutations: {
        addQuote(state, quote){
            state.quotes = [...state.quotes, {...quote, id:new Date(), likes:0, date:new Date().toDateString()}];
        }
    },
    actions: {  },
    getters: {

    }
}