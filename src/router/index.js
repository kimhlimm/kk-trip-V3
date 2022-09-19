import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",

      component: () => import("@/views/home/homeView.vue"),
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favorView.vue"),
    },
    {
      path: "/order",
      component: () => import("@/views/order/orderView.vue"),
    },
    {
      path: "/message",
      component: () => import("@/views/message/messageView.vue"),
    },
    {
      path: "/city",
      component: () => import("@/views/city/cityView.vue"),
    },
  ],
})

export default router
