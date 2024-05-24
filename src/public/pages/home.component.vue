<script>
import cardioInfo from "../../assets/images/cardio-info.jpg";
import runningInfo from "../../assets/images/running-info.png";
import jumpRopeInfo from "../../assets/images/jump_rope-info.jpg";

import weightLiftingInfo from "../../assets/images/active-participation.png";
import strengthInfo from "../../assets/images/strength-info.jpg";
import workoutInfo from "../../assets/images/workout-info.jpg";


import toolbarComponent from "../components/toolbar.component.vue";

export default {
  name: "home.component",
  components: {toolbarComponent},

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

  <toolbar-component/>

  <div class="banner">
    <div class="content">
      <br>
      <h1 style="font-size:70px">Welcome to Your Gym App!</h1><br>
      <p style="font-size: 30px">Track your workout plans and nutrition here.</p>
      <br>
    </div>
  </div>


  <Card class="full-width-card">
    <template #title>
      <div style="display: flex; align-items: center;">

        <h2 style="margin-left: 12%; font-size: 80px; margin-top: 5%;">Your Workout Plan</h2>

        <div style="display: flex; justify-content: space-around; margin-left: 20%; margin-top: 3%">
          <div>
            <img src="../../assets/images/muscle-icon.png" alt="Cardio Icon" style="width: 100px; height: 100px;">
            <p>Cardio</p>
          </div>
          <div style="margin-left: 100%">
            <img src="../../assets/images/weigh-lifting-icon.png" alt="Training Icon" style="width: 100px; height: 100px;">
            <p>Training</p>
          </div>
        </div>
      </div>
    </template>
  </Card>

  <Card class="full-width-card">
    <template #title>
      <div style="display: flex; align-items: start;">
      <h2 style="margin-left: 12%; margin-top: 5%; font-size: 80px">Exercise Information</h2>

      <section>
      <pv-panel class="right-panel" style="width: 80%">
        <template #header>
          <div class="header-content">
            <img :src="selectedImage" alt="random-image" class="header-image">
          </div>
        </template>

        <div class="header-content">
          <div class="header-text">
            <h3>Cardio Exercise</h3>
            <p>{{ selectedContent }}</p>
          </div>
        </div>
      </pv-panel>

      <pv-panel class="right-panel" style="width: 80%">
        <template #header>
          <div class="header-content">
            <img :src="selectedImage2" alt="random-image" class="header-image">
          </div>
        </template>

        <div class="header-content">
          <div class="header-text">
            <h3>Strength Training</h3>
            <p>{{selectedContent2}}</p>
          </div>
        </div>
      </pv-panel>
      </section>
      </div>
    </template>
  </Card>

</template>

<style scoped>
.banner {
  align-items: center;
  background-image: url('../../assets/images/banner-flexpal.png');
}

.content {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #17A9C9;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}

.full-width-card {
  width: 100%;
  font-family: 'Roboto', sans-serif;
  color: black;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;

}

.right-panel {
  display: flex;
  order: 1;
  margin-top: 5%;
  margin-left: 50%;
  height: 120px;
  overflow-y: auto;

}

.header-content {
  display: flex;
  align-items: center;
  background-color: white !important;
}
.header-image {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
.header-text {
  display: flex;
  flex-direction: column;
}
.header-text p {
  margin-top: -15px;
}
</style>