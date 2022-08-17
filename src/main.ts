import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'uno.css'

createApp(App).use(router, store).mount('#app')
