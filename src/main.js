import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
require('@/assets/main.scss');

import store from './store/'
const app = createApp(App).use(router).use(store).mount('#app')