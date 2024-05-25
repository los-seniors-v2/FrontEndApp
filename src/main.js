import { createApp } from 'vue'
import './style.css'
import app1 from './app.vue'

import PrimeVue from "primevue/config";
import DialogService from "primevue/dialogservice";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import router from "./router/index.js";

// Add UI Components for application
import Button       from "primevue/button";
import Card         from "primevue/card";
import SelectButton from "primevue/selectbutton";
import Sidebar      from "primevue/sidebar";
import Toolbar      from "primevue/toolbar";
import Calendar from 'primevue/calendar';
import Tag from "primevue/tag";
import InputText from 'primevue/inputtext';
import Menubar      from "primevue/menubar";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Panel from 'primevue/panel';
import FloatLabel from 'primevue/floatlabel';
import Avatar from "primevue/avatar";

const app = createApp(app1);

app.use(PrimeVue, { ripple: true })
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)
    .component('Button', Button)
    .component('Card', Card)
    .component('pv-select-Button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('Toolbar', Toolbar)
    .component('Calendar', Calendar)
    .component('Tag', Tag)
    .component('pv-InputText', InputText)
    .component('pv-button', Button)
    .component('Menubar', Menubar)
    .component('Accordion', Accordion)
    .component('AccordionTab', AccordionTab)
    .component('pv-floatLabel', FloatLabel)
    .component('pv-panel', Panel)
    .component('pv-toolbar', Toolbar)
    .component('pv-avatar', Avatar)
    .use(router);
app.mount('#app');

