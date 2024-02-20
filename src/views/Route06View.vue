<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import InfoItem from '@/components/InfoItem06.vue';
  import infoData06 from '@/data/infoData06';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
    </nav>
    <h1>Vista 06</h1>
  </header>
  <body>
    <div>
      <ul>
        <InfoItem v-bind="datos" v-for="(datos, index) in infoData06" :key="index" />
      </ul>
    </div>
  </body>
</template>

<style scoped>
  body {
  --border: 1px solid var(--color-border);
  padding: 1rem;
  font-size: 140%;
}

header {
  width: 100%;
  --border: 1px solid var(--color-border);
  padding-bottom: 10px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  --border: 1px solid var(--color-border);
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  padding: 1rem 1rem 1rem 1rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border: 1px solid var(--color-border);
}
</style>
