import {createApp, onBeforeMount} from 'vue'
import './style.css'
import app from './app.vue'
import PrimeVue from "primevue/config";
import DialogService from "primevue/dialogservice";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

createApp(app)
    .use(PrimeVue, {ripple: true})
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)

    .mount('#app')

