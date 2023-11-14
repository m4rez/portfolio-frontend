import { createRouter, createWebHistory } from 'vue-router';
import MainContact from '@/components/MainContact.vue';
import MainHome from '@/components/MainHome.vue';
import MainSkills from '@/components/MainSkills.vue';
import MainProjects from '@/components/MainProjects.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base:'/',
  routes: [
    { path: '/', component: MainHome },
    { path: '/kontakt', component: MainContact },
    { path: '/dovednosti', component: MainSkills },
    { path: '/projekty', component: MainProjects }
  ]
});


export default router;