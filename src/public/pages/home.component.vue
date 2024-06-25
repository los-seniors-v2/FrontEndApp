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
      content: ["cardio-description", "running-description", "jump-rope-description"],
      selectedImage: "",
      selectedContent: "",

      images2: [weightLiftingInfo, strengthInfo, workoutInfo],
      content2: ["weight-lifting-description", "strength-training-description", "beginner-guide-description"],
      selectedImage2: "",
      selectedContent2: ""
    };
  },
  computed: {
    selectedContent() {
      return this.$t(this.selectedContent);
    },
    selectedContent2() {
      return this.$t(this.selectedContent2);
    }
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
  <toolbar-component></toolbar-component>
<div class="main">
  <div class="banner">
    <div class="content">
      <br>
      <h1 style="font-size:4rem">{{ $t('welcome') }}</h1><br>
      <p style="font-size: 2rem">{{ $t('track') }}</p>
      <br>
    </div>
  </div>


  <div class="full-width-card">

      <div class="container1">
        <div>
          <h2  class="workout_plan">{{ $t('workout') }}</h2>
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
          <h2 style=" font-size: 80px">{{ $t('exercise-information') }}</h2>
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