<template>
{{name}} {{ age }}
<article v-if="error" class="message">
  <div class="message-header">
    <p>Error</p>
  </div>
  <div class="message-body">
   Hubo un error al recibir los datos:<br />
  <span class="has-text-danger">{{error}} </span>
   <br />
   <span class="has-text-primary"> Por favor recarga la pagina, si el problema persiste, envia un mail:</span>
  </div>
</article>
  <div class="">
    

    <input type="text" placeholder="Legajo" v-model="accountLegajo" />
    <button @click="setAccountLegajo">Set</button>
    <div class="container is-fullheight">
      <div class="is-flex is-info">
        <button
          @click="back"
          class="button is-success is-align-content-flex-start ml-3 mt-1 is-small"
        >
          <span>&#60;---</span>
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
      <div class="container is-desktop">
        <router-view :accountLegajo="accountLegajo" :listDias="listDias" :Graficas="Graficas" />
      </div>
    </div>
  </div>
  <button @click="persist">Save</button>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },

    setAccountLegajo() {
      console.log(this.accountLegajo);
      this.$store.commit("setAccountLegajo", this.accountlegajo);
      this.$cookie.setCookie("accountLegajo", this.accountLegajo);
    },
    async getData() {
      var url = "http://" + window.location.hostname + ":8081";
      var uri = "/php/getJSON.php";
      var requests = "?directory=/"+this.local+"/data/diasasignadoslist.json";
      // '&getRequests=[["local", "urquiza"]]';

      var xamppServer = url + uri + requests;

      const res = await fetch(xamppServer);
      
      try {
        const data = await res.json();
        this.listDias = data;
         this.getDatadb()
         
      } catch (e) {
        console.log(e);
        this.error = e;
      }
    },
    async getDatadb() {
      var url = "http://" + window.location.hostname + ":8081";
      var uri = "/php/get_db_data.php";
      var requests = "?diasList="+this.listDias;

      var xamppServer = url + uri + requests;

      const res = await fetch(xamppServer);
      try {
        console.log('data')
        const data = await res.json();
        this.Grafica = data;
        console.log('data')
        console.log(this.Grafica)
        this.$store.commit("setGraficas", this.Grafica);
        localStorage.graficas = JSON.stringify(this.Grafica);
        this.Graficas = this.Grafica
        // this.
      } catch (e) {
        console.log(e);
        this.error = e;
      }
    },
    persist() {
      localStorage.name = 'age12';
      localStorage.age = 'name12';
      console.log('now pretend I did more stuff...');
    }
  },
  data() {
    return {
      legajo: "",
      accountLegajo: "",
      listDias: "",
      error: "",
      local: "urquiza",
      accountColorTheme: 'light',
      age: '',
      name: '',
      Graficas: JSON.parse(localStorage.graficas),//JSON.parse(this.$store.state.graficas),
    };
  },
  mounted() {
    var xamppServer = "http://" + window.location.hostname + ":8081";
    console.log("mount");
    this.accountLegajo = this.$cookie.getCookie("accountLegajo");
    $.post(
      xamppServer + "/php/get_db_data.php",
      {
        database: "graficas",
      },
      function (response) {
        // console.log(JSON.parse(response));
      },
      
    );
     if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.age) {
      this.age = localStorage.age;
    }
  },
  beforeMount() {
    this.getData();
  },
  watch:{
    localStorage: function(newVal, oldVal) {
      // watch it
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
      this.selectGrafica(newVal[0][1]);
    },
  }
};

// #fcfcfc
// #9e4bf6
// #ab6ce6
// #b88dd7
// #c5aec8
</script>
<style>
:root {
  --text: #090b0f;
  --textGeneral: #9e4bf6;
  --textSecondary: #161e27;
  --backgroundPage: #3e7ebc;
  --background: #054b91;
  --backgroundBoxes: rgba(247, 247, 247, 0.877);
}
body {
  /* background: #272727; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  background: var(--backgroundPage);
  /* background: #272727; */
}

#nav {
  padding: 30px;
}

#nav2 a,
#nav a {
  font-weight: bold;
  color: #b1b1b1;
}

#nav2 a.router-link-exact-active,
#nav a.router-link-exact-active {
  color: #ffffff;
  /* text-decoration:overline dashed; */
}
body {
  background-color: var(--backgroundPage);
  height: 100vh;
}
.is-asignacion {
  color: var(--text) !important;
  background: var(--backgroundBoxes) !important;
}

.box-upper {
  background: var(--backgroundBoxes) !important;
}
.is-asignacion th {
  color: var(--textSecondary) !important;
}

.is-tr-selected {
  background-color: #fcfcfc !important;
}
.is-asignacion tbody tr:hover {
  color: green !important;
  border-bottom: 1px solid green !important;
}

table {
  border-collapse: collapse;
  width: 100%;
  /* border-color: #000; */
}
tr {
  border-bottom: 1px solid var(--backgroundPage) !important;
}

th {
  border-color: initial !important;
  border-bottom: 1px solid var(--backgroundPage) !important;
  border-top: 1px solid var(--backgroundPage) !important;
  text-align: left;
}
td {
  border-bottom: 1px solid var(--backgroundPage) !important;
}
</style>
