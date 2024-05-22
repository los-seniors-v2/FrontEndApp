<script setup>
import Card from "primevue/card";
import Calendar from "primevue/calendar";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { ref } from "vue";

const datetime12h = ref();
const time = ref();
// export default {
//   name: "DetailsSection",
//   components: {
//     Card,Calendar
//   }
// }
</script>

<template>
  <div class="card" style="width: 100%; text-align:center;">
    <Card >
      <template #title>
        <h2>Session Details</h2>
      </template>

      <template #content>
        <div class="details_card ">
          <div>
             <div class="centered_item">
               <label for="calendar-12h" class="detail_label"> Schedule Time </label>
               <Calendar id="calendar-12h" v-model="datetime12h" showTime hourFormat="12" placeholder="HH:MM AM/PM" style="width:700px;"/>
             </div>
              <br>
          <div class="centered_item">
            <label  class="detail_label"> Agenda </label>
            <InputText type="text" v-model="value" placeholder="Brief agenda for the call" style="width:700px;"/>
          </div>
          </div>
        </div>
      </template>


      <template  #footer>
        <div>
          <Button label="Confirm"  style="background-color: black; padding:15px 50px 15px 50px;"/>
        </div>
      </template>

    </Card>

  </div>

</template>

<style >
h2{
  font-size: 50px;
  margin-bottom: 0;
}
.details_card{
  display:flex;
  justify-content: center;
  align-items: center;

}
.detail_label{
  font-weight:bold;
  display:block;
  align-items:end;
}
.centered_item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>