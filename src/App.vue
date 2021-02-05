<template>
<div class="is-flex ">
  <button @click="back" class="button is-success is-align-content-flex-start ml-3 mt-1">Go back</button>
</div>
  <div id="nav">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/Login">Inicia</router-link><br />
    
  </div>
   <div id="nav2">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/Login">Inicia</router-link><br />
    
  </div>
  <router-view class="container is-desktop"/>
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

#nav a {
  font-weight: bold;
  color: #7090b1;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
