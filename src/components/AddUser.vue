<template>
  <div>
    <h1 class="font-weight-light text-center">Add a User</h1>
    <div class="alert alert-warning" v-if="error">
      {{error}}
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
    <div class="mt-5">
      <form @submit.prevent="handleUserAdd">
        <div class="form-group row">
          <label class="col-4 col-form-label" for="fisrName">First Name</label>
          <div class="col-8">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <font-awesome-icon icon="user"></font-awesome-icon>
                </div>
              </div>
              <input
                id="fisrName"
                name="fisrName"
                placeholder="First Name"
                type="text"
                class="form-control"
                required="required"
                v-model="fname"
              />
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="lastName" class="col-4 col-form-label">Last Name</label>
          <div class="col-8">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <font-awesome-icon icon="user"></font-awesome-icon>
                </div>
              </div>
              <input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                type="text"
                class="form-control"
                required="required"
                v-model="lname"
              />
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="address" class="col-4 col-form-label">Address</label>
          <div class="col-8">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <font-awesome-icon :icon="['fas', 'address-card']" />
                </div>
              </div>
              <input
                id="address"
                name="address"
                placeholder="Address"
                type="text"
                class="form-control"
                required="required"
                v-model="address"
              />
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="email" class="col-4 col-form-label">Email</label>
          <div class="col-8">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <font-awesome-icon icon="envelope" />
                </div>
              </div>
              <input
                id="email"
                name="email"
                placeholder="Email"
                type="text"
                class="form-control"
                required="required"
                v-model="email"
              />
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-4">Gender</label>
          <div class="col-8">
            <div class="custom-control custom-radio custom-control-inline">
              <input
                name="gender"
                id="gender_0"
                type="radio"
                required="required"
                class="custom-control-input"
                value="male"
                v-model="gender"
              />
              <label for="gender_0" class="custom-control-label">Male</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                name="gender"
                id="gender_1"
                type="radio"
                required="required"
                class="custom-control-input"
                value="female"
                v-model="gender"
              />
              <label for="gender_1" class="custom-control-label">female</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                name="gender"
                id="gender_2"
                type="radio"
                required="required"
                class="custom-control-input"
                value="other"
                v-model="gender"
              />
              <label for="gender_2" class="custom-control-label">Other</label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="phone" class="col-4 col-form-label">Phone</label>
          <div class="col-8">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <font-awesome-icon icon="phone" />
                </div>
              </div>
              <input
                id="phone"
                name="phone"
                placeholder="Phone"
                type="text"
                class="form-control"
                required="required"
                v-model="phone"
              />
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary ml-2">Submit</button>
            <button
              name="button"
              type="button"
              class="btn btn-warning ml-2"
              @click.prevent="handleUserUpdate"
            >update</button>
            <button
              name="submit"
              type="submit"
              class="btn btn-danger ml-2"
              @click.prevent="handleUserDelete"
            >delete</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";
export default {
    name:"adduser",
    props: ["userauth"],
    data:function(){
    return{
      
      fname: null,
      lname: null,
      address: null,
      email: null,
      gender: "prefernot",
      phone:null,
      selectedUser:this.$route.params.user,
      error: null,
      idtoken: null
    }
  }, methods : {
    handleUserAdd:function() {
         firebase.auth().currentUser.getIdToken(true).then( idToken=> {
            this.idtoken = idToken;
             axios.post('http://localhost:56090/api/users/',{
                    "email": this.email,
                    "fname": this.fname,
                    "lname": this.lname,
                    "phone": this.phone,
                    "address": this.address,
                    "imageUrl": "https://gevindu/m.jpg",
                    "gender": this.gender
                },
                {
                    headers: {
                    "Access-Control-Allow-Origin": "*", 
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${this.idtoken}`
                    }
                }) .then(response => {
                      // handle success
                      console.log(response);
                      let  msg = response.data.fname + " has been " + response.statusText;
                      this.$router.replace({ name: "Users", params: {msg:msg}})
                    })
                    .catch(error => {
                      // handle error
                      console.log(error);
                      this.error = error;
                    })
                
         });
     
    },
    handleUserUpdate(){
        firebase.auth().currentUser.getIdToken(true).then( idToken=> {
            this.idtoken = idToken;
            axios.put('http://localhost:56090/api/users/'+this.selectedUser.id,{
                "id" : this.selectedUser.id,
                "email": this.email,
                "fname": this.fname,
                "lname": this.lname,
                "phone": this.phone,
                "address": this.address,
                "imageUrl": "https://gevindu/m.jpg",
                "gender": this.gender
            },
            {
                headers: {
                    "Access-Control-Allow-Origin": "*", 
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${this.idtoken}`
                }
            }).then(response => {
                    console.log(response);
                    let  msg = this.selectedUser.fname + " has been updated";
                    this.$router.replace({ name: "Users", params: {msg:msg}})
                })
                .catch(error => {
                    // handle error
                    console.log(error);
                    this.error = error;
                })
        });
    },
    handleUserDelete(){
         firebase.auth().currentUser.getIdToken(false).then( idToken=> {
            this.idtoken = idToken;
            axios.delete('http://localhost:56090/api/users/'+this.selectedUser.id,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*", 
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${this.idtoken}`
                }
            }).then(response => {
                    console.log(response);
                    let  msg = this.selectedUser.fname + " has been deleted";
                    this.$router.replace({ name: "Users", params: {msg:msg}})
                })
                .catch(error => {
                    console.log(error);
                    this.error = error;
                })
        });
    }
  },
  mounted(){
      if(this.selectedUser){
            this.fname =  this.selectedUser.fname;
            this.lname=  this.selectedUser.lname;
            this.address=this.selectedUser.address;
            this.email= this.selectedUser.email;
            this.gender = this.selectedUser.gender;
            this.phone=this.selectedUser.phone;
      }
      this.error = null;
      
  }
}
</script>