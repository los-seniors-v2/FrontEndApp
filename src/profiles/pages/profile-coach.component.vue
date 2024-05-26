<script >
import toolbarComponent from "../../public/components/toolbar.component.vue";
import SidebarComponent from "../components/sidebar.component.vue";
import {http} from "../services/http-common.js";

export default {
  name: "profile-component",
  components: {SidebarComponent, toolbarComponent},
  data() {
    return {
      exercises: [],
    }
  },
  created() {
    this.fetchExercises();
  },
  methods: {
    fetchExercises() {
      http.get().then(response => {
        this.exercises = response.data;
      });
    }
  }
}
</script>

<template>
  <div class="main">
    <toolbar-component></toolbar-component>

    <div class="container1">
      <sidebar-component class="sidebar"></sidebar-component>
    </div>

    <div class="container2">
        <div class="left_side">
          <h1>Your Workout Plan</h1>
          <div>
            <Button>Exercise</Button>
            <Button>Nutrition</Button>
          </div>
        </div>
        <div style="border:3px solid black">
<!--          AQUI PONER INFORMACION DE API-->PONER INFO DE API
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
  .container3{
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
      margin-top:0px;
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
  }

}

</style>