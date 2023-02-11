import { createApp } from 'vue'
// import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import 'virtual:windi.css'
import router from './router'
import store from './store'
// 全局loading 进度条
import "nprogress/nprogress.css"

const app = createApp(App)
app.use(ElementPlus).use(router).use(store)

// 图标库全局引入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 前置守卫
import "./permission"


app.mount('#app')
