import {createApp, onBeforeMount} from 'vue'
import './style.css'
import app from './app.vue'
import PrimeVue from "primevue/config";
import DialogService from "primevue/dialogservice";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

// Add UI Components for application
import Button       from "primevue/button";
import Card         from "primevue/card";
import SelectButton from "primevue/selectbutton";
import Sidebar      from "primevue/sidebar";
import Toolbar      from "primevue/toolbar";
import Calendar from 'primevue/calendar';

createApp(app)
    .use(PrimeVue, {ripple: true})
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)
    .component('Button', Button)
    .component('Card', Card)
    .component('pv-select-Button', SelectButton)
    .component('Sidebar', Sidebar)
    .component('Toolbar', Toolbar)
    .component('Calendar', Calendar)
    .mount('#app')

