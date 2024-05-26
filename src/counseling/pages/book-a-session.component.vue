<script>
import axios from 'axios';
import Calendar from 'primevue/calendar';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import Tag from "primevue/tag";

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
    Calendar,
    Tag
  },
  created() {
    this.fetchCoaches();
  },
  methods: {
    fetchCoaches() {
      axios.get("https://my-json-server.typicode.com/LuiggiP/fake-api-couches/db")
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
          <p><Tag value="New">{{ coach.knowledge }}</Tag></p>
          <p>Reach out for personalized guidance.</p>
        </div>
      </div>
    </div>
    <div class="book">
      <h1 class="centered">Book a Training Session</h1>
      <p class="centered">Fill in the details</p>
      <div class="details">
        <p>Select Coach</p>
        <div class="coach-selection">
          <button v-for="coach in coaches" :key="coach.id" @click="selectedCoach = coach">{{ coach.name }}</button>
        </div>
        <p>Session Date</p>
        <Calendar v-model="selectedDate" placeholder="Select Date" class="wide-calendar"></Calendar>
      </div>
      <button class="book-button">Book Now</button>
    </div>
    <footer>© 2024 FlexPal. All rights reserved.</footer>
  </div>
</template>

<style>
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
.coaches {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0.5rem;
  color: black;
}
.coach {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.coach-photo {
  border-radius: 50%;
  width: 110px;
  height: 110px;
  margin-right: 1rem;
}
.coach h2 {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0.5rem 0;
  text-align: left;
}
.coach p {
  margin: 0.2rem 0;
  text-align: left;
}
.book{
  padding: 5rem;
  color: black;
}
.centered {
  text-align: center;
}
.coach-selection button {
  margin: 0.5rem;
  color: white;
}
.details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 4rem;
}
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  background-color: #007bff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
.details p {
  font-weight: bold;
}
.wide-calendar {
  width: 80%;
}
.book-button {
  background-color: black;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  width: 14%;
}

</style>
