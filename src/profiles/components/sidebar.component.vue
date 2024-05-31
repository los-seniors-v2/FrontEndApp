<script  >
export default {
  name: "sidebar-component",
  data() {
    return {
      visible: false
    }
  }
}
</script >

<template>
  <div class="card flex justify-content-center">
    <pv-sidebar v-model:visible="visible" header="Sidebar" >

      <ul class="list-none p-0 m-0 overflow-hidden" >
        <li >
          <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple" href="/home">
<!--            <i class="pi pi-home mr-4" style="font-size: 1.5rem"></i>-->
            <img src="https://static.vecteezy.com/system/resources/previews/004/329/511/original/flexed-bicep-color-icon-strong-emoji-muscle-bodybuilding-workout-man-s-arm-forearm-isolated-illustration-vector.jpg" width="50px" height="50px" class="image">
            <span class="font-medium">Exercise</span>
          </a>
        </li>
        <li>
          <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
            <img src="https://cdn-icons-png.flaticon.com/512/1625/1625042.png" width="50px" height="50px" class="image">
            <span class="font-large">Nutrition</span>
          </a>
        </li>
        <li>
          <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
            <img src="https://cdn-icons-png.flaticon.com/512/1625/1625042.png" width="50px" height="50px" class="image">

            <span class="font-medium">Session</span>
          </a>
        </li>
        <li>
          <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
            <img src="https://www.pngkey.com/png/full/16-162388_membership-badge-png-club-penguin-membership-logo.png" width="50px" height="50px" class="image">
            <span class="font-medium">MemberShip</span>
          </a>
        </li>
        <li>
          <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
            <img src="https://cdn.pixabay.com/photo/2017/05/29/23/02/logging-out-2355227_1280.png" width="50px" height="50px" class="image">
            <span class="font-medium">Log Out</span>
          </a>
        </li>
      </ul>
    </pv-sidebar>

 <Button  @click="visible = true">
   <i class="pi pi-arrow-right" style="font-size: 2.0rem"> </i>
  </Button>
  </div>
</template>

<style scoped>
span{
  font-size: 1.5rem;
}
.image{
  margin-right:1.5rem;
}
</style>