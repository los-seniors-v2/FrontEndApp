<script>
import FoodItemList from '../components/card-food-list.component.vue'
export default {
  name: "home-section",
  components: {
    FoodItemList
  },
}
</script>

<template>
  <div class="banner">
    <div class="content">
      <br>
      <h1>Welcome to Your Gym App!</h1><br>
      <p>Track your workout plans and nutrition here.</p>
      <br>
    </div>

  </div>

  <FoodItemList/>

</template>

<style scoped>
.banner {
  align-items: center;
  background-image: url('../../assets/images/banner-flexpal.png');
}

.content {
  text-align: center;
  color: #17A9C9;
}
</style>