<script>
import toolbarComponent from '../../public/components/toolbar-coach.component.vue';

export default {
  name: "fitness-plan-component",
  components: {
    toolbarComponent,
  },
  data() {
    return {
      plans: [],
      newPlan: {
        profileId: '',
        coachId: ''
      },
      newRoutine: {
        name: '',
        sets: '',
        reps: '',
        type: '',
        restTime: '',
        fitnessPlanId: null
      },
      newMeal: {
        name: '',
        weight: '',
        fitnessPlanId: null
      }
    };
  },
  methods: {
    async createFitnessPlan() {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/fitness-plans', this.newPlan);
        this.plans.push(response.data);
        this.newRoutine.fitnessPlanId = response.data.id;
        this.newMeal.fitnessPlanId = response.data.id;
        this.newPlan = { profileId: '', coachId: '' };
      } catch (error) {
        console.error('Error creating fitness plan:', error);
      }
    },
    async addRoutineItem() {
      if (!this.newRoutine.fitnessPlanId) return;
      try {
        await axios.post(`http://localhost:3000/api/v1/fitness-plans/${this.newRoutine.fitnessPlanId}/routine-items`, this.newRoutine);
        this.fetchPlans();
      } catch (error) {
        console.error('Error adding routine item:', error);
      }
    },
    async addNutritionalMeal() {
      if (!this.newMeal.fitnessPlanId) return;
      try {
        await axios.post(`http://localhost:3000/api/v1/fitness-plans/${this.newMeal.fitnessPlanId}/nutritional-meals`, this.newMeal);
        this.fetchPlans();
      } catch (error) {
        console.error('Error adding nutritional meal:', error);
      }
    },
    async fetchPlans() {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/fitness-plans');
        this.plans = response.data;
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    }
  },
  mounted() {
    this.fetchPlans();
  }
}
</script>

<template>

  <toolbar-component></toolbar-component>

  <div class="container">
    <div class="forms">
      <h2>Create Fitness Plan</h2>

      <h2>Add Routine Item</h2>
      <form @submit.prevent="addRoutineItem">
        <input v-model="newRoutine.name" placeholder="Routine Name" required>
        <input v-model="newRoutine.sets" placeholder="Sets" type="number" required>
        <input v-model="newRoutine.reps" placeholder="Reps" type="number" required>
        <input v-model="newRoutine.type" placeholder="Type" required>
        <input v-model="newRoutine.restTime" placeholder="Rest Time (secs)" type="number" required>
        <button type="submit">Add Routine Item</button>
      </form>

      <h2>Add Nutritional Meal</h2>
      <form @submit.prevent="addNutritionalMeal">
        <input v-model="newMeal.name" placeholder="Meal Name" required>
        <input v-model="newMeal.weight" placeholder="Weight (grams)" type="number" required>
        <button type="submit">Add Meal</button>
      </form>
    </div>

    <div class="plans-container">


        <div>
          <h4>Routines</h4>
          <ul>
            <!-- <li v-for="routine in plan.routineItems" :key="routine.id">
               {{ routine.name }}: {{ routine.sets }} sets of {{ routine.reps }}
             </li> -->
           </ul>
         </div>
         <div>
           <h4>Nutritional Meals</h4>
           <ul>
             <!-- <li v-for="meal in plan.nutritionalMeals" :key="meal.id">
               {{ meal.name }}: {{ meal.weight }} grams
             </li> -->
          </ul>
        </div>
      </div>
    </div>

</template>

<style>
.container {
  display: flex;
  flex-direction: row;
}
.forms {
  flex: 1;
}
.plans-container {
  flex: 2;
  overflow-x: auto;
  display: flex;
}
.plan-card {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  min-width: 300px;
}
</style>