<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import { variables } from './assets/variables';

const shadowDiv = ref<HTMLElement | null>(null);

onMounted(() => {
  const shadow = shadowDiv.value!.attachShadow({ mode: "open" });
  const span = document.createElement("span");
  span.textContent = "I'm in the shadow DOM";
  span.style.color="var(--g)"
  shadow.appendChild(span);
});
</script>

<template>
  <div class="toto">
    toto
  </div>
  <div :style="`color: ${variables.b}`">
    titi
  </div>
  <div ref="shadowDiv">
  </div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.bob {
  color: red;
}
.toto {
  border: 5px solid var(--g);
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
