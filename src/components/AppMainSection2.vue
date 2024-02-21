<script>
import { store } from "../store";

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
  props: {
    homeTeamImg: String,
    guestTeamImg: String,
  },
};
</script>

<template>
  <div class="main-section2">
    <h2>Upcoming matchs</h2>
    <div
      class="match-slot m-4 card"
      v-for="upcomingMatch in store.upcomingMatchs"
    >
      <div class="row-teams">
        <div class="d-flex">
          <img :src="buildImagePath(upcomingMatch.homeTeamImg)" alt="" />
          <h2>{{ upcomingMatch.homeTeamName }}</h2>
        </div>
        <div><h2 class="h1">VS</h2></div>
        <div>
          <h2>{{ upcomingMatch.guestTeamName }}</h2>
          <img :src="buildImagePath(upcomingMatch.guestTeamImg)" alt="" />
        </div>
      </div>
      <div class="row-info-match">
        <strong>
          <font-awesome-icon icon="fa-solid fa-calendar-days" />
          {{ upcomingMatch.dateMatch }}</strong
        >
        <strong
          ><font-awesome-icon icon="fa-solid fa-circle-plus" />
          {{ upcomingMatch.location }}</strong
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;
@use "../assets/style/partials/mixins" as *;
.main-section2 {
  @include centered();
  background-image: url("../src/assets/img/saha.jpg");
  width: 100vw;
  padding: 40px;
  flex-direction: column;
}

.row-teams {
  @include center-evenly();
  width: 1000px;
  div {
    display: flex;
    align-items: center;
  }
}

.row-info-match {
  @include center-evenly();
}

.card {
  background-color: rgba(0, 0, 0, 0.288);
}

.row-info-match {
  background-color: rgba(0, 0, 0, 0.504);
}

* {
  overflow: hidden;
  color: $white-color;
}
</style>
