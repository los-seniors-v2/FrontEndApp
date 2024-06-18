<script>
import Card from "primevue/card"
export default {
  name: "FoodItemCard",
  components: {
    Card
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <pv-card style="width: 25rem; overflow: hidden">
    <template #header>
    </template>
    <template #title>{{ item.name }}</template>
    <template #subtitle>{{ item.description }}</template>
    <template #content>
      <p class="m-0">
        <strong>Calories:</strong> {{ item.calories }} <br>
        <strong>Fat total (g):</strong> {{ item.fat_total_g }} <br>
        <strong>Carbohydrates total (g):</strong> {{ item.carb_g }} <br>
        <strong>Protein (g):</strong> {{ item.protein_g }}
      </p>
    </template>
  </pv-card>
</template>

<style scoped>
Card {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  width: 200px;
}
</style>