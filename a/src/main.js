import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './routers'


createApp(App).use(router).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
