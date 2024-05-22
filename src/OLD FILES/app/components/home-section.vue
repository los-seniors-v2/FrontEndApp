<script>
import FoodItemList from '../food-item/components/card-food-list.component.vue'
import CalenderComponent from '../calenders/components/calender.component.vue'
export default {
  name: "home-section",
  components: {
    FoodItemList,
    CalenderComponent
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
  <div class="coach-programming">
    <p>Do you want to schedule a session with our coaches?</p>
    <CalenderComponent/>
  </div>
</template>

<style scoped>
.banner {
  align-items: center;
  background-image: url('../../../assets/images/banner-flexpal.png');
}
.coach-programming{
  text-align: center;
}
.content {
  text-align: center;
  color: #17A9C9;
}
</style>