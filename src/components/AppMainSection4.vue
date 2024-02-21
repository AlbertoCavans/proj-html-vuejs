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
};
</script>

<template>
  <div class="tables-container row w-75">
    <!-- ******TABLE 1 -->
    <div class="col-6 main-cols">
      <h2 class="p-4">League Table</h2>
      <div class="list-group">
        <ul>
          <li class="border bg-dark text-light px-4">
            <div class="row">
              <div class="col-7">TEAM</div>
              <div class="col-1">W</div>
              <div class="col-1">D</div>
              <div class="col-1">L</div>
              <div class="col-1">PTS</div>
            </div>
          </li>
          <li
            class="body-table1 px-4"
            v-for="positionTeam in store.positionteams"
          >
            <div class="row">
              <div class="col-1">{{ positionTeam.position }}</div>
              <div class="col-6">
                <img
                  :src="buildImagePath(positionTeam.teamImg)"
                  alt=""
                  width="50px"
                />
                {{ positionTeam.teamName }}
              </div>
              <div class="col-1">{{ positionTeam.teamWins }}</div>
              <div class="col-1">{{ positionTeam.teamDraws }}</div>
              <div class="col-1">{{ positionTeam.teamLoses }}</div>
              <div class="col-1">{{ positionTeam.teamPoints }}</div>
            </div>
          </li>
          <li
            class="bg-dark text-light d-flex align-items-center justify-content-center"
          >
            View Full League Table
          </li>
        </ul>
      </div>
    </div>

    <!-- ****** TABLE2 -->
    <div class="col-6 main-cols">
      <h2 class="p-4">Fixture & Results</h2>
      <div class="list-group">
        <ul>
          <li class="body-table1 px-4" v-for="allMatch in store.allMatchs">
            <div class="row-teams">
              <div class="d-flex">
                <img
                  :src="buildImagePath(allMatch.homeTeamImg)"
                  alt=""
                  width="30px"
                />
                <h5>{{ allMatch.homeTeamName }}</h5>
              </div>
              <div><h5 class="h1">VS</h5></div>
              <div>
                <h5>{{ allMatch.guestTeamName }}</h5>
                <img
                  :src="buildImagePath(allMatch.guestTeamImg)"
                  alt=""
                  width="30px"
                />
              </div>
            </div>
          </li>
          <li
            class="bg-dark text-light d-flex align-items-center justify-content-center"
          >
            View Full League Table
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="ad-container">
    <img src="../assets/img/reklam.jpg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partials/mixins" as *;
@use "../assets/style/partials/variables" as *;
* {
  overflow: hidden;
}

.tables-container {
  height: 900px;
}

.main-cols {
  @include centered();
  height: 900px;
  flex-direction: column;
}

.thead-dark tr {
  color: white;
  background-color: black;
}

.body-table1 {
  background-color: $lightgray-color;
}

li {
  width: 500px;
  padding: 10px;
}

.row-teams {
  @include center-evenly();

  div {
    display: flex;
    align-items: center;
  }
}
</style>
