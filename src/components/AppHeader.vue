<script>
export default {
  data() {
    return {
      slides: [
        {
          image: "slider1-1.jpg",
        },
        {
          image: "slider2-1.jpg",
        },
        {
          image: "slider3.jpg",
        },
        {
          image: "slider4.jpg",
        },
      ],

      observedImg: 0,

      autoMode: false,
    };
  },

  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL("../assets/img/" + imageName, import.meta.url);
      return imageUrl.href;
    },

    goToSlide(index) {
      this.observedImg = index;
    },

    prevSlide() {
      if (this.observedImg <= 0) {
        this.goToSlide(this.slides.length - 1);
      } else {
        this.goToSlide(this.observedImg - 1);
      }
    },

    nextSlide() {
      if (this.observedImg >= this.slides.length - 1) {
        this.goToSlide(0);
      } else {
        this.goToSlide(this.observedImg + 1);
      }
    },

    setAutoMode() {
      this.autoMode = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
  },

  mounted() {
    this.setAutoMode();
  },
};
</script>

<template>
  <div class="header-container">
    <div class="slider-wrapper" tabindex="0">
      <!-- PREV ARROW -->
      <div class="prev" @click="prevSlide()">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </div>
      <!-- NEXT ARROW -->
      <div class="next" @click="nextSlide()">
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </div>
      <!-- OBSERVED -->
      <div class="item">
        <img :src="buildImagePath(slides[observedImg].image)" alt="Spiderman" />
      </div>
    </div>
  </div>

  <h1>AppHeader</h1>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  width: 100vw;

  position: relative;
}

.item img {
  width: 100vw;

  object-fit: cover;
}

.prev,
.next {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ccc;
  color: #ccc;
  position: absolute;
  top: calc(50% - 25px);
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.prev {
  left: 50px;
}
.next {
  right: 50px;
}
</style>
