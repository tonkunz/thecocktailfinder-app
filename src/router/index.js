import Vue from "vue";
import VueRouter from "vue-router";

// Pages
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage
  },
  {
    path: "/drink/:id",
    name: "Drink",
    props: true,
    /** Lazy Routes */
    component: () => import(/* webpackChunkName: "about" */ "@/pages/DrinkPage.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
