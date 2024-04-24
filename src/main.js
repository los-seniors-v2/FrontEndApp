import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

import PrimeVue from "primevue/config";

import 'primevue/resources/themes/aura-light-cyan/theme.css';
import 'primevue/resources/primevue.min.css';

import 'primeicons/primeicons.css';

import Card from "primevue/card";
import DataTable from "primevue/datatable";

const app = createApp(App);
app.use(PrimeVue, {ripple: true})
    .component("pv-card", Card)
    .component("pv-datatable", DataTable);


createApp(App).mount('#app')
