<script>
import axios from 'axios';
import Calendar from 'primevue/calendar';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import Tag from "primevue/tag";
import toolbarComponent from "../../public/components/toolbar.component.vue";

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
    Tag,
    toolbarComponent
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
  <toolbar-component></toolbar-component>

  <div class="body-container">
    <div class="coaches">
      <div class="coach" v-for="coach in coaches" :key="coach.id">
        <img :src="coach.photo" alt="Coach Photo" class="coach-photo">
        <div>
          <h2>{{ coach.name }}</h2>
          <p><Tag value="New">{{ coach.knowledge }}</Tag></p>
          <p>{{ $t('coach.guidance') }}</p>
        </div>
      </div>
    </div>
    <div class="book">
      <h1 class="centered">{{ $t('book.title') }}</h1>
      <p class="centered">{{ $t('book.details') }}</p>
      <div class="details">
        <p>{{ $t('book.selectCoach') }}</p>
        <div class="coach-selection">
          <button v-for="coach in coaches" :key="coach.id" @click="selectedCoach = coach">{{ coach.name }}</button>
        </div>
        <p>{{ $t('book.sessionDate') }}</p>
        <Calendar v-model="selectedDate" placeholder="Select Date" class="wide-calendar"></Calendar>
      </div>
      <button class="book-button">{{ $t('book.bookNow') }}</button>
    </div>
    <footer>{{ $t('footer') }}</footer>
  </div>
</template>

<style>
.body-container {

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: black;
}

.coaches {
  width:100%;
  display: flex;
  justify-content: space-evenly;
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

  width:100%;
  height:60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  padding: 10px 40px;
  margin: 10px;

}

</style>
