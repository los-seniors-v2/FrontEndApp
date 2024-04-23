import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

import PrimeVue from "primevue/config";
import 'primevue/resources/themes/aura-light-cyan/theme.css';
import 'primevue/resources/primevue.min.css';

import 'primeicons/primeicons.css';

import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';

const app = createApp(App);
app.use(PrimeVue, {ripple: true})
    .component('pv-tree-table', TreeTable)
    .component('pv-column', Column)
    .component('pv-input-text', InputText)
    .component('pv-select-button', SelectButton);

createApp(App).mount('#app')
