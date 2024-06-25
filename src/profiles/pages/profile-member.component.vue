<script >
import toolbarComponent from "../../public/components/toolbar.component.vue";
import SidebarComponent from "../components/sidebar.component.vue";
import {getCalendarRoutines, getUserInfo, http} from "../services/http-common.js";

import squadInfo from "../../assets/images/squad-plank-info.jpg";
import deadInfo from "../../assets/images/deadlift-info.jpg";
import benchInfo from "../../assets/images/bench-info.jpg";

import pullInfo from "../../assets/images/pull-info.jpg";
import pushInfo from "../../assets/images/push-info.jpg";
import plankInfo from "../../assets/images/plank-info.png";

import squadGuide from "../../assets/images/squad-plank-guide.png";
import pullGuide from "../../assets/images/pull-push-guide.jpg";
import pullGuide2 from "../../assets/images/pull-push-guide2.jpg";

import bicepGuide from "../../assets/images/bicep-guide.png";
import squadGuide2 from "../../assets/images/squad-plank2-guide.png";
import benchGuide from "../../assets/images/bench-guide.png";
import {onMounted, ref} from "vue";


export default {
  name: "profile_member-component",
  components: {SidebarComponent, toolbarComponent},
  data() {
    return {
      exercises: [],
      members_info:  [],
      showExercisePanel: false,
      showNutritionPanel: false,

      images: [squadInfo, deadInfo, benchInfo],
      content: ["Squats\n" +"\n" +"4 sets x 12 reps", "Deadlifts\n" +"\n" +"4 sets x 12 reps", "Bench Press\n" +"\n" +"4 sets x 12 reps"],
      selectedImage: "",
      selectedContent: "",

      images2: [pullInfo, pushInfo, plankInfo],
      content2: ["Pull-ups\n" +"\n" +"3 sets x 10 reps", "Push-ups\n" +"\n" +"3 sets x 10 reps", "Planks\n" +"\n" +"3 sets x 30 seconds"],
      selectedImage2: "",
      selectedContent2: "",

      images3: [squadGuide, pullGuide, pullGuide2],
      content3: [
        "Squats: Stand with feet shoulder-width apart. Lower your hips and bend your knees, keeping your back straight.",
        "Pull-ups: Hang from a bar with palms facing away. Pull yourself up until your chin is above the bar.",
        "Deadlift: Stand with feet hip-width apart. Lift the bar by extending your hips and knees while keeping your back straight."
      ],
      selectedImage3: "",
      selectedContent3: "",

      images4:[bicepGuide, squadGuide2, benchGuide ],
      content4: [
        "Bicep Curls: Hold a dumbbell in each hand. Curl the weights towards your shoulders and then lower them back down.",
        "Bench Press: Lie on a bench with feet on the ground. Lower the bar to your chest and then push it back up.",
        "Plank: Place forearms on the ground, extend legs back. Keep your body in a straight line and hold."
      ],
      selectedImage4: "",
      selectedContent4: ""
    }
  },
  created() {
    this.fetchExercises();
    this.fetchUser();

    this.selectedImage = this.selectRandomElement(this.images);
    this.selectedContent = this.selectRandomElement(this.content);

    this.selectedImage2 = this.selectRandomElement(this.images2);
    this.selectedContent2 = this.selectRandomElement(this.content2);

    this.selectedImage3 = this.selectRandomElement(this.images3);
    this.selectedContent3 = this.selectRandomElement(this.content3);

    this.selectedImage4 = this.selectRandomElement(this.images4);
    this.selectedContent4 = this.selectRandomElement(this.content4);
  },
  methods: {
    fetchExercises() {
      getCalendarRoutines().then(response => {
        this.exercises = response.data;
      });
    },
    fetchUser() {
      getUserInfo().then(response => {
        const members  = response.data.members;
        this.members_info = members.find(member => member.id === 1);
      });
    },
    showExercise() {
      this.showExercisePanel = true;
      this.showNutritionPanel = false;
    },
    showNutrition() {
      this.showExercisePanel = false;
      this.showNutritionPanel = true;
      this.fetchNutritionPlan(this.selectedFitnessPlanId);
    },
    selectRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    fetchNutritionPlan(fitnessPlanId) {
      http.get(`/api/v1/fitness-plans/${fitnessPlanId}/nutritional-meals`)
          .then(response => {
            this.nutritionPlan = response.data;
            console.log('Nutrition Plan fetched:', this.nutritionPlan);
          })
          .catch(error => {
            console.error('Error fetching nutrition plan:', error);
          });
    },


  },
  setup(){

    const selectedRoutine = ref(null);

    onMounted(() => {
      selectedRoutine.value = JSON.parse(localStorage.getItem('selectedRoutine'));
      console.log(selectedRoutine.value);
    });



    return {selectedRoutine};
  }
}
</script>

