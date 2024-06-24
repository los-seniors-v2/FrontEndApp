<script  >
export default {
  name: "sidebar-component",
  data() {
    return {
      visible: false
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('role');
      this.$router.push('/login');
    }
  }
}
</script>

<template>
  <div class="card flex justify-content-center">
    <pv-sidebar v-model:visible="visible" header="Options">

      <ul class="list-none p-0 m-0 overflow-hidden">

        <li>
          <a href="/plans" v-ripple
             class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
            <img src="https://www.pngkey.com/png/full/16-162388_membership-badge-png-club-penguin-membership-logo.png " alt=""
                 width="50px" height="50px" class="image">
            <span class="font-medium">MemberShip</span>
          </a>
        </li>
        <li @click="logout">
          <a v-ripple
             class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
            <img src="https://cdn.pixabay.com/photo/2017/05/29/23/02/logging-out-2355227_1280.png" width="50px" alt=""
                 height="50px" class="image">
            <span class="font-medium">Log Out</span>
          </a>
        </li>
      </ul>
    </pv-sidebar>

    <Button @click="visible = true">
      <i class="pi pi-arrow-right" style="font-size: 2.0rem"> </i>
    </Button>
  </div>
</template>

<style scoped>
span {
  font-size: 1.5rem;
}

.image {
  margin-right: 1.5rem;
}
</style>