import type { App } from 'vue'
import TextField from './TextField.vue'

const componentGlobal = [TextField]

const registerComponent = (app: App<Element>) => {
    for (let index = 0; index < componentGlobal.length; index++) {
        app.component(componentGlobal[index].__name || "", componentGlobal[index])

    }
}

export default registerComponent;
