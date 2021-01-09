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
  }
];

const router = new VueRouter({
  linkExactActiveClass: "custom-active-route-class",
  routes
});

export default router;
