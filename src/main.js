import Vue from "vue";
import App from "./App.vue";

// Router
import router from "@/router";

// Font Awesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faExclamationCircle,
  faChevronCircleLeft,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faStar,
  faExclamationCircle,
  faChevronCircleLeft,
  faChevronCircleRight
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
