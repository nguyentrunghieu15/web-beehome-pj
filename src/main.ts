import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import routes from './routes'

const app = createApp(App)

app.use(createPinia()).use(vuetify).use(routes)
app.mount('#app')
