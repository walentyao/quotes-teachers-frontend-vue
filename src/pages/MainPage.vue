<template>
    <side-bar :is-open="isOpen">
        <add-quote @add-quote="addQuote"></add-quote>
    </side-bar>

    <div class="container-list">
        <button class="btn" @click="toggle">{{ !isOpen ? 'Добавить' : 'Закрыть' }}</button>
        <quotes-list :quotes="quotes"></quotes-list>
    </div>
</template>

<script>
import QuotesList from "@/components/QuotesList.vue";
import SideBar from "@/components/SideBar.vue";
import AddQuote from "@/components/AddQuote.vue";
import {mapMutations, mapState} from "vuex";

export default {
    name: "MainPage",
    components: {AddQuote, SideBar, QuotesList},
    data() {
        return {
            isOpen: false
        }
    },
    computed: {
        ...mapState({
            quotes:state => state.quotesStore.quotes
        })
    },
    methods: {
        ...mapMutations('quotesStore', [
                'addQuote'
            ]),
        toggle() {
            this.isOpen = !this.isOpen;
        }
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

.btn {
    max-width: max-content;
    border: none;
    background: #5a71dc;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;

    color: white;
}

.btn:hover{

}
</style>