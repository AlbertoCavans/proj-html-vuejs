<script>
export default {
  data() {
    return {
      articles: [
        {
          img: "news1-1.png",
          date: "29.05.2022",
          topic: "Football",
          title: "What is Football?",
          abstract:
            "Football is a sport that is known as a ball game and is loved by [...]",
        },
        {
          img: "news2-1.png",
          date: "29.05.2022",
          topic: "Football",
          title: "What is Football?",
          abstract:
            "Football is a sport that is known as a ball game and is loved by [...]",
        },
        {
          img: "news3-1.png",
          date: "29.05.2022",
          topic: "Football",
          title: "What is Football?",
          abstract:
            "Football is a sport that is known as a ball game and is loved by [...]",
        },
        {
          img: "news4-1.png",
          date: "29.05.2022",
          topic: "Football",
          title: "What is Football?",
          abstract:
            "Football is a sport that is known as a ball game and is loved by [...]",
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
  <div class="container-news p-5">
    <div class="thumb-box">
      <font-awesome-icon icon="fa-regular fa-thumbs-up" class="h1" />
    </div>
    <div class="title-news-section">
      <h2>Resent New & Aticles</h2>
      <h6 class="text-center">Be aware of the football world</h6>
    </div>
    <div class="container-cards">
      <div class="card" v-for="article in articles">
        <img :src="buildImagePath(article.img)" alt="" width="210px" />
        <h6 class="py-2">
          <span>{{ article.date }}</span> -
          <span>{{ article.topic }}</span>
        </h6>
        <h5>{{ article.title }}</h5>
        <p class="font-weight-light">
          {{ article.abstract }}
        </p>
        <button type="button" class="btn btn-dark mt-4">
          <h2>More</h2>
        </button>
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
  width: 100vw;
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

.container-cards {
  @include center-evenly();
  .card {
    margin: 30px;
    @include centered();
    padding: 20px;
    width: 250px;
  }
}

.btn-dark {
  padding: 20px 35px;
  border-radius: 30px;
  font-size: 1.5rem;
  margin-bottom: 30px;
  @include centered();
}
</style>
