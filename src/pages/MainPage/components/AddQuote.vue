<template>
    <form class="add-container">
        <textarea name="" id=""
                  cols="30" rows="5"
                  placeholder="Цитата"
                  class="add-container_textarea"
                  v-model="content"
        ></textarea>
        <input type="text"
               placeholder="Автор"
               class="add-container_input"
               v-model="teacher"
        >
        <input type="text"
               placeholder="Факультет"
               class="add-container_input"
               v-model="faculty"
        >
        <button class="add-container_btn" @click.prevent="addQuote">Добавить</button>
    </form>
</template>

<script>
export default {
    name: "AddQuote",
    emits: ['addQuote'],
    data() {
        return {
            content: '',
            teacher: '',
            faculty: ''
        }
    },
    methods: {
        addQuote() {
            this.$emit('addQuote', {content: this.content, teacher: this.teacher, faculty: this.faculty});
            this.content = '';
            this.teacher = '';
            this.faculty = '';
        }
    }
}
</script>

<style scoped>

.add-container {
    max-width: 100%;
    background: white;
    display: flex;
    flex-direction: column;

    border: 1px solid black;
    border-left: none;
    border-radius: 0 10px 10px 0;
    row-gap: 10px;

    padding: 20px;
}

.add-container_input {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid grey;
}

.add-container_textarea {
    border: 1px solid grey;
    padding: 5px;
    border-radius: 5px;
    max-width: 100%;
}

.add-container_textarea::placeholder {
    text-align: center;
}

.add-container_btn {
    border: none;
    background: #5a71dc;
    padding: 10px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}
</style>