
import { createApp } from 'vue'

import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'

import store from "@/store/index.js"

import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router/router.js'
import "@fortawesome/fontawesome-free"
const app = createApp(App)


app.use(store)
app.use(VueAxios, axios)
app.use(Vuelidate)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
