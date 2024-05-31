<script>
export default {
  name: "Guidelines",
};

</script>

<template>

  <div class="card" style="width: 100%">
    <pv-card>
      <template #title>
        <h2 style="margin-left: 15%">Session Guidelines</h2>
        <section>
          <pv-panel class="right-panel" style="width: 40%">
            <template #header>
              <div class="header-content">
                <img src="/src/assets/images/stay-hydrated.png" alt="stay-hydrated" class="header-image">
                <div class="header-text">
                  <h3>Stay Hydrated</h3>
                  <p>Drink water before and during the session</p>
                </div>
              </div>
            </template>
          </pv-panel>

          <pv-panel class="right-panel" style="width: 40%">
            <template #header>
              <div class="header-content">
                <img src="/src/assets/images/active-participation.png" alt="stay-hydrated" class="header-image">
                <div class="header-text">
                  <h3>Active Participation</h3>
                  <p>Engage and ask questions for better understanding</p>
                </div>
              </div>
            </template>
          </pv-panel>
        </section>
      </template>

      <template #content>
        <p class="m-1" style="margin-left: 15%">
          Follow these tips to make the most out of your session


        </p>
      </template>

      <template  #footer>
        <div>
          <pv-button label="Read More"  style="background-color: black; padding:15px 50px 15px 50px; margin-left: 15%"/>
        </div>
      </template>
    </pv-card>
  </div>

</template>

<style >
.card{
  color: black;
}
.right-panel {
  display: flex;
  order: 1;
}
.header-content {
  display: flex;
  align-items: center;
}
.header-image {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
.header-text {
  display: flex;
  flex-direction: column;
}
.header-text p {
  margin-top: -15px;
}


</style>