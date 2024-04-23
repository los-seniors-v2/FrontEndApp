import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import PrimeVue from "primevue/config";

import 'primevue/resources/themes/aura-light-cyan/theme.css';
import 'primevue/resources/primevue.min.css';

import 'primeicons/primeicons.css';


// Add UI Components for application
import Button       from "primevue/button";
import Card         from "primevue/card";
import SelectButton from "primevue/selectbutton";
import Sidebar      from "primevue/sidebar";
import Avatar       from "primevue/avatar";
import Menu         from "primevue/menu";
import Menubar      from "primevue/menubar";
import Toolbar      from "primevue/toolbar";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

const app = createApp(App);

// Add configuration for PrimeVue Plugin and components
app.use(PrimeVue, { ripple: true })
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .component('pv-accordion', Accordion)
    .component('pv-accordionTab', AccordionTab);
// Mount the app
app.mount('#app');