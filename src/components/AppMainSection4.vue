<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="row w-75">
    <div class="col-6"><h2>League Table</h2></div>

    <div class="col-6"><h2>Fixture & Results</h2></div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/style/partials/mixins" as *;
@use "../assets/style/partials/variables" as *;
* {
  overflow: hidden;
}

.col-6 {
  @include centered();
}
</style>
