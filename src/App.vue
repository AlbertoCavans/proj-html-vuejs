<script>
import { store } from "./store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppMain from "./components/AppFooter.vue";
export default {
  data() {
    return {
      store,
      title: "Hello world",
    };
  },

  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <app-header></app-header>
  <app-main></app-main>
  <app-footer></app-footer>
</template>

<style lang="scss">
@use "./assets/style/general.scss";
</style>
