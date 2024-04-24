<script>
import FoodItemCard from "/src/app/food-item/components/card-food-item.component.vue";

export default {
  name: "App",
  components: {
    FoodItemCard,
  },
  data() {
    return {
      foodItems: [],
    };
  },
  created() {
    fetch('/src/app/food-item/services/food-item-api.service.json')
        .then(response => response.json())
        .then(data => {
          this.foodItems = data;
        });
  },
};
</script>

<template>
  <div>
    <FoodItemCard v-for="item in foodItems" :key="item.id" :item="item"/>
  </div>
</template>

<style scoped>

</style>