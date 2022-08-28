import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/homePage.vue";
import PostPage from "../views/postPage.vue";
import AboutPage from "../views/aboutPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
