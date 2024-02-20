<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/route01">Route01</RouterLink>
        <RouterLink to="/route02">Route02</RouterLink>
        <RouterLink to="/route03">Route03</RouterLink>
        <RouterLink to="/route04">Route04</RouterLink>
        <RouterLink to="/route05">Route05</RouterLink>
        <RouterLink to="/route06">Route06</RouterLink>
      </nav>
    </header>
  </main>
</template>

<style>
  header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
