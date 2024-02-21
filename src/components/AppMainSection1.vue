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
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partials/mixins" as *;
.next-match-section {
  @include center-evenly();
  height: 400px;
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
* {
  overflow: hidden;
}
</style>
