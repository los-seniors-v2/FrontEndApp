<script >
import toolbarComponent from "../../../public/components/toolbar.component.vue";
import SidebarComponent from "../../components/sidebar.component.vue";

export default {
  name: "profile-component",
  components: {SidebarComponent, toolbarComponent},


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
<!--        AQUI PONER INFORMACION DE API-->PONER INFO DE API
      </div>

    </div>

    <div class="container3">
      <h1>Trainer Session</h1>
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
      left:5%;

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