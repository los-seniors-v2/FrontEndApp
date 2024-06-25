import {createRouter, createWebHistory} from "vue-router";
import RoutineList from "../routines/components/routine-list.component.vue"
import Plans from "../subscription/pages/plans-section.component.vue"
import BookASessionComponent from "../counseling/pages/book-a-session.component.vue";
import LoginComponent from "../iam/pages/sign-in.component.vue";
import RegisterComponent from "../iam/pages/sign-up.component.vue";
import TrainingSessionComponent from "../counseling/pages/training-session.component.vue";
import HomeComponent from "../public/pages/home.component.vue";
import HomeCoachComponent from "../public/pages/home-coach.component.vue";
import ProfileComponent from "../profiles/pages/profile-coach.component.vue";
import ProfileMemberComponent from "../profiles/pages/profile-member.component.vue";
import NutritionComponent from "../nutrition/pages/nutrition-section.vue";
import RoutineComponent from "../routines/pages/routines-section.vue";
import FitnessPlanComponent from "../counseling/pages/fitness-plan-component.vue";
import {authenticationGuard} from "../iam/services/authentication.guard.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/routine-list',component: RoutineList},
        { path: '/plans',component: Plans}, //fixed
        { path: '/programming-session',component: BookASessionComponent}, //fixed
        {path:'/sign-in',name:'sign-in', component:LoginComponent},//fixed
        {path:'/sign-up',name:'sign-up', component:RegisterComponent}, //fixed
        { path: '/training-session',component: TrainingSessionComponent},
        {path: '/home', name:'home',component: HomeComponent},//fixed
        {path: '/home-coach', component: HomeCoachComponent},//fixed
        {path: '/profile-coach', component: ProfileComponent},//fixed
        {path: '/profile-member', component: ProfileMemberComponent}, //fixed
        {path: '/nutrition', component: NutritionComponent},
        {path: '/routines', component: RoutineComponent},
        {path: '/make-plans', component: FitnessPlanComponent},
        { path: '/',        redirect: '/home'},

    ]
});
router.beforeEach((to, from, next) => {
    const publicPages = ['/sign-in', '/sign-up'];
    const authRequired = !publicPages.includes(to.path);
    const token = localStorage.getItem('token');

    if (authRequired && !token) {
        return next('/sign-in');
    }

    next();
});
export default router;
