import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'

const app = createApp(App)
app.use(Router)
app.mount('#app')
