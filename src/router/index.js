import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/homePage.vue";
import PostPage from "../views/postPage.vue";
import AboutPage from "../views/aboutPage.vue";
import PostIdPage from "../views/postIdPage.vue";
import PostVuexPage from '@/views/postVuexPage'

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
  {
    path: "/store",
    component: PostVuexPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
