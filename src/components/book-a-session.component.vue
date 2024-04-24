<script>
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
    const api = new CoachApiServices();
    api.getAll().then(response => {
      this.coaches = response.data;
    });
  }
};

</script>

<template>
  <div>
    <header>
      <img src="/src/assets/flexpal-logo.png" alt="Startup Logo">
      <input type="text" v-model="search" placeholder="Search">
    </header>
    <hr>
    <div class="coaches">
      <div class="coach" v-for="coach in coaches" :key="coach.id">
        <img :src="coach.photo" alt="Coach Photo" class="coach-photo">
        <h2>{{ coach.name }}</h2>
        <p>{{ coach.knowledge }}</p>
        <p>Reach out for personalized guidance.</p>
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

</style>