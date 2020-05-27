<template>
  <div class="mt-3">
    <div class="text-secondary text-center">
      <div v-if="user" class="text-center">
        Welcome back
        <span class="font-weight-bold text-info">{{user.displayName}}</span>,
        <a href="#" role="button" class="text-primary" @click="$emit('logout')">Logout</a>
      </div>
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <h4 class="display-4 text-primary mt-3 mb-2">Phone Book</h4>
          <p class="lead">
            This simple app creates a simple phone book, allows to check in, and
            picks users. It's a good example of a
            Single Page Application which includes connection to a database and
            routing. It's a practical way to learn
            <a
              href="https://vuejs.org/"
            >Vue.js</a>
            with
            <a
              href="https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.1"
            >.NetCore 3.1</a>
            . Authenticate REST Requests APIs with
            <a
              href="https://firebase.google.com/docs/database/rest/auth"
            >Firebase ID tokens</a>.
          </p>

          <router-link class="btn btn-outline-primary mr-2" to="/register" v-if="!user">Register</router-link>
          <router-link class="btn btn-outline-primary mr-2" to="/login" v-if="!user">Log In</router-link>
          <router-link class="btn btn-primary" to="/meeting/:user" v-if="user">Meetings</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["user"]
};
</script>
