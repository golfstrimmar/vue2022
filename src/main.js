import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/scss/index.scss";
import components from '@/components/ui/index';
import router from "@/router/index";
import directives from './directives';
import store from './store/index'
const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component)
});

directives.forEach(directive=>{
  app.directive(directive.name, directive);
})
app.use(router).use(store).mount("#app");
