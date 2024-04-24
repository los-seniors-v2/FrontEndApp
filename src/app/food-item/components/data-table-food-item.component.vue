<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import FoodItemCard from './card-food-item.component.vue';

export default {
  name: "DataTableFoodItem",
  components: {
    DataTable,
    Column,
    FoodItemCard
  },
  data() {
    return {
      foodItems: [],
      rows: 5
    };
  },
  created() {
    fetch('/src/app/food-item/services/food-item-api.service.json')
        .then(response => response.json())
        .then(data => {
          this.foodItems = [...this.foodItems, ...data];
        });
  },
};
</script>

<template>
  <DataTable :value="foodItems" :rows="rows" :paginator="true" :rowsPerPageOptions="[2]">
    <Column field="name" header="Name">
      <template v-slot:body="slotProps">
        <FoodItemCard :item="slotProps.data" />
      </template>
    </Column>
  </DataTable>
</template>

<style scoped>

</style>