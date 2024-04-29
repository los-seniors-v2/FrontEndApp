<script>
import HeaderContent from "/src/app/public/components/header/header-content.component.vue";
import FoodItemCard from "/src/app/food-item/components/card-food-item.component.vue";
import RegistrationProcess from "./components/coach-registration/registration-process.component.vue";
export default {
  name: "App",
  components: {
    FoodItemCard,
    HeaderContent,
    RegistrationProcess,
  },
  data() {
    return {
      foodItems: [],
      page: 0,
      itemsPerPage: 7,
    };
  },
  computed: {
    pagedItems() {
      const start = this.page * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.foodItems.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if ((this.page + 1) * this.itemsPerPage < this.foodItems.length) {
        this.page++;
      }
    },
    prevPage() {
      if (this.page > 0) {
        this.page--;
      }
    },
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
  <!-- Food items-->
  <!--
  <div id="header" >
  <HeaderContent />
  </div>
  <div id="app-container">
    <button class="arrow-button" @click="prevPage" v-if="page > 0">← Anterior</button>
    <FoodItemCard v-for="item in pagedItems" :key="item.id" :item="item"/>
    <button class="arrow-button" @click="nextPage" v-if="(page + 1) * itemsPerPage < foodItems.length">Siguiente →</button>
  </div>
  -->
  <!--Registration Coach -->
  <div>
    <RegistrationProcess></RegistrationProcess>
  </div>

</template>

<style scoped>
#app-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

.arrow-button {
  font-size: 1.5em;
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  color: #ffffff;
}
</style>
