import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faTrash, faLink, faListUl, faRandom, faUndo, faStar, faEnvelope, faCube, faUser, faAddressCard, faPhone, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTrash, faLink, faListUl, faRandom, faUndo, faStar, faEnvelope, faCube, faUser, faAddressCard, faPhone, faPlus);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