<template>
  <toolbar-component></toolbar-component>
  <div class="main">

    <div class="container1">
      <sidebar-component class="sidebar"></sidebar-component>

      <div class="sub-container1">
          <div class="member-profile">
            <div class="photo">
              <pv-avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" alt="profile-coach" shape="circle" size="xlarge"  style=" margin-top: 3%; height:100px; width: 100px"/>
            </div>
            <div>
              <h1>{{members_info.firstname}} {{members_info.lastname}}</h1>
              <span class="member-tag">Member </span>
            </div>
        </div>
        <div class="user_info">
          <p> FirstName: {{members_info.firstname}}</p>
          <p> LastName: {{members_info.lastname}}</p>
          <p> Email: {{members_info.email}}</p>
          <p> Phone: {{members_info.phone}}</p>
        </div>
      </div>


    </div>

    <div class="container2">
      <div class="left_side">
        <div>
          <h1  >Your Workout Plan</h1>
        </div>
        <div>
          <pv-button @click="showExercise">Exercise</pv-button>
          <pv-button @click="showNutrition">Nutrition</pv-button>
        </div>
      </div>

      <div class="right_side">
      <div v-if="showExercisePanel">
        <pv-panel class="exercise-panel">

          <template #header >
            <div class="header-info">
              <img src="../../../src/assets/images/muscle-icon.png" alt="routines" style="width: 50px; height: 50px;margin-left: 45%"/>
              <h2 style="margin-left: 5%;white-space: nowrap;">Exercise Information</h2>
            </div>
          </template>

          <div>
            <div v-if="selectedRoutine">
              <h2>{{ selectedRoutine.name }}</h2>
              <p>{{ selectedRoutine.description }}</p>
            </div>
          </div>

          <template #footer>
            <pv-button style="margin-left: 38%"> Next </pv-button>
          </template>
        </pv-panel>
      </div>

      <div v-if="showNutritionPanel">
        <pv-panel class="nutrition-panel">
          <template #header>
            <div class="header-info">
              <img src="https://cdn-icons-png.flaticon.com/512/1625/1625042.png" alt="nutrition" style="width: 50px; height: 50px;margin-left: 45%"/>
              <h2 style="margin-left: 5%;white-space: nowrap;">Nutrition Plans </h2>
            </div>
          </template>

          <div>
            <p>API <br> API </p>
          </div>

          <template #footer>
            <pv-button style="margin-left: 38%">View More</pv-button>
          </template>
        </pv-panel>
      </div>
    </div>
    </div>
    <pv-divider />

    <div class="container2-5">
      <div>
        <h1 >Recommended Exercises</h1>
      </div>

    <div class="right_side">
      <section class="recommended-panel" >
      <pv-panel class="right-panel" style="width: 25%; ">
        <template #header class="image_area">
            <img :src="selectedImage" alt="random-image" class="header-image" >
        </template>
        <div class="header-content">
          <div class="header-text">
            <p>{{ selectedContent }}</p>
          </div>
        </div>

      </pv-panel>

        <pv-panel class="right-panel" style="width: 25%; margin-left: 5%">
          <template #header>
            <div class="header-content">
              <img :src="selectedImage2" alt="random-image" class="header-image" >
            </div>
          </template>

          <div class="header-content">
            <div class="header-text">
              <p>{{ selectedContent2 }}</p>
            </div>
          </div>

        </pv-panel>
      </section>
    </div>
    </div>

    <pv-divider />

    <div class="container2-5">
      <div >
        <h1 >Workout Guide</h1>
      </div>

      <div class="right_side" >
      <section class="recommended-panel">
        <pv-panel class="right-panel" style="width: 25%;">
          <template #header class="xd">
              <img :src="selectedImage3" alt="random-image" class="header-image">
          </template>

          <div class="header-content">
            <div class="header-text">
              <p>{{ selectedContent3 }}</p>
            </div>
          </div>

        </pv-panel>

        <pv-panel class="right-panel" style="width: 25%; margin-left: 5%">
          <template #header>
            <div class="header-content">
              <img :src="selectedImage4" alt="random-image" class="header-image">
            </div>
          </template>

          <div class="header-content">
            <div class="header-text">
              <p>{{ selectedContent4 }}</p>
            </div>
          </div>

        </pv-panel>
      </section>
    </div>
    </div>
    <pv-divider />

    <div class="container3">
    <h1>Progress Metrics</h1>
    <div class="progress_info">
       <div class="info">
         <p>Body Weight</p>
         <b>{{members_info.body_weight}} Kg</b>
         <p>-2 kg</p>
       </div >
       <div class="info">
         <p>Body Height</p>
         <b>{{members_info.height}} Cm</b>
         <p>+2 cm</p>
       </div>
      <div class="info">
        <p>BMI</p>
        <b>{{members_info.bmi}}</b>
        <p>- 0.5 </p>
      </div>
    </div>


    </div>

    <div class="container4">
      <h1>Trainer Session</h1>
      <div style="display: grid; grid-template-columns: repeat(7, 1fr) " class="card">
        <div v-for="exercise in exercises" >
          <div class="exercise" >
            <p class="day">{{exercise.day}}</p>
            <p class="routine">
              <input type="checkbox">
              {{exercise.routine}}
            </p>
          </div>
        </div>
      </div>
      <p>Workout session at the gym today! #Motivation <br> Date: 13/04/2024 </p>
    </div>

    <div class="container5">
      <h1>Update Profile</h1>
      <div class="form">
        <label for="username">Weight</label>
        <pv-InputText id="username" v-model="value" placeholder="Enter your weight" class="input" />
      </div>
      <div class="form">
        <label for="username">Height</label>
        <pv-InputText id="username" v-model="value" placeholder="Enter yor height" class="input" />
      </div>
      <div class="form">
        <label for="username">Email</label>
        <pv-InputText id="username" v-model="value" placeholder="Enter yor email" class="input" />
      </div>
      <div class="form">
        <label for="username">Phone</label>
        <pv-InputText id="username" v-model="value" placeholder="Enter yor phone" class="input" />
      </div>
      <pv-button class="button">Submit</pv-button>
    </div>

  </div>
