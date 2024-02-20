<script>
import { store } from "./store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  data() {
    return {
      store,
      socialLinks: [
        {
          icon: "fa-brands fa-facebook-f",
          url: "#",
        },
        {
          icon: "fa-brands fa-instagram",
          url: "#",
        },
        {
          icon: "fa-brands fa-twitter",
          url: "#",
        },
      ],
    };
  },

  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <app-header></app-header>
  <app-main></app-main>
  <app-footer :socialLinks="socialLinks"></app-footer>
</template>

<style lang="scss">
@use "./assets/style/general.scss";
</style>
