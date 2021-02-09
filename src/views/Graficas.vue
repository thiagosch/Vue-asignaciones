<template>
  <div>
    <div id="dias" class="mb-2 has-background-white pb-3 pt-3 pl-2 pr-2 is-block box mr-1 ml-1">
    
      <template v-for="(asignacion, index) in Graficas0" :key="index">
        <button 
          @click="selectGrafica(index)" selected
          class="button mr-1 ml-1 mt-1 mb-1 is-small is-info is-outlined graficasButtons"
          type="button"
        >
          {{ asignacion.Dia.nombre.substring(0, 2) }}<br />{{ asignacion.Dia.nombre.slice(-5) }}
        </button>
      </template>
    </div>
    <table class="table is-hoverable is-narrow is-fullwidth is-asignacion">
      <thead>
        <tr>
          <th>Legajo</th>
          <th>Entrada</th>
          <th>Salida</th>
          <th>Nombre</th>
          <th>Horas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(asignacion, index) in sortedAsig" :key="index">
            
          <td class="is-size-7-mobile">
            {{ asignacion["legajo"] }}
            
          </td>
          <td>
            {{ asignacion["horaentrada"] }}
          </td>
          <td>
            {{ asignacion["horasalida"] }}
          </td>
          <td class="is-size-7-mobile">
            {{ asignacion["nombre"] }}
          </td>
          <td class="is-size-7-mobile">
            {{ asignacion["legajo"] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      Graficas: JSON.parse(this.$store.state.graficas)[1],
      Graficas0: JSON.parse(this.$store.state.graficas)[0],
      selectedDate: "02 08",
      selectedGrafica: [],
      currentSort: "horaentrada",
      currentSortDir: "asc",
    };
  },
  mounted() {
    this.selectedGrafica = this.Graficas["02 08"];
  },
  methods: {
       sort:function(s) {
    //if s == current sort, reverse
    if(s === this.currentSort) {
      this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
    }
    this.currentSort = s;
  },selectGrafica(index){
          console.log(index)
          this.selectedGrafica = this.Graficas[index]
      },
  },
  computed:{
      
  sortedAsig:function() {
    return this.selectedGrafica.sort((a,b) => {
      let modifier = 1;
      if(this.currentSortDir === 'desc') modifier = -1;
      if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
      if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
      return 0;
    });
  }
}
};
</script>

<style>
.graficasButtons{
    padding: 17px  !important;
}
</style>