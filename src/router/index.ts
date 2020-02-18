import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Pokedex",
    component: () => import("@/views/Pokedex.vue")
  },
  {
    path: "/pokemon/:id",
    name: "Pokemon",
    component: () => import("@/views/Pokemon.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
