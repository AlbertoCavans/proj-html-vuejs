<script>
import { store } from "../store";
import AppMainSection1 from "./AppMainSection1.vue";
import AppMainSection2 from "./AppMainSection2.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("../assets/img/" + imageName, import.meta.url);
      console.log(imageUrl);
      return imageUrl.href;
    },
  },

  components: {
    AppMainSection1,
    AppMainSection2,
  },
};
</script>

<template>
  <div class="main-container">
    <app-main-section1
      :homeTeamImg="buildImagePath(store.nextMatch.homeTeamImg)"
      :guestTeamImg="buildImagePath(store.nextMatch.guestTeamImg)"
    ></app-main-section1>

    <app-main-section2></app-main-section2>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partials/mixins" as *;

.main-container {
  @include centered();
  flex-direction: column;
}
</style>
