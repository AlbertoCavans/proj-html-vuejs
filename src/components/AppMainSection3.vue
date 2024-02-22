<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,

      players: [
        {
          name: "Adam Brown",
          number: "07",
          role: "Forwarder",
          img: "player1.jpg",
          link: "#",
        },
        {
          name: "Michael Kayn",
          number: "09",
          role: "Forwarder",
          img: "player2.jpg",
          link: "#",
        },
        {
          name: "Michael Lee",
          number: "11",
          role: "Forwarder",
          img: "player3.jpg",
          link: "#",
        },
        {
          name: "Ethan Smith",
          number: "15",
          role: "Midfielder",
          img: "player4.jpg",
          link: "#",
        },
      ],
    };
  },

  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("../assets/img/" + imageName, import.meta.url);
      /* console.log(imageUrl); */
      return imageUrl.href;
    },
  },
};
</script>

<template>
  <div class="players-section">
    <h1>Players</h1>
    <div class="row-cards">
      <div class="card" v-for="player in players">
        <a :href="player.link">
          <img :src="buildImagePath(player.img)" alt="" width="220px" />
          <div class="info-player">
            <h5>{{ player.number }}</h5>
            <h5>{{ player.name }} - {{ player.role }}</h5>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;
@use "../assets/style/partials/mixins" as *;

.players-section {
  background-image: url("../assets/img/player.jpg");
  width: 100vw;
  @include centered();
  padding: 50px;
  flex-direction: column;
  .row-cards {
    @include center-evenly();
    width: 1100px;
    margin: 30px 0;
  }
}

.card {
  width: 220px;
  height: 300px;
  padding: 0;
  border-radius: 30px;

  .info-player {
    text-align: center;
    border-radius: 30px;
    background-color: black;
    position: absolute;
    bottom: 0;
  }
}

.card:hover {
  border: 2px solid greenyellow;
}

* {
  overflow: hidden;
  color: white;
}
</style>
