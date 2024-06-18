<script>
import FoodItemList from '../components/card-food-list.component.vue'
import ToolbarComponent from '../../public/components/toolbar.component.vue'
export default {
  name: "home-section",
  components: {
    FoodItemList,
    ToolbarComponent
  },
}
</script>

<template>

  <toolbar-component></toolbar-component>
  <FoodItemList/>

</template>

<style scoped>

</style>