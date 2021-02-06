<template>
  <div class="home">
    <div v-if="user.length">
      {{ user[0]["legajo"] }}
    </div>

    <div :class="{'is-loading': searchingLegajo}" class="column is-two-fifths has-text-left control ">
      
      <input
        v-on:keyup="run"
        class="input is-info is-normal pl-7"
        v-model="legajo"
        type="text"
      />
      <label id="inputLegajoTag" class="tag is-info is-light is-relative">Legajo</label>
    </div>
    
    <div>
      <table
        class="table table is-bordered is-hoverable is-narrow is-fullwidth"
      >
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
    </div>
    <article class="tags has-addons are-large are-rounded level-item mt-2">
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
      searchingLegajo: false,
    };
  },
  mounted() {
    this.run();
  },
  methods: {
    run() {
      if (this.legajo.length > 0) {
       
        if (this.checkLegajo(this.legajo)) {
           this.searchingLegajo = true;
          fetch(
            "http://" +
              window.location.hostname +
              ":8081/getalsea.php?legajo=" +
              this.legajo
          )
            .then((res) => res.json())
            .then((data) => ((this.user = data), (this.saveLegajo()), (this.searchingLegajo = false), ((this.legajoTag = this.legajo))))
            .catch((err) => {
              this.searchingLegajo = false
              this.legajoTag = "...";
              console.log(err)
            });

          // console.log();
        } else {
          this.legajoTag = "...";
          // console.log(this.legajo)
        }
      }
    },
    checkLegajo(ref) {
      if (/[a-zA-Z]/.test(ref.substring(0)) && ref.length > 5) {
        return true;
      } else if (/^[0-9]{5,10}$/.test(ref)) {
        return true;
      }
    },
    saveLegajo() {
      this.$store.commit("setLegajo", this.legajo);
      
    },
  },
};
</script>

<style scoped>
#inputLegajoTag {
  bottom: 33px;
  z-index: 1;
  left: 7px;
}
.pl-7{
  padding-left: 4.2rem !important;
}
.control.is-loading::after{
  top: 1.5em !important;
  right: 1.625em !important;
}
</style>