<script>
import { useAuthenticationStore } from '../services/authentication.store.js';
import FormRegister from "../components/form-register.component.vue";
import FileUploadContent from "../components/file-upload-content.component.vue";
import {SignUpRequest} from "../model/sign-up.request.js";
import { postProfile } from '../services/profile.service.js';

export default {
  name: "sign-up",
  components: {FileUploadContent, FormRegister},
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        weigth: '',
        heigth: '',
        phone: '',
        username: '',
        password: '',
        role: ''
      }
    };
  },
  methods: {
   onSignUp() {
      let authenticationStore = useAuthenticationStore();
      let signUpRequest = new SignUpRequest(this.username, this.password, this.role);
      authenticationStore.signUp(signUpRequest, this.$router);
      
    }
  }
}
</script>

<template>
  <div class="main">
    <div class="align-items-center">
      <div class="surface-card  shadow-2 border-round">
        <div class="flex justify-content-center ">
          <div>
            <div class="flex justify-content-center align-items-center">
              <img src="../../assets/images/flexpal-logo.png" alt="logo" style="width:400px;"/>
            </div>
            <h2 class="flex justify-content-center align-items-center" style="margin-top: 0;">Register</h2>
          </div>
        </div>

        <!-- <form-register @form-submitted="createUser" ></form-register>-->
        <form-register @form-submitted="onSignUp"></form-register>

      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>