<script>

import FileUploadContent from "../components/file-upload-content.component.vue";

export default {
  name: "resgister",
  components: {FileUploadContent},
  data() {
    return {
      ingredient: null,
      password: null,
      confirmPassword: null,
    };
  },
}
</script>

<template>
<div>
  <form>
    <div>
      <pv-InputGroup>
        <pv-InputGroupAddon>
          <i class="pi pi-user"></i>
        </pv-InputGroupAddon>
        <pv-InputText placeholder="Firstname" />
      </pv-InputGroup>

      <pv-InputGroup>
        <pv-InputGroupAddon>
          <i class="pi pi-user"></i>
        </pv-InputGroupAddon>
        <pv-InputText placeholder="Lastname" />
      </pv-InputGroup>

      <pv-InputGroup>
        <pv-InputGroupAddon>
          <i class="pi pi-envelope"></i>
        </pv-InputGroupAddon>
        <pv-InputText placeholder="Email" />
      </pv-InputGroup>

      <pv-InputGroup>
        <pv-InputGroupAddon>
          <i class="pi pi-lock"></i>
        </pv-InputGroupAddon>
        <pv-password v-model="password" toggleMask  placeholder="Password" >
          <template #header>
            <h6>Pick a password</h6>
          </template>
          <template #footer>
            <Divider />
            <p class="mt-2">Suggestions</p>
            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
              <li>At least one lowercase</li>
              <li>At least one uppercase</li>
              <li>At least one numeric</li>
              <li>Minimum 8 characters</li>
            </ul>
          </template>
        </pv-password>
      </pv-InputGroup>

      <pv-InputGroup>
        <pv-InputGroupAddon>
          <i class="pi pi-lock"></i>
        </pv-InputGroupAddon>
        <pv-password v-model="confirmPassword" placeholder="Confirm Password" toggleMask />
      </pv-InputGroup>

      <div class="card flex justify-content-center">
        <div class="flex flex-wrap gap-3">
          <div class="flex align-items-center">
            <pv-radioButton v-model="ingredient" inputId="user" name="user" value="User" />
            <label for="ingredient1" class="ml-2">User</label>
          </div>
          <div class="flex align-items-center">
            <pv-radioButton v-model="ingredient" inputId="coach" name="coach" value="Coach" />
            <label for="ingredient2" class="ml-2">Coach</label>
          </div>
        </div>
      </div>
    </div>
  </form>

  <h2>Certidicado de autenticacion</h2>

  <file-upload-content></file-upload-content>

</div>
</template>

<style scoped>

</style>
