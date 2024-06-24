<script >
import SidebarComponent from "../components/sidebar.component.vue";
import {getCalendarRoutines, getUserInfo} from "../services/http-common.js";
import toolbarComponent from "../../public/components/toolbar-coach.component.vue";

export default {
  name: "profile-component",
  components: {toolbarComponent, SidebarComponent},
  data() {
    return {
      exercises: [],
      coaches_info:[],
      showExercisePanel: false,
      showNutritionPanel: false,
    }
  },
  created() {
    this.fetchExercises();
    this.fetchUser();
  },
  methods: {
    fetchExercises() {
      getCalendarRoutines().then(response => {
        this.exercises = response.data;
      });
    },
    fetchUser() {
      getUserInfo().then(response => {
        //Extrae info del json y solo se queda con la info del usuario con id 1
        const coaches  = response.data.coaches;
        this.coaches_info = coaches.find(coach => coach.id === 2);

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
  }
}
</script>

<template>
  <toolbar-component></toolbar-component>

  <div class="main">

    <div class="container1">
      <sidebar-component class="sidebar"></sidebar-component>
      <div class="sub-container1">
          <div class="coach-profile">
          <pv-avatar image="https://cdn.static.aptavs.com/imagenes/cuanto-cuesta-ser-entrenador-personal/cuanto-cuesta-ser-entrenador-personal_905x603.jpg" alt="profile-coach" shape="circle" size="xlarge"  style=" margin-top: 3%; height:100px; width: 100px"/>
            <h1>{{coaches_info.firstname}} {{coaches_info.lastname}}</h1>
            <p>Coach Description</p>
          </div>
          <div class="user_info">
            <p> FirstName: {{coaches_info.firstname}}</p>
            <p> LastName: {{coaches_info.lastname}}</p>
            <p> Email: {{coaches_info.email}}</p>
            <p> Phone: {{coaches_info.phone}}</p>
          </div>
      </div>
    </div>


    <div class="container2">
      <div class="left_side">
        <h1 style="margin-top: 35%">Your Workout Plan</h1>
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

    <div class="container3">
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

    <div class="container4">
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
    height: 35%;
    background-image:linear-gradient(to right,#395BB2 0%,#2956CA 38%,#001855 100%);
    position:relative;
    .sidebar{
      position:absolute;
      top:40%;
      width:10%;
      border:none;
    }
    .sub-container1{
      border:1px solid red;
      display:flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height:100%;
      width:100%;
      .coach-profile{
        margin-right: 5%;
      }
      .user_info{
        color:white;
      }
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
  .container3{
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


  .container4{
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

  .coach-profile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
  }


}

</style>