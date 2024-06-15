<script>

import FormRegister from "../components/form-register.component.vue";
import FileUploadContent from "../components/file-upload-content.component.vue";
import {IamApiService} from "../services/iam-api.service.js";
import {User} from "../model/user.entity.js";

export default {
  name: "resgister",
  components: {FileUploadContent, FormRegister},
  data() {
    return {
      iamService: new IamApiService(),
      ingredient: null,
      password:null,
      confirmPassword:null
    };
  },
  methods:{
    //convierte el usuario de la vista en un usuario
    convertDisplayableUserToUser(displayableUser){
      return new User(
          displayableUser.id,
          displayableUser.firstname,
          displayableUser.lastname,
          displayableUser.email,
          displayableUser.password,
          displayableUser.role
      )
    },
    createUser(user){
      user= this.convertDisplayableUserToUser(user);
      this.iamService.postUser(user).then((response) => {
        console.log(response.data);
      });
    }
  }
}
</script>

<template>
  <div class="flex justify-content-center">
  <div class="surface-card  shadow-2 border-round">
    <div class="flex justify-content-center ">
      <div>
        <div class="flex justify-content-center">
          <img src="../../assets/images/flexpal-logo.png" alt="logo" style="width:400px;" />
        </div>
        <h2 class="flex justify-content-center " style="margin-top: 0;">Register</h2>
      </div>
    </div>

    <form-register @form-submitted="createUser" ></form-register>

    <div class="flex flex-column justify-content-center align-items-center">
      <h2 class="m-2">Complete the verification steps below</h2>
      <h4 class="mt-0 mb-4">upload certificate or extra documentation</h4>
      <file-upload-content></file-upload-content>
      <b>Already have an account? <button @click="$router.push('/login')" style="color:white" > Sign in</button></b>
    </div>
  </div>
  </div>

</template>

<style scoped>

</style>
