<script >
import toolbarComponent from "../../public/components/toolbar.component.vue";
import SidebarComponent from "../components/sidebar.component.vue";
import {http} from "../services/http-common.js";

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


export default {
  name: "profile_member-component",
  components: {SidebarComponent, toolbarComponent},
  data() {
    return {
      exercises: [],
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
      http.get().then(response => {
        this.exercises = response.data;
      });
    },
    showExercise() {
      this.showExercisePanel = true;
      this.showNutritionPanel = false;
    },
    showNutrition() {
      this.showExercisePanel = false;
      this.showNutritionPanel = true;
    },
    selectRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  }
}
</script>

<template>
  <div class="main">
    <toolbar-component></toolbar-component>

    <div class="container1">
      <sidebar-component class="sidebar"></sidebar-component>

      <div class="member-profile">
        <pv-avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" alt="profile-coach" shape="circle" size="xlarge"  style=" margin-top: 3%; height:100px; width: 100px"/>
        <h1>Member Name</h1>
        <p>Member Description</p>
      </div>

    </div>

    <div class="container2">
      <div class="left_side">
        <h1 style="margin-top: 35%" >Your Workout Plan</h1>
        <div>
          <Button @click="showExercise">Exercise</Button>
          <Button @click="showNutrition">Nutrition</Button>
        </div>
      </div>

      <div v-if="showExercisePanel">
        <pv-panel class="exercise-panel">

          <template #header >
            <div class="header-info">
              <img src="../../../src/assets/images/muscle-icon.png" alt="routines" style="width: 50px; height: 50px;margin-left: 45%"/>
              <h2 style="margin-left: 5%;white-space: nowrap;">Exercise Information</h2>
            </div>
          </template>

          <div>
            <p> API<br> API </p>
          </div>

          <template #footer>
            <Button style="margin-left: 38%">View More</Button>
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
            <Button style="margin-left: 38%">View More</Button>
          </template>
        </pv-panel>
      </div>
    </div>

    <pv-divider />

    <div class="container2">
      <div class="left_side-recommended">
        <h1 style="margin-top: 50%">Recommended Exercises</h1>
      </div>

      <section class="recommended-panel">
      <pv-panel class="right-panel" style="width: 25%;">
        <template #header>
          <div class="header-content">
            <img :src="selectedImage" alt="random-image" class="header-image">
          </div>
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
              <img :src="selectedImage2" alt="random-image" class="header-image">
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

    <pv-divider />

    <div class="container2">
      <div class="left_side-recommended">
        <h1 style="margin-top: 50%">Workout Guide</h1>
      </div>
      <section class="guide-panel">
        <pv-panel class="right-panel" style="width: 25%;">
          <template #header>
            <div class="header-content">
              <img :src="selectedImage3" alt="random-image" class="header-image2">
            </div>
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
              <img :src="selectedImage4" alt="random-image" class="header-image2">
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

    <pv-divider />

    <div class="container3">
    <h1>Progress Metrics</h1>
    <div class="progress_info">
       <div class="info">
         Poner Info
       </div >
       <div class="info">
         Poner Info
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
        <label for="username">Username</label>
        <pv-InputText id="username" v-model="value" placeholder="Enter your name" class="input" />
      </div>
      <div class="form">
        <label for="username">Age</label>
        <pv-InputText id="username" v-model="value" placeholder="Enter yor age" class="input" />
      </div>
      <Button class="button">Submit</Button>
    </div>

  </div>
</template>

<style scoped>
.main{
  width:100vw;
  height:100vh;

  .container1{
    width:100%;
    height: 30%;
    background-image:linear-gradient(to right,#395BB2 0%,#2956CA 38%,#001855 100%);
    position:relative;
    .sidebar{
      position:absolute;
      top:40%;
      width:10%;
      border:none;

    }
  }
  .container2{
    display:flex;
    flex-direction: row;
    justify-content:space-evenly;
    margin-bottom: 5rem;



    .left_side{
      text-align:center;
      Button{
        margin:10px;
      }
    }

  }

  .left_side-recommended {
    margin-right: -20%; /* Ajusta este valor según tus necesidades */
  }
  .container3{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
    width:100%;
    border:3px solid black;
    .progress_info{
      display:flex;
      flex-direction: row;
      justify-content:center;
      align-items:center;
      border:3px solid black;
      width:80%;
      .info{
        border:3px solid black;
        margin:10px;
        width:50%;
      }
    }

  }
  .container4{
    text-align:center;
    width: 100vw;
    border: 1px solid black;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card{
    border: 1px solid #ae0606;
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
    width: 150%;
    height: 100%;
    margin: 5% auto;
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

  .header-image2{
    width: 380px;
    height: 120px;
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

  .guide-panel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 100%;
    overflow-x: auto;
  }


  .header-content {
    width: 100%;

  }



}

</style>