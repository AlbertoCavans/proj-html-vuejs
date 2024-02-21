<script>
export default {
  data() {
    return {
      articles: [
        {
          img: "",
          date: "29.05.2022",
          topic: "Football",
          title: "What is Football?",
          abstract:
            "Football is a sport that is known as a ball game and is loved by [...]",
        },
        {
          img: "",
          date: "29.05.2022",
          topic: "Football",
          title: "What is Football?",
          abstract:
            "Football is a sport that is known as a ball game and is loved by [...]",
        },
        {
          img: "",
          date: "29.05.2022",
          topic: "Football",
          title: "What is Football?",
          abstract:
            "Football is a sport that is known as a ball game and is loved by [...]",
        },
        {
          img: "",
          date: "29.05.2022",
          topic: "Football",
          title: "What is Football?",
          abstract:
            "Football is a sport that is known as a ball game and is loved by [...]",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container-news">
    <div class="thumb-box">
      <font-awesome-icon icon="fa-regular fa-thumbs-up" class="h1" />
    </div>
    <div class="title-news-section">
      <h2>Resent New & Aticles</h2>
      <h6 class="text-center">Be aware of the football world</h6>
    </div>
    <div class="container-cards">
      <div class="card">
        <img src="" alt="" />
        <h6>Date</h6>
        <h5>Title</h5>
        <p class="font-weight-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur,
          error.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partials/mixins" as *;

* {
  overflow: hidden;
}
.container-news {
  @include centered();
  width: 100vh;
  flex-direction: column;
  .thumb-box {
    background-color: black;
    padding: 30px;
    border-radius: 50%;
    margin: 50px;
    color: white;
  }
}

.h1 {
  border: 3px solid white;
  padding: 20px;
  border-radius: 50%;
}

.card {
  margin: 30px;
  @include centered();
  padding: 20px;
  width: 300px;
}
</style>
