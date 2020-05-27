<template>
  <header id="page-hero" class="site-header">
    <nav class="site-nav text-uppercase navbar navbar-expand-md bg-primary navbar-dark">
      <div class="container-fluid">
        <i class="fas faCube"></i>
        <router-link class="navbar-brand" to="/">
          <font-awesome-icon icon="cube"></font-awesome-icon>
          {{""}} Phone Book
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="#navbarToggleExternalContent"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <section class="collapse navbar-collapse" id="navbarToggleExternalContent">
          <div class="navbar-nav ml-auto">
            <router-link class="nav-item nav-link" to="/Users/:msg" v-if="user">Users</router-link>
            <router-link class="nav-item nav-link" to="/meeting/:user" v-if="user">Add User</router-link>
            <router-link class="nav-item nav-link" to="/Login" v-if="!user">Login</router-link>
            <router-link class="nav-item nav-link" to="/register" v-if="!user">Register</router-link>
            <button
              class="nav-item nav-link btn btn-link"
              @click="$emit('logout')"
              v-if="user"
            >LOGOUT</button>
          </div>
        </section>
      </div>
    </nav>
  </header>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
  name:"navigation",
  props: ["user"],
  components:{
    FontAwesomeIcon
  }
}
</script>