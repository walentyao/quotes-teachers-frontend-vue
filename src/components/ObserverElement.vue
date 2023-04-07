<template>
    <div class="observer"></div>
</template>

<script>
export default {
    name: "ObserverElement",
    props: ['options'],
    emits:['intersect'],
    data() {
        return {
            observer: null
        }
    },
    mounted() {
        const options = this.options || {};
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                this.$emit('intersect');
            }
        }, options);

        this.observer.observe(this.$el);
    },
    unmounted() {
        this.observer.disconnect();
    }
}
</script>

<style scoped>
.observer {
    width: 100%;
    padding: 20px;
}
</style>