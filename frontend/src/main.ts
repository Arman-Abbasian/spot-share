import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import router from './router'

const app = createApp(App)

registerPlugins(app)

app.use(vuetify) // Use Vuetify in your app
app.use(router)

app.mount('#app')
