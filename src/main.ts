import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import routes from './routes'
import ElementPlugin from './plugins/element-plus'

import registerComponent from './components/base'

const app = createApp(App)

// Add plugin 
app.use(createPinia()).use(routes).use(ElementPlugin.ElementPlus)

// Add Element Plus Icon Global
ElementPlugin.addIconElementPlus(app)

// Add global component
registerComponent(app)

app.mount('#app')
