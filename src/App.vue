<script>
import { store } from "./store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  data() {
    return {
      store,
    };
  },

  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <app-header
    :socialLinks="store.socialLinks"
    :educationLinks="store.educationLinks"
    :quickLinks="store.quickLinks"
  ></app-header>
  <app-main></app-main>
  <app-footer
    :socialLinks="store.socialLinks"
    :educationLinks="store.educationLinks"
    :quickLinks="store.quickLinks"
  >
  </app-footer>
</template>

<style lang="scss">
@use "./assets/style/general.scss";
</style>
