import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'root',
    path: '/',
    component: () => import(/* webpackChunkName: "main" */ "@/views/main/Index.vue"),
    meta: {
      layout: "DefaultLayout",
      title: "ALTBOOKS 알트북스 - 온라인 서점",
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
