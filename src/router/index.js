import {createRouter, createWebHistory} from "vue-router";
import RoutineList from "../routines/components/routine-list.component.vue"
import Plans from "../subscription/pages/plans-section.component.vue"
import BookASessionComponent from "../counseling/pages/book-a-session.component.vue";
import HomeSection from "../nutrition/pages/home-section.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/routine-list',component: RoutineList},
        { path: '/plans',component: Plans},
        { path: '/programming-session',component: BookASessionComponent},
        { path: '/home',component: HomeSection},
        { path: '/',        redirect: '/home'}
    ]
});

export default router;