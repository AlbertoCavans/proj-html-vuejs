<script>
import { store } from "../store";
import AppMainSection1 from "./AppMainSection1.vue";
import AppMainSection2 from "./AppMainSection2.vue";
import AppMainSection3 from "./AppMainSection3.vue";
import AppMainSection4 from "./AppMainSection4.vue";
import AppMainSection5 from "./AppMainSection5.vue";
import AppMainSection6 from "./AppMainSection6.vue";

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
    AppMainSection2,
    AppMainSection3,
    AppMainSection4,
    AppMainSection5,
    AppMainSection6,
  },
};
</script>

<template>
  <div class="main-container">
    <!--************ NEXT MATCH -->
    <app-main-section1
      :homeTeamImg="buildImagePath(store.nextMatch.homeTeamImg)"
      :guestTeamImg="buildImagePath(store.nextMatch.guestTeamImg)"
    ></app-main-section1>

    <!--************ UPCOMING MATCHS -->
    <app-main-section2></app-main-section2>

    <!--************ PLAYERS -->
    <app-main-section3></app-main-section3>

    <!--************ TABLES -->
    <app-main-section4></app-main-section4>

    <!--************ CLIENTS -->
    <app-main-section5></app-main-section5>

    <!--************ TABLES -->
    <app-main-section6></app-main-section6>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partials/mixins" as *;

.main-container {
  @include centered();
  flex-direction: column;
}
</style>
