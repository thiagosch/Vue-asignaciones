import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
require('@/assets/main.scss');
import { VueCookieNext } from 'vue-cookie-next'
import store from './store/'

const app = createApp(App).use(VueCookieNext).use(router).use(store).mount('#app')