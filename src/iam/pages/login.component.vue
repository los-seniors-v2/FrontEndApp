<script>
import {IamApiService} from "../services/iam-api.service.js";


export default {
  name: "login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      iamService: new IamApiService(),
      errorMessage: "",
      checked1: false
    };
  },
  created() {

  },
  methods:{
    /*login() {
      this.iamService.loginUser(this.email, this.password).then((response) => {
        if (response.data.length > 0) {
          // User found, handle successful login
          const user = response.data[0];
          //Redirect to dashboard or home page
          localStorage.setItem('user', JSON.stringify(user));
          this.$router.push("/home");
          // Store user information in localStorage or state management library
        } else {
          // User not found or incorrect credentials
          this.errorMessage = "Invalid email or password.";
        }
      }).catch((error) => {
        console.error("Login error:", error);
        this.errorMessage = "An error occurred during login.";
      });
    }
    */
    login() {
      const user = JSON.parse(localStorage.getItem(this.email));
      if (user && user.password === this.password) {
        // Passwords match
        localStorage.setItem('user', JSON.stringify(user));
        this.$router.push("/home");
      } else {
        // Passwords don't match or user not found
        this.errorMessage = "Invalid email or password.";
      }
    }


  },

  setup(){

  }
}
</script>

<template>
  <div class="flex justify-content-center align-items-center " style="height: 100vh" >
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <img src="../../assets/images/flexpal-logo.png" alt="Image" height="50" class="mb-3" />
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer" @click="$router.push('/register')" >Create today!</a>
      </div>


      <div>
        <form @submit.prevent="login">
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <pv-InputText v-model="email" id="email1" type="text" placeholder="Email address" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <pv-InputText v-model="password" id="password1" type="password" placeholder="Password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <pv-checkbox id="rememberme1" :binary="true" v-model="checked1" class="mr-2"></pv-checkbox>
            <label for="rememberme1">Remember me</label>
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <pv-button @click="login" label="Sign In" icon="pi pi-user" class="w-full"></pv-button>
        </form>

        <div v-if="errorMessage" class="text-red-500 mt-3">{{ errorMessage }}</div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
