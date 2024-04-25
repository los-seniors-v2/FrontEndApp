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
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Panel from 'primevue/panel';

const app = createApp(App);

// Add configuration for PrimeVue Plugin and components
app.use(PrimeVue, { ripple: true })
    .component('Button', Button)
    .component('Card', Card)
    .component('pv-select-button', SelectButton)
    .component('Sidebar', Sidebar)
    .component('Avatar', Avatar)
    .component('Menu', Menu)
    .component('Menubar', Menubar)
    .component('Toolbar', Toolbar)
    .component('Accordion', Accordion)
    .component('AccordionTab', AccordionTab)
    .component('pv-floatLabel', FloatLabel)
    .component('pv-input-text', InputText)
    .component('pv-calendar', Calendar)
    .component('pv-panel', Panel);
// Mount the app
app.mount('#app');

