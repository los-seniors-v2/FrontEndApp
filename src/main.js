import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

//PrimeVue
import PrimeVue from "primevue/config";

// Add theme for app
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';

//prime icons
import 'primeicons/primeicons.css';

//PrimeFlex
import 'primeflex/primeflex.css';

//Router
import router from "./router/index.js";

//Services  From PrimeVue
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
import Tag from "primevue/tag";
import InputText from 'primevue/inputtext';
import Menubar      from "primevue/menubar";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Panel from 'primevue/panel';
import FloatLabel from 'primevue/floatlabel';
import Checkbox from "primevue/checkbox";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import RadioButton from "primevue/radiobutton";
import Password from "primevue/password";
import FileUpload from "primevue/fileupload";
import Badge from "primevue/badge";

const app = createApp(App);

app.use(PrimeVue, { ripple: true })
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)
    .component('Button', Button)
    .component('Card', Card)
    .component('pv-select-Button', SelectButton)
    .component('Sidebar', Sidebar)
    .component('Toolbar', Toolbar)
    .component('Calendar', Calendar)
    .component('Tag', Tag)
    .component('pv-InputText', InputText)
    .component('pv-InputGroup',InputGroup)
    .component('pv-InputGroupAddon',InputGroupAddon)
    .component('pv-button', Button)
    .component('Menubar', Menubar)
    .component('Accordion', Accordion)
    .component('AccordionTab', AccordionTab)
    .component('pv-floatLabel', FloatLabel)
    .component('pv-panel', Panel)
    .component('pv-toolbar', Toolbar)
    .component('pv-checkbox', Checkbox)
    .component('pv-radioButton',RadioButton)
    .component('pv-password',Password)
    .component('pv-fileUpload',FileUpload)
    .component('pv-badge',Badge)
    .use(router);
app.mount('#app');

