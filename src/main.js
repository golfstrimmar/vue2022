import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/scss/index.scss";
import components from '@/components/ui/index'

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component)
});



app.mount("#app");
