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

      educationLinks: [
        {
          text: "FIXTURES & RESULTS",
          url: "#",
        },
        {
          text: "LEAGUE TABLE",
          url: "#",
        },
        {
          text: "PLAYERS",
          url: "#",
        },
        {
          text: "GALLERY",
          url: "#",
        },
      ],

      quickLinks: [
        {
          text: "HOME",
          url: "#",
        },
        {
          text: "BLOG",
          url: "#",
        },
        {
          text: "GALLERY",
          url: "#",
        },
        {
          text: "CONTACT",
          url: "#",
        },
      ],
    };
  },

  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <app-header
    :socialLinks="socialLinks"
    :educationLinks="educationLinks"
    :quickLinks="quickLinks"
  ></app-header>
  <app-main></app-main>
  <app-footer
    :socialLinks="socialLinks"
    :educationLinks="educationLinks"
    :quickLinks="quickLinks"
  >
  </app-footer>
</template>

<style lang="scss">
@use "./assets/style/general.scss";
</style>
