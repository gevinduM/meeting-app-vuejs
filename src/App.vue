<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view class="container" :user="user" @logout="logout" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import firebase from "firebase";
import db from "./db.js";
import jQuery from "jquery";
import bootstrap from "bootstrap";
global.jQuery = jQuery;
global.bootstrap = bootstrap;
global.db = db;

export default {
  name: "app",
  data: function() {
    return {
      user: null,
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.user = null;
           this.$router.replace({ name: "login"})
        });
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) this.user = user;
    });
  },
  components: {
    Navigation
  }
};
</script>
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
</style>
