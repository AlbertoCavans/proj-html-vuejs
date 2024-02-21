<script>
import { store } from "../store";
import AppMainSection1 from "./AppMainSection1.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("../assets/img/" + imageName, import.meta.url);
      /* console.log(imageUrl); */
      return imageUrl.href;
    },
  },

  components: {
    AppMainSection1,
  },
};
</script>

<template>
  <div class="main-container">
    <app-main-section1
      :homeTeamImg="buildImagePath(store.nextMatch.homeTeamImg)"
      :guestTeamImg="buildImagePath(store.nextMatch.guestTeamImg)"
    ></app-main-section1>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partials/mixins" as *;

.main-container {
  @include centered();
}
</style>
