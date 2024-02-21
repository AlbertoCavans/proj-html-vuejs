<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },

  props: {
    homeTeamImg: String,
    guestTeamImg: String,
  },
};
</script>

<template>
  <div class="next-match-section">
    <div class="row-teams">
      <div class="d-flex">
        <h2>{{ store.nextMatch.homeTeamName }}</h2>
        <img :src="homeTeamImg" alt="" />
      </div>
      <div><h2 class="h1">VS</h2></div>
      <div>
        <img :src="guestTeamImg" alt="" />
        <h2>{{ store.nextMatch.guestTeamName }}</h2>
      </div>
    </div>
    <div class="row-info-match">
      <strong>
        <font-awesome-icon icon="fa-solid fa-calendar-days" />
        {{ store.nextMatch.dateMatch }}</strong
      >
      <strong
        ><font-awesome-icon icon="fa-solid fa-circle-plus" />
        {{ store.nextMatch.location }}</strong
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partials/mixins" as *;
.next-match-section {
  @include center-evenly();
  flex-direction: column;
  height: 300px;
  width: 1000px;
}

.row-teams {
  @include center-evenly();
  width: 800px;
  div {
    display: flex;
    align-items: center;
  }
}

.row-info-match {
  width: 500px;
  display: flex;
  justify-content: space-evenly;
}

* {
  overflow: hidden;
}
</style>
