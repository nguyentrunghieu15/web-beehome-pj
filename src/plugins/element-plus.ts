import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


function addIconElementPlus(app: App<Element>) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
}

export default { ElementPlus, addIconElementPlus }