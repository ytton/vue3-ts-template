import { createApp } from 'vue'
import 'normalize.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

console.log(import.meta.env.MODE)
console.log(import.meta.env.VITE_API)

const app = createApp(App)
app.use(router)
app.use(createPinia())

app.mount('#app')
