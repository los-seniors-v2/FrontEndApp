<script>
import RoutineCard from "../components/routine-card.component.vue";
import ToolbarComponent from "../../public/components/toolbar.component.vue";

import { ref, onMounted, computed } from "vue";


export default {
  name: "routines-section",
  components: {
    RoutineCard,
    ToolbarComponent
  },
  setup() {
    const showExercisePanel = ref(true);
    const exercises = ref([]);
    const currentPage = ref(1);
    const pageSize = ref(4);

// Simulated fetch from local storage or a placeholder if empty

    async function fetchExercises() {
      const response = await fetch('https://jdu202012207.github.io/pruebas-api/routines-eng.json');
      const data = await response.json();
      return data.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.instructions.join(' '),
        category: item.category,
        image: item.image
      }));
    }

    onMounted(async () => {
      exercises.value = await fetchExercises();
      console.log(exercises.value);
    });

    function saveRoutine(routine) {
      // Save to local storage
      localStorage.setItem('selectedRoutine', JSON.stringify(routine));
      console.log('Routine saved');
    }

    function nextPage() {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    }

    function prevPage() {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    }


    const totalPages = computed(() => {
      return Math.ceil(exercises.value.length / pageSize.value);
    });

    const paginatedExercises = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      return exercises.value.slice(start, start + pageSize.value);
    });

    return {showExercisePanel, exercises, saveRoutine, nextPage, prevPage, currentPage, totalPages, paginatedExercises};
  }
}

</script>

<template>
<toolbar-component></toolbar-component>

  <div v-if="showExercisePanel" class="cards-container">
    <pv-card
        v-for="exercise in paginatedExercises"
        :key="exercise.id"
        class="exercise-card"
    >
      <template #title>
        <h3>{{ exercise.name }}</h3>
      </template>
      <template #content>
        <p>{{ exercise.description }}</p>
        <p>Category: {{ exercise.category }}</p>
        <img :src="exercise.image" alt="Exercise image" width="30%">
      </template>
      <template #footer>
        <pv-button @click="saveRoutine(exercise)">Save Routine</pv-button>
      </template>
    </pv-card>
    <div class="pagination">
      <pv-button @click="prevPage" :disabled="currentPage <= 1">Prev</pv-button>
      <span style="margin-left:2%; margin-right: 2%">Page {{ currentPage }} of {{ totalPages }}</span>
      <pv-button @click="nextPage" :disabled="currentPage >= totalPages">Next</pv-button>
    </div>
  </div>


</template>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.exercise-card {
  margin: 10px;
  flex-basis: 45%;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>