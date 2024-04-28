<script>
import InputText  from "primevue/inputtext";
import Button from "primevue/button";
export default {
  name: "RegistrationProcess",
  components: {
    InputText,
    Button
  }
}

</script>

<template>
  <div>

  <div class="container1">
    <h1>Coach Registration</h1>
    <div class="card">
      <InputText type="text" v-model="value" placeholder="Enter your details" style="width:320px; " />
    </div>
    <div class="button">
      <Button label="Submit" />
    </div>
  </div>

  <div class="container2">
    <h1>Verification Process</h1>
    <p>Comeplete the verification steps below</p>
    <div class="card" >
      <label for="image" style="font-weight:bold">Certified Image</label>
      <InputText id="image"  placeholder="Upload certified"  style="width:520px; " />
    </div>
    <div class="button">
      <Button label="Submit" />
    </div>
  </div>


  </div>
</template>

<style>
.container1{
  background-image:linear-gradient(to right,#395BB2 0%,#2956CA 38%,#001855 100%);
  width:100%;
  text-align:center;
  position:fixed;
  left:0;
  top:50px;
  padding:30px;
  h1{
    color:white;
  }
}

.card{
  margin-bottom:15px;
}
InputText{
  width:100px;
}
Button{
  background-color:black;
  border:none;
  padding:10px 50px 10px 50px;
}
.container2{
  text-align:center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div{
    display:flex;
    flex-direction: column;
    align-items:start;
  }
}
</style>