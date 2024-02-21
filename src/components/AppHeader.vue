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
    quickLinks: Array,
    educationLinks: Array,
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
      <!-- OBSERVED -->
      <div class="item">
        <img
          :src="buildImagePath(slides[observedImg].image)"
          alt="football poster"
        />
      </div>
    </div>
    <!-- HEADER-BAR -->
    <div class="header-bar w-100">
      <!-- LOGO-BAR -->
      <div class="logo-bar">
        <img
          src="../assets/img/logo-football.png"
          alt=""
          class="logo-league position-absolute"
        />
        <ul class="sponsor-list">
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
      <!-- NAVBAR-MENU -->
      <nav class="navbar">
        <ul>
          <li v-for="quickLink in quickLinks">
            <a :href="quickLink.url">
              {{ quickLink.text }}
            </a>
          </li>
        </ul>
        <ul>
          <li v-for="educationLink in educationLinks">
            <a :href="educationLink.url">
              {{ educationLink.text }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- CENTER TITLE -->
    <div class="center-header p-5">
      <!-- PREV ARROW -->
      <div class="prev" @click="prevSlide()">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </div>

      <div class="title-area">
        <h1>Football CLub</h1>
        <h1>Sport CLub</h1>
        <h4 class="p-4">Private football matches</h4>
        <button type="button" class="btn btn-outline-light pt-4">
          Learn More <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
        </button>
      </div>
      <div>
        <!-- NEXT ARROW -->
        <div class="next" @click="nextSlide()">
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partials/mixins" as *;
@use "../assets/style/partials/variables" as *;
* {
  overflow: hidden;
}
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $white-color;
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
  position: absolute;
  top: calc(60%);
  cursor: pointer;
  z-index: 4;
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
  background-color: rgba(0, 0, 0, 0.675);
  height: 300px;
  padding: 70px;
  font-weight: 700;
  z-index: -2;
}

.logo-bar {
  height: 150px;
  @include center-evenly();
  .logo-league {
    width: 150px;
    z-index: -1;
  }
}

.sponsor-list {
  @include centered();
}

ul {
  padding: 30px;
}

.navbar ul {
  @include center-between();
  width: 50%;
  a:hover {
    text-decoration: underline;
  }
}

.center-header {
  @include center-between();
  h1 {
    font-size: 6rem;
    font-weight: 700;
  }
}

.title-area {
  @include centered();
  flex-direction: column;
}

.btn-outline-light {
  padding: 15px 40px;
  border-radius: 20px;
  font-size: 1.5rem;
  margin-bottom: 30px;
}
</style>
