<script>
import axios from 'axios';
import Calendar from 'primevue/calendar';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

export default {
  name: "book-a-session",
  data() {
    return {
      coaches: [],
      search: '',
      selectedCoach: null,
      selectedDate: null
    };
  },
  components: {
    Calendar
  },
  created() {
    this.fetchCoaches();
  },
  methods: {
    fetchCoaches() {
      axios.get("/src/services/coach-api.service.json")
          .then(response => {
            console.log(response.data);
            this.coaches = response.data.coaches;
          })
          .catch(error => {
            console.error('Error fetching coaches:', error);
          });
    }
  }
};
</script>

<template>
  <div>
    <div class="coaches">
      <div class="coach" v-for="coach in coaches" :key="coach.id">
        <img :src="coach.photo" alt="Coach Photo" class="coach-photo">
        <div>
          <h2>{{ coach.name }}</h2>
          <p>{{ coach.knowledge }}</p>
          <p>Reach out for personalized guidance.</p>
        </div>
      </div>
    </div>
    <h1 class="centered">Book a Training Session</h1>
    <p class="centered">Fill in the details</p>
    <p>Select Coach</p>
    <div class="coach-selection">
      <button v-for="coach in coaches" :key="coach.id" @click="selectedCoach = coach">{{ coach.name }}</button>
    </div>
    <p>Session Date</p>
    <Calendar v-model="selectedDate"></Calendar>
    <button class="book-button">Book Now</button>
    <footer>© 2024 FlexPal. All rights reserved.</footer>
  </div>
</template>

<style>
.coaches {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
}
.coach {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.coach-photo {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 1rem;
}
.coach h2 {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
  text-align: left;
}
.coach p {
  margin: 0.2rem 0;
  text-align: left;
}
</style>