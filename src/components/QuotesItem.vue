<template>
    <div class="list__item">
        <div class="item_quotes">
            <p>{{quote.content}}</p>
            <div class="item_teacher">
                <h2>{{quote.teacherName}}</h2>
                <span>{{quote.faculty}}</span>
            </div>
        </div>
        <div class="item_other">
            <span class="item_date">{{quote.date}}</span>
            <div class="item_likes">
                {{quote.likes}}
                <icon-heart :is-active="false"></icon-heart>
            </div>
        </div>
    </div>
</template>

<script>
import IconHeart from "@/assets/icon-heart.vue";

export default {
    name: "QuotesItem",
    components: {IconHeart},
    props:{
        quote:{
            content:String,
            teacherName:String,
            faculty:String,
            date:String,
            likes:Number
        }
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.list__item {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    max-width: 600px;

}

.item_quotes {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.item_teacher {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.item_other {

    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.item_date {

}

.item_likes {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    column-gap: 5px;
}
</style>