import {createRouter, createWebHistory} from "vue-router";
import RoutineList from "../routines/components/routine-list.component.vue"
import Plans from "../OLD FILES/app/components/plans-section.component.vue"
import BookASessionComponent from "../OLD FILES/app/components/book-a-session.component.vue";
import HomeSection from "../OLD FILES/app/components/home-section.vue";

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