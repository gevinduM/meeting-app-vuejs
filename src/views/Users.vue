<template>
  <div class="container mt-4">
    <div class="alert alert-success" v-if="status">
      {{status}}
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        @click="ClearMessage"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="row justify-content-center">
      <div
        class="card ml-2 mt-2 col-10 col-md-6 col-lg-4 col-xl-3 float-left"
        style="width: 150px"
        v-for="item in allUsers"
        v-bind:key="item.id"
      >
        <div class="card-body" @click="onSelectUser(item)" style="cursor:pointer;min-width:400px">
          <h5 class="card-title">{{item.fname}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{item.lname}}</h6>
          <div>
            <font-awesome-icon icon="envelope" />
            <span class="ml-2">{{ item.email}}</span>
          </div>
          <div>
            <font-awesome-icon icon="phone" />
            <span class="ml-2">{{ item.phone}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
export default {
  name:"Users",
  data: function(){
    return{
      allUsers:null,
      status:null,
      idToken:null
    }
  },
  methods:{
    onSelectUser(user){
      this.$router.replace({ name: "meeting", params: {user:user}})
    },
    ClearMessage(){
      this.$router.replace({ name: "Users", params: {msg:":msg"}})
    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) this.user = user;
      firebase.auth().currentUser.getIdToken(false).then( idToken=> {
          this.idToken = idToken;
           axios.get('http://localhost:56090/api/users?size=100',{
             headers: {
              "Access-Control-Allow-Origin": "*", 
              "Content-Type": "application/json",
              "Authorization":`Bearer ${this.idToken}` 
            }
          }).then(response => {
              this.allUsers = response.data;
          })
      });
    });
    
    if(this.$route.params.msg !== ":msg"){
      this.status = this.$route.params.msg;
    }
   
  }
}
</script>>