import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import PrimeVue from "primevue/config";

import 'primevue/resources/themes/aura-light-cyan/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


import InputText from 'primevue/inputtext';
import Button from "primevue/button";

const app = createApp(App);

app.use(PrimeVue, { ripple: true })
    .component('pv-InputText', InputText)
    .component('pv-button', Button);
app.mount('#app')
