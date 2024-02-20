<template>
    <div class="card">
        <span>
            <h3>Colegio Técnico de Magia Metropolitana de Tokio</h3>
            <h1>{{ props.name }} {{ props.lastname }}</h1>
            <h2>Registro: {{ props.id }}</h2>
            <br />
        </span>
        <div class="photo-container">
            <div v-if="visual == true" class="cortina"><img class="photo" src="../imgs/toge-id.jpg" /></div>           
            <button @click="visual=!visual" class="btn-photo">Mostrar / Ocultar</button>
        </div>
        <br> <br>
        <span class="info-char">
            <h3>Edad: {{ props.age }}</h3>
            <h3>Genero: {{ props.gender }}</h3>
            <h3>Clase: <strong>{{ props.class }}</strong></h3>
        </span>
    </div>
</template>

<script setup lang="ts">
import type { Interface01 } from '@/interfaces/interface01'
import { ref } from 'vue';

const props = defineProps<Interface01>()
var visual = ref(true) ;

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Protest+Revolution&display=swap');

.card {
    width: 40rem;
    height: 45rem;
    font-family: 'Protest Revolution';  
    color: #000;
    background-color: #E4DFE8;
    border-radius: 5px;
    padding-left: 5rem;
    padding-top: 2rem;
    margin: 10px;
    animation: 3s infinite  ease-out breathing-color;
}

.photo-container {
    width: fit-content;
    position: relative;
    left: 3rem;
    top: 1rem;
    --border: 1px solid red;
}

.photo {
    width: 25rem;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.5),0 17px 50px 0 rgba(0, 0, 0, 0.4);
    border: 2.5px solid;
    border-radius: 5px;
}

.btn-photo {
    cursor: pointer;
    font-family:'Protest Revolution';
       color: rgb(0, 0, 0);
    background-color: #3BAF95;
    border: 2px solid;
    border-radius: 5px;
    width: 25rem;
    height: 2.5rem;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.5s;
}

.btn-photo:hover {
    background-color: #31ABE4;
    color: #000;
    box-shadow: 0 10px #999;
    --box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.5), 0 17px 50px 0 rgba(0, 0, 0, 0.4);
}

.btn-photo:active {
    background-color: #CC31E4;
    box-shadow: 0 5px #666;
}

.cortina {
    --border: 1px solid red;    
}
</style>