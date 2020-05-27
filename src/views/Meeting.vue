<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-7">
        <AddUser :userauth="user" />
      </div>
    </div>
  </div>
</template>
<script>
import AddUser from "@/components/AddUser.vue";
export default {
  name:"meeting",
  props: ["user"],
  components: {
    AddUser
  }
}
</script>>
