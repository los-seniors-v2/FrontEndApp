import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Add PrimeVue UI Library
import PrimeVue from "primevue/config";


// Add icons for app
import 'primeicons/primeicons.css';



// Add PrimeVue components
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Calendar from "primevue/calendar";

// Create app instance
const app = createApp(App);

// Add configuration for PrimeVue Plugin and components
app.use(PrimeVue, { ripple: true })
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-calendar', Calendar); // Usa el componente Calendar aquí

app.mount('#app');