<template>
    <div class="side-panel" :class="{'side-panel__open':isOpen}">
        <div class="panel_wrapper">
            <div class="panel">
                <slot></slot>
            </div>
            <div>
                <div :class="{arrow:!isOpen, arrow2:isOpen}" @click="toggle" id="arrow"></div>
                <label for="arrow" class="arrow_text">{{textArrow}}</label>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "SideBar",
    data() {
        return {
            isOpen: false
        }
    },
    computed:{
        textArrow(){
            return this.isOpen?'Закрыть':'Добавить';
        }
    },
    methods: {
        toggle(){
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style scoped>

.side-panel {
    display: block;
    position: fixed;
    left: -320px;
    top: 0;
    max-width: max-content;
    height: 100vh;
    transition: all 0.5s;
    margin-top: 10%;
}

.side-panel__open {
    left: 0;
}

.panel_wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 10px;
}

.panel {
    width: 320px;
}


.arrow {
    position: relative;
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
}

.arrow:before,
.arrow:after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-right: 10px solid #5a71dc;
    border-bottom: 10px solid #5a71dc;
    animation: arrow 3s linear infinite;
    cursor: pointer;
}

.arrow:after {
    animation: arrow 3s linear infinite -1.5s;
}

@keyframes arrow {
    0% {
        opacity: 0;
        transform: translate(-23px, 0) rotate(-45deg);
    }
    10%, 90% {
        opacity: 0;
    }
    50% {
        opacity: 1;
        transform: translate(0, 0) rotate(-45deg);
    }
    100% {
        opacity: 0;
        transform: translate(23px, 0) rotate(-45deg);
    }
}

.arrow_text {
    font-size: 11px;
    padding: 3px;
}

.arrow2 {
    position: relative;
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
    margin-left: 20px;
}

.arrow2:before,
.arrow2:after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-top: 10px solid #5a71dc;
    border-left: 10px solid #5a71dc;
    animation: arrow2 3s linear infinite;
    cursor: pointer;
}

.arrow2:after {
    animation: arrow2 3s linear infinite -1.5s;
}

@keyframes arrow2 {
    0% {
        opacity: 0;
        transform: translate(23px, 0) rotate(-45deg);
    }
    10%, 90% {
        opacity: 0;
    }
    50% {
        opacity: 1;
        transform: translate(0, 0) rotate(-45deg);
    }
    100% {
        opacity: 0;
        transform: translate(-23px, 0) rotate(-45deg);
    }
}

</style>