<template>
  <header id="page-hero" class="site-header">
    <nav class="site-nav text-uppercase navbar navbar-expand-md bg-primary navbar-dark">
      <div class="container-fluid">
        <i class="fas faCube"></i>
        <router-link class="navbar-brand" to="/">
          <font-awesome-icon icon="cube"></font-awesome-icon>
          {{""}} Meeting Log
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
            <router-link class="nav-item nav-link" to="/meeting" v-if="user">Meeting</router-link>
            <router-link class="nav-item nav-link" to="/Login" v-if="!user">Login</router-link>
            <router-link class="nav-item nav-link" to="/register" v-if="!user">Register</router-link>
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