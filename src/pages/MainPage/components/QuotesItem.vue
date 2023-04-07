<template>
    <div class="list__item">
        <div class="item_quotes">
            <div class="item_quotes_content">
                <p v-for="(el, index) in content_quote" :key="index">{{ el }}</p>
            </div>
            <div class="item_teacher">
                <h3>{{ quote.teacher }}</h3>
                <span>{{ quote.faculty }}</span>
            </div>
        </div>
        <div class="item_other">
            <span class="item_date">{{ date }}</span>
            <div class="item_likes">
                {{ quote.likes }}
                <icon-heart :is-active="liked" @click="likedQuote"></icon-heart>
            </div>
        </div>
    </div>
</template>
<script>
import IconHeart from "@/assets/icon-heart.vue";
import {mapMutations, mapState} from "vuex";
import {checkLike, deleteLikedQuote, likedQuote} from "@/store/quotes/quotes.service";

export default {
    name: "QuotesItem",
    components: {IconHeart},
    props: {
        quote: {
            content: String,
            teacherName: String,
            faculty: String,
            createdAt: String,
            likes: Number
        }
    },
    data() {
        return {
            liked: false
        }
    },
    computed: {
        date() {
            return new Date(this.quote.createdAt).toLocaleDateString();
        },
        content_quote() {
            return this.quote.content.split('\n');
        },
        ...mapState({
            auth: state => state.authStore.authorization,
            token: state => state.authStore.token
        })
    },
    methods: {
        async likedQuote() {
            const currentLikes = this.quote.likes ?? 0;
            if (this.liked && this.auth) {
                const {liked} = await deleteLikedQuote(this.quote.id, this.token);
                this.liked = liked;
                this.setLikes({quoteId: this.quote.id, likes: (currentLikes - 1)});
            } else {
                if (this.auth) {
                    const {liked} = await likedQuote(this.quote.id, this.token);
                    this.liked = liked;
                    this.setLikes({quoteId: this.quote.id, likes: (currentLikes + 1)});
                }
            }
        },
        ...mapMutations('quotesStore', ['setLikes'])
    },
    watch:{
      auth(){
          if (!this.auth){
              this.liked = false;
          }
      }
    },
    mounted() {
        if (this.auth){
            checkLike(this.quote.id, this.token).then(({liked}) => this.liked = liked)
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
    border: 1px solid grey;
    border-radius: 10px;
    max-width: 600px;
    box-shadow: 1px 1px 5px 1px grey;
}

.item_quotes {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 2px;

    border-bottom: 1px solid #b9b9b9;
}

.item_quotes_content {
    border-bottom: 1px solid #b9b9b9;
    padding-bottom: 2px;
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