<template>
    <div class="list">
        <quotes-item v-for="item in quotes" :quote="item" :key="item.id"></quotes-item>
    </div>
</template>

<script>
import QuotesItem from "@/components/QuotesItem.vue";

export default {
    name: "QuotesList",
    components: {QuotesItem},
    data() {
        return {

        }
    },
    props:{
        quotes:Array
    }
}
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    max-width: 600px;
    width: 100%;
}
</style>