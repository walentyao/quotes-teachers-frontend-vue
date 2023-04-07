<template>
    <side-bar v-if="auth">
        <add-quote @add-quote="createQuote"></add-quote>
    </side-bar>
    <div class="container-list">
        <quotes-list :quotes="quotes" ></quotes-list>
        <observer-element @intersect="getPackQuotes"></observer-element>
    </div>
</template>

<script>
import QuotesList from "@/pages/MainPage/components/QuotesList.vue";
import SideBar from "@/components/SideBar.vue";
import AddQuote from "@/pages/MainPage/components/AddQuote.vue";
import {mapActions, mapState} from "vuex";
import ObserverElement from "@/components/ObserverElement.vue";

export default {
    name: "MainPage",
    components: {ObserverElement, AddQuote, SideBar, QuotesList},
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            quotes: state => state.quotesStore.quotes,
            auth:state => state.authStore.authorization
        })
    },
    methods: {
        ...mapActions('quotesStore', ['getLimitQuotes', 'createQuote']),
        getPackQuotes(){
            this.getLimitQuotes();
        },
    }
}
</script>

<style scoped>

.container-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    width: 100%;
}
</style>