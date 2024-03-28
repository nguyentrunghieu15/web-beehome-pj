import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'
import ElementPlugin from './plugins/element-plus'

import registerComponent from './components/base'

import './index.css'

const app = createApp(App)

// Add plugin 
app.use(createPinia())
app.use(router)
app.use(ElementPlugin.ElementPlus)

// Add Element Plus Icon Global
ElementPlugin.addIconElementPlus(app)

// Add global component
registerComponent(app)

app.mount('#app')
