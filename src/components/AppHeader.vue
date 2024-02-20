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

      sponsorImgs: [
        {
          image: "sponsor1.png",
          url: "#",
        },
        {
          image: "sponsor2.png",
          url: "#",
        },
      ],

      observedImg: 0,

      autoMode: false,
    };
  },
  props: {
    socialLinks: Array,
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
    <!-- SLIDER -->
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
    <div class="header-bar">
      <div class="logo-bar">
        <ul class="d-flex align-items-center justify-content-center">
          <li v-for="sponsorImg in sponsorImgs">
            <img :src="buildImagePath(sponsorImg.image)" alt="" />
          </li>
        </ul>
        <ul class="d-flex justify-content-start">
          <li v-for="socialLink in socialLinks" class="h3 px-3 py-1 mx-2">
            <a :href="socialLink.url">
              <font-awesome-icon :icon="socialLink.icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partials/mixins" as *;
@use "../assets/style/partials/variables" as *;
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* !!!!!!!!!!!!!!!! SLIDER */
.slider-wrapper {
  position: absolute;
  top: 0;
  z-index: -3;
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
  border: 2px solid $white-color;
  color: $white-color;
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

.header-bar {
  background-color: rgba(0, 0, 0, 0);
  height: 400px;
  color: $white-color;
}

.logo-bar {
  height: 150px;
  @include centered();
  background-image: url(../assets/img/logo-football.png);
}

ul {
  padding: 30px;
}
</style>
