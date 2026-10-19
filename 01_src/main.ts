import { createApp } from 'vue'
import { createPinia } from 'pinia'

// @ts-expect-error Vue SFC types are not declared in this project.
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
