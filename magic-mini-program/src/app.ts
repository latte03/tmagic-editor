import './app.scss'

import { createPinia } from 'pinia'
import { createApp, defineAsyncComponent } from 'vue'

import components from "./async-comp-entry";

const App = createApp({
  onShow(options) {
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())
Object.entries(components).forEach(([type, component]: [string, any]) => {
  App.component(`magic-ui-${type}`, defineAsyncComponent(component));
});



export default App
