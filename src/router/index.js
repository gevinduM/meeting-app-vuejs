import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Meeting from "../views/Meeting.vue";
import Register from "../views/Register.vue";
import Users from "../views/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }, {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/meeting/:user",
    name: "meeting",
    component: Meeting
  }, {
    path: "/register",
    name: "register",
    component: Register
  }, {
    path: "/Users/:msg",
    name: "Users",
    component: Users
  }
  , {
    path: "*",
    redirect: '/'
  }
];

const router = new VueRouter({
  routes
});

export default router;
