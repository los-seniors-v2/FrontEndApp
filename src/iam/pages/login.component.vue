<script>
import {IamApiService} from "../services/iam-api.service.js";


export default {
  name: "login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      iamService: new IamApiService()
    };
  },
  created() {
    this.getAllUsers();
  },
  methods:{
    getAllUsers(){
      this.iamService.getAllUsers().then((response) => {
        console.log(response);
      });
    },
  }
}
</script>

<template>
  <div class="flex justify-content-center">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <img src="../../assets/images/flexpal-logo.png" alt="Image" height="50" class="mb-3" />
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <pv-InputText id="email1" type="text" placeholder="Email address" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <pv-InputText id="password1" type="password" placeholder="Password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <pv-checkbox id="rememberme1" :binary="true" v-model="checked1" class="mr-2"></pv-checkbox>
            <label for="rememberme1">Remember me</label>
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <pv-button label="Sign In" icon="pi pi-user" class="w-full"></pv-button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
