<template>
  <div class="home">
    <h1>Asignaciones - THTST</h1>

    <div v-if="user.length">
      {{ user[0]["legajo"] }}
    </div>
    <button @click="test">test</button>
    <div class="column is-two-fifths">
      <input
        v-on:keyup="run"
        class="input is-info is-normal"
        v-model="legajo"
        type="text"
      />
    </div>

    <table class="table table is-bordered is-hoverable is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Entrada</th>
          <th>Salida</th>
          <th>Tienda</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(asignacion, index) in user.asignaciones" :key="index">
          <td class="is-size-7-mobile">
            {{
              asignacion.fecha.substring(0, 3) +
              " " +
              asignacion.fecha.slice(-5)
            }}
          </td>

          <td>
            {{ asignacion.horaEntrada }}
          </td>
          <td>
            {{ asignacion.horaSalida }}
          </td>
          <td class="is-size-7-mobile">
            {{ asignacion.tienda }}
          </td>
        </tr>
      </tbody>
    </table>
    <article class="tags has-addons are-large are-rounded level-item">
      <p class="tag">Legajo:</p>
      <p class="tag is-info">{{ legajoTag }}</p>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {
    return {
      user: [],
      id: "",
      color: "",
      legajo_user: "",
      userid: "",
      legajo: this.$store.state.legajo,
      legajoTag: "",
    };
  },
  mounted() {
    this.run();
  },
  methods: {
    run() {
      console.log( decodeURIComponent(document.cookie))
      if (this.legajo.length > 0) {
        this.legajoTag = this.legajo;
        if(this.checkLegajo(this.legajo)){
        fetch("http://192.168.1.4/getalsea.php?legajo=" + this.legajo)
          .then((res) => res.json())
          .then(
            (data) => (
              (this.user = data), this.saveLegajo()
            )
          )
          .catch((err) => {
            this.legajoTag = "...";
          });
          
       // console.log();
      } else {
        this.legajoTag = "...";
      }}
    },
    checkLegajo(ref) {
      if(/[a-zA-Z]/.test(ref.substring(0)) && ref.length > 5){
        return true;
      }else if(/^[0-9]{5,10}$/.test(ref)){
        return true;
      }},
      saveLegajo(){
        this.$store.commit("setLegajo", this.legajo)
      }
  },
};
</script>

<style>
</style>