</template>

<style scoped>
.main{
  width:100vw;
  height:100vh;

  .container1{
    height:30%;
    width:100%;
    background-image:linear-gradient(to right,#395BB2 0%,#2956CA 38%,#001855 100%);
    position:relative;
    display:flex;

    .sub-container1{
      display:flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height:100%;
      width:100%;
    }

    .sidebar{
      position:absolute;
      top:40%;
      width:10%;
      border:none;
    }

    .member-profile{
      width:30%;
      display:flex;
      flex-direction: row;

      box-sizing: border-box;
    }
    .photo{
      margin-right:10%;

    }
    .member-tag{
      color:white;
      background-color: #719ac3;
      padding:5px;
      box-sizing: border-box;
    }
    .user_info{
      color:white;
    }
  }
  .container2{
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    align-items:center;
    margin-bottom: 2rem;
    .left_side{

      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      Button{
        margin:10px;
      }
  }
  }

 .container2-5 {
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
   .right_side{
     width:65%;
   }

   .image_area{
     display:flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
   }
   .header-image{
     width: 100%;
     height: 100%;

   }
 }

  .container3{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
    width:100%;
    .progress_info{

      display:flex;
      flex-direction: row;
      justify-content:center;
      align-items:center;
      width:80%;
      .info{
        font-size:20px;

        margin:10px;
        width:30%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-style:dotted;
      }
    }

  }
  .container4{
    text-align:center;
    width: 100vw;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card{
    margin: 10px;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .exercise{
    border: 1px solid black;
    margin: 10px;
    width: 80%;
    height: 100px;
    .day{
      margin-top:0;
      background-color: #17A9C9;
      padding:5px;
      box-sizing: border-box;
    }
  }


  .container5{
    text-align:center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      margin-bottom: 10px;
      label{
        margin-right:30px;
      }
      .input{
        width: 500px;
      }
    }
  }
  .button{
    background-color: #000000;
    border-radius: 10px;
    padding-left:40px;
    padding-right:40px;
    color:white;
  }

  .member-profile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
  }

  .nutrition-panel{
    width: 150%;
    height: 100%;
    margin: 5% auto;
    overflow-y: auto;
  }

  .exercise-panel{
    max-height: 100%; /* Ajusta según la necesidad */
    max-width: 600px;
    overflow-y: auto;
  }
  .header-info {
    display: flex;
    align-items: center !important;
    justify-content: center !important;

  }

  .right-panel{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
  }

  .header-image{
    width: 100%;
    height: 180%;
    margin-right:10px;
  }

  .info
  {
    display:flex;
  }

  .recommended-panel{
    display: flex;
    flex-direction: row;
    justify-content: center;

  }

  .header-content {
    width: 100%;

  }



}

@media (max-width: 600px) {
  .header-info h2 {
    font-size: 14px;
  }

  .header-info img {
    width: 30px;
    height: 30px !important;
  }

  .left_side{

      font-size: 10px !important;

  }

  .container2-5{
    .right_side{
      width: 50%;
    }
    font-size: 10px;
  }

  .user_info{
    font-size: 10px;
    margin-left: 8%;
  }
  h1{
    font-size: 15px;

  }
  p{
    font-size: 10px;
  }
  .recommended-panel{
    width: 600px;
    padding-left: 1%;
  }

  .exercise-panel{
    max-height: 100%; /* Ajusta según la necesidad */
    max-width: 800px;
    width: 200px !important;
    overflow-y: auto;
   h2{
      font-size: 10px;

   }
  }
  .nutrition-panel{
    max-height: 100%; /* Ajusta según la necesidad */
    max-width: 800px;
    width: 500px !important;
    overflow-y: auto;
  }
}

@media (max-width: 1600px) {
  .header-info h2 {
    font-size: 35px;
  }

  .header-info img {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 1980px) {
  .header-info h2 {
    font-size: 25px;
  }

  .header-info img {
    width: 20px;
    height: 20px;
  }
  .exercise-panel{
    max-height: 100%; /* Ajusta según la necesidad */
    max-width: 800px;
    width: 500px;
    overflow-y: auto;
}
  .nutrition-panel{
    max-height: 100%; /* Ajusta según la necesidad */
    max-width: 800px;
    width: 500px !important;
    overflow-y: auto;
  }
}


</style>