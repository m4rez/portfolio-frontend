import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import '@/assets/css/bootstrap-4.3.1.css';
import '@/assets/css/awesome.css';
import 'bootstrap';

createApp(App).use(router).mount('#app');
