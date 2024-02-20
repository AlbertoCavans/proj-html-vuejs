<script>
export default {
  data() {
    return {
      standardContacts: [
        {
          icon: "fa-solid fa-location-dot",
          info: "New Jersey, USA",
          url: "#",
        },
        {
          icon: "fa-solid fa-phone-volume",
          info: "+1 (234) 567 89 10",
          url: "#",
        },
        {
          icon: "fa-solid fa-envelope",
          info: "example@example.com",
          url: "#",
        },
      ],
    };
  },

  props: {
    socialLinks: Array,
    educationLinks: Array,
    quickLinks: Array,
  },
};
</script>

<template>
  <footer>
    <div class="row px-5 pt-5">
      <!-- COL-1 -->
      <div class="col-4 px-3 d-flex justify-content-between flex-column">
        <ul>
          <img
            src="../assets/img/logo-footer-football.png"
            alt=""
            class="ourleague"
          />
          <li v-for="standardContact in standardContacts" class="py-3">
            <a :href="standardContact.url">
              <font-awesome-icon :icon="standardContact.icon" class="icon" />
              {{ standardContact.info }}
            </a>
          </li>
          <li>
            <ul class="d-flex justify-content-start">
              <li
                v-for="socialLink in socialLinks"
                class="border px-3 py-1 mx-2"
              >
                <a :href="socialLink.url">
                  <font-awesome-icon :icon="socialLink.icon" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- COL-2 -->
      <div class="col-4 d-flex flex-column justify-content-between">
        <h2 class="overflow-hidden">Join Our Newsletter</h2>
        <p>
          Subscribe to be informed abou importan developments in our club and
          football world.
        </p>
        <form>
          <div class="form-group">
            <input
              type="email"
              class="form-control py-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your Email Address"
            />
          </div>

          <button type="submit" class="btn btn-light my-2 w-100 py-4">
            Submit
          </button>
        </form>
      </div>
      <!-- COL-3 -->
      <div class="col-4 d-flex justify-content-evenly">
        <ul class="stylish-ul">
          <h3 class="pb-3">Education</h3>
          <li v-for="educationLink in educationLinks" class="py-2">
            -
            <a :href="educationLink.url">
              {{ educationLink.text }}
            </a>
          </li>
        </ul>

        <ul>
          <h3 class="pb-3">Quick Links</h3>

          <li v-for="quickLink in quickLinks" class="py-2">
            -
            <a :href="quickLink.url">
              {{ quickLink.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- COPYRIGHT -->
    <div
      class="copyright-section d-flex justify-content-center align-items-center"
    >
      <h6 class="overflow-hidden">
        <font-awesome-icon icon="fa-regular fa-copyright" />
        2022 Football Club - All Rights Reserved.
      </h6>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.bordered {
  border: 2px solid red;
}

footer {
  background-image: url("../assets/img/footer-bg-football.jpg");
  color: white;
  .copyright-section {
    height: 80px;
  }
}

.ourleague {
  width: 70px;
}

.icon {
  font-size: 1.8rem;
}

footer .row .col-4 .stylish-ul {
  list-style-type: circle;
}
</style>
