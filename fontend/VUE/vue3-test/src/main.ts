import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import vResize from './directive/resize-able'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.performance = true

app.mount('#app')

app.provide('global', 'global value')
app.directive('vResize', vResize)
