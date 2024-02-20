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
  },
};
</script>

<template>
  <div class="row">
    <div class="col-4 bordered p-5">
      <ul>
        <img
          src="../assets/img/logo-footer-football.png"
          alt=""
          class="ourleague"
        />
        <li v-for="standardContact in standardContacts" class="py-2">
          <a :href="standardContact.url">
            <font-awesome-icon :icon="standardContact.icon" class="icon" />
            {{ standardContact.info }}
          </a>
        </li>
        <li>
          <ul class="d-flex justify-content-start">
            <li v-for="socialLink in socialLinks" class="border px-3 py-1 mx-2">
              <a :href="socialLink.url">
                <font-awesome-icon :icon="socialLink.icon" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-4 bordered"></div>
    <div class="col-4 bordered"></div>
  </div>
</template>

<style lang="scss" scoped>
.bordered {
  border: 2px solid red;
}

.row {
  background-image: url("../assets/img/footer-bg-football.jpg");
  color: white;
}

.ourleague {
  width: 70px;
}

.icon {
  font-size: 1.8rem;
}
</style>
