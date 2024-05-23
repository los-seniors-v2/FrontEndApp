<script>
import {IamApiService} from "../services/iam-api.service.js";

export default {
  name: "login",
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
<h1>Este es el login</h1>
</template>

<style scoped>

</style>
