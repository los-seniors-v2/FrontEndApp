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
import Divider from "primevue/divider";
import Toast from "primevue/toast";
import ProgressBar from "primevue/progressbar";
import ConfirmDialog from "primevue/confirmdialog";
import Avatar from "primevue/avatar";
import DataView from "primevue/dataview";
import Paginator from "primevue/paginator";
import {createPinia} from "pinia";
import i18n from "./i18n.js";

const pinia = createPinia();
const app = createApp(App);

app.use(PrimeVue, { ripple: true })
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)
    .use(pinia)
    .component('pv-card', Card)
    .component('pv-select-Button', SelectButton)
    .component('Sidebar', Sidebar)
    .component('Calendar', Calendar)
    .component('Tag', Tag)
    .component('pv-InputText', InputText)
    .component('pv-InputGroup',InputGroup)
    .component('pv-InputGroupAddon',InputGroupAddon)
    .component('pv-button', Button)
    .component('pv-menubar', Menubar)
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
    .component('pv-divider',Divider)
    .component('pv-toast', Toast)
    .component('pv-progressBar', ProgressBar)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-avatar',Avatar)
    .component('pv-sidebar', Sidebar)
    .component('pv-data-view', DataView)
    .component('pv-paginator', Paginator)
    .use(router);
app.mount('#app');
app.use(i18n);

