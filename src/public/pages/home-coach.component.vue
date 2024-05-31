<script>
import cardioInfo from "../../assets/images/cardio-info.jpg";
import runningInfo from "../../assets/images/running-info.png";
import jumpRopeInfo from "../../assets/images/jump_rope-info.jpg";

import weightLiftingInfo from "../../assets/images/active-participation.png";
import strengthInfo from "../../assets/images/strength-info.jpg";
import workoutInfo from "../../assets/images/workout-info.jpg";

import toolbarCoachComponent from "../components/toolbar-coach.component.vue";

export default {
  name: "home-coach.component",
  components: {toolbarCoachComponent},

  data() {
    return {
      images: [cardioInfo, runningInfo, jumpRopeInfo],
      content: ["For improving cardio vascular health through regular and consistent aerobic activities.", "Running is one of the most effective forms of aerobic exercise.", "Jumping rope benefits several muscles at the same time."],
      selectedImage: "",
      selectedContent: "",

      images2: [weightLiftingInfo, strengthInfo, workoutInfo],
      content2: ["To build muscle and strength through regular and focused strength training exercises.", "Do strength training exercises for all major muscle groups at least two times a week.", "Use our beginner strength training guide to begin losing weight and building muscle."],
      selectedImage2: "",
      selectedContent2: ""
    };
  },
  methods: {
    selectRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  },
  created() {
    this.selectedImage = this.selectRandomElement(this.images);
    this.selectedContent = this.selectRandomElement(this.content);

    this.selectedImage2 = this.selectRandomElement(this.images2);
    this.selectedContent2 = this.selectRandomElement(this.content2);
  }

}
</script>

<template>
  <toolbar-coach-component></toolbar-coach-component>

  <div class="main">
    <div class="banner">
      <div class="content">
        <br>
        <h1 style="font-size:4rem">Welcome to Your Gym App!</h1><br>
        <p style="font-size: 2rem">Track your workout plans and nutrition here.</p>
        <br>
      </div>
    </div>


    <div class="full-width-card">

      <div class="container1">
        <div>
          <h2  class="workout_plan">Your Workout Plan</h2>
        </div>

        <div  class="exercises">
          <div  class="image">
            <img src="../../assets/images/muscle-icon.png" alt="Cardio Icon" style="width: 100px; height: 100px;" >
            <p>Cardio</p>
          </div>
          <div  class="image">
            <img src="../../assets/images/weigh-lifting-icon.png" alt="Training Icon" style="width: 100px; height: 100px;" >
            <p>Training</p>
          </div>
        </div>
      </div>

    </div>

    <div class="full-width-card">

      <div class="container2">
        <div>
          <h2 style=" font-size: 80px">Programming Session</h2>
        </div>

        <div class="images_and_info">
          <pv-panel class="right-panel" >
            <template #header>
              <div class="info">
                <div class="header-content">
                  <img :src="selectedImage" alt="random-image" class="header-image">
                </div>
                <div class="header-text">
                  <h3>Cardio Exercise</h3>
                  <p>{{ selectedContent }}</p>
                </div>
              </div>
            </template>
          </pv-panel>

          <pv-panel class="right-panel" >
            <template #header>
              <div class="info">
                <div class="header-content">
                  <img :src="selectedImage2" alt="random-image" class="header-image">
                </div>
                <div class="header-content">
                  <div class="header-text">
                    <h3>Strength Training</h3>
                    <p>{{selectedContent2}}</p>
                  </div>
                </div>
              </div>
            </template>
          </pv-panel>
        </div>

      </div>
    </div>


  </div>
</template>

<style scoped>
.main{
  width:100vw;
  height:100vh;
  .banner {
    width:100%;
    align-items: center;
    background-image: url('../../assets/images/banner-flexpal.png');
    background-size: cover;
  }

  .content {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #17A9C9;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  }

  .full-width-card {
    width: 100%;
    margin-top: 5%;
    display:flex;
    justify-content:center;
    align-items:center;
    box-sizing: border-box;

    .container1{
      width:90%;
      display:flex;
      justify-content:space-around;
      align-items:center;
      flex-direction: row;

    }
    .workout_plan{
      font-size: 70px;
    }
    .exercises{
      display: flex;
      justify-content: space-around;

    }
    .image{
      margin-right: 50%;
      text-align:center;
    }

    .container2{
      width:90%;
      display:flex;
      flex-direction: row;
      justify-content:space-around;
      align-items:center;

      box-sizing: border-box;
      .images_and_info{
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;

      }
      .header-image{
        width: 100px;
        height: 100px;
        margin-right:10px;
      }
      .info
      {
        display:flex;
      }
      .header-content{
        margin-right:10px;
      }
    }

  }



}

</style>