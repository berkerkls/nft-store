import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Vuetify
import * as directives from "vuetify/directives"
import * as components from "vuetify/components"
import "@mdi/font/css/materialdesignicons.css"
import { createVuetify } from "vuetify"
import "vuetify/styles"


const Vuetify = createVuetify({
    components,
    directives
})

createApp(App)
    .use(router)
    .use(Vuetify)
    .mount('#app')
