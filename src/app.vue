<script>
import DataTableFoodItem from "/src/app/food-item/components/data-table-food-item.component.vue";

export default {
  name: "App",
  components: {
    DataTableFoodItem,
  },
};
</script>

<template>
  <div id="app-container">
    <DataTableFoodItem/>
  </div>
</template>

<style scoped>
#app-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>