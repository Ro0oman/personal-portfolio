import './assets/main.css'
import { createI18n } from "vue-i18n";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import translations
import es from "./locales/es.json";
import en from "./locales/en.json";

// configure i18n
const i18n = createI18n({
  locale: "es",
  fallbackLocale: "es",
  messages: { es, en },
});

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')

export default i18n;