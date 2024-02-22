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
      /* console.log(imageUrl); */
      return imageUrl.href;
    },
  },
};
</script>

<template>
  <div class="cards-container p-1">
    <div class="card p-5" v-for="client in store.clients">
      <a :href="client.clientLink"
        ><img
          :src="buildImagePath(client.img)"
          alt=""
          width="120px"
          height="80"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partials/mixins" as *;
.cards-container {
  @include center-evenly();
  background-color: black;
  width: 100vw;
}

.card {
  background-color: black;
  border: 2px solid white;
}
</style>
