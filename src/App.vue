<template>
<div class="">
  
  <div class="container is-fullheight">
  <div class="is-flex is-info">
    <button
      @click="back"
      class="button is-success is-align-content-flex-start ml-3 mt-1"
    >
      Go back
    </button>
    
  </div>
  
  <div v-if="this.$cookie.getCookie('loggedin')" id="nav">
    <router-link to="/Asignaciones">Asignaciones</router-link> |
    <router-link to="/Graficas">Graficas</router-link> |
    <router-link to="/Conteo">Conteo</router-link> 
  </div>
  <div v-if="!this.$cookie.getCookie('loggedin')" id="nav2">
    <router-link to="/">Asignaciones</router-link> |
    <router-link to="/Login">Inicia sesion</router-link><br />
  </div>
  <router-view class="container is-desktop" />
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  data() {
    return {
      legajo: "",
    };
  },
};
</script>
<style>
body {
  /* background: #272727; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4476a8;
  /* background: #272727; */
}

#nav {
  padding: 30px;
}

#nav2 a,#nav a {
  font-weight: bold;
  color: #7090b1;
}

#nav2 a.router-link-exact-active,#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background-color: rgb(33, 43, 54);
  height: 100vh;
}
.is-asignacion{
  color:#89ffca !important;
  background:rgb(0, 86, 97) !important;
}
.is-asignacion th{
  color:aliceblue  !important;
}
.is-asignacion tbody tr:hover{
  background-color:rgb(0, 51, 58) !important;
}
table {
    border-collapse: collapse;
    width: 100%;
    /* border-color: #000; */
}
tr {
    border-bottom: 1px solid rgb(0, 225, 255) !important;
}

th {
  border-color:initial !important;
  border-bottom: 1px solid rgb(0, 225, 255) !important;
  border-top: 1px solid rgb(0, 225, 255) !important;
  text-align: left;  
    
}
</style>
