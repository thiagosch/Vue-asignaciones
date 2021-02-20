<template>
  <div>
    <div
      id="dias"
      class="mb-2 box-upper pb-3 pt-3 pl-2 pr-2 box mr-1 ml-1 columns is-mobile"
    >
      <div class="column">
        <template v-for="asignacion in diasList" :key="asignacion">
          <button
            v-bind:class="{ 'is-outlined': asignacion[1] !== selectedDate }"
            @click="selectGrafica(asignacion[1])"
            selected
            class="button mr-1 ml-1 mt-1 mb-1 is-small is-info graficasButtons"
            type="button"
          >
            {{ asignacion[0].substring(0, 2) }}<br />{{
              asignacion[0].slice(-5)
            }}
          </button>
        </template>
      </div>
      <div class="column is-one-fifth is-relative">
        <p class="tag is-medium tagDate">
          {{ dateToShow[0] }} <br />
          {{ dateToShow[1] }}
        </p>
      </div>
    </div>
    <div class="table-container">
      <table class="table is-narrow is-fullwidth is-asignacion">
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
          <template v-for="(asignacion, index) in onlyHoursArray" :key="index">
            <!-- v-if="checkAsignacion(asignacion,'horarios') -->
            <tr
              @click="selectRow(asignacion['legajo'])"
              v-bind:class="[
                {
                  'is-tr-selected': selectedRow.includes(asignacion['legajo']),
                },
                {
                  'has-background-info': accountLegajo == asignacion['legajo'],
                },
              ]"
            >
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
          </template>
        </tbody>
      </table>
    </div>
    <div class="">
      <h1 class="box is-inline-block mb-3">FRANCOS</h1>
    </div>
    <div class="table-container">
      <table class="table is-narrow is-fullwidth is-asignacion">
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
          <template v-for="(asignacion, index) in onlyOFF" :key="index">
            <!-- v-if="checkAsignacion(asignacion,'horarios') -->
            <tr
              @click="selectRow(asignacion['legajo'])"
              v-bind:class="[
                {
                  'is-tr-selected': selectedRow.includes(asignacion['legajo']),
                },
                {
                  'has-background-info': accountLegajo == asignacion['legajo'],
                },
              ]"
            >
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
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Graficas0: "",
      selectedDate: "",
      selectedGrafica: [],
      currentSort: "horaentrada",
      currentSortDir: "asc",
      onlyOFF: [],
      onlyHours: [],
      selectedRow: [],
      dateToShow: "",
      diasList: "",
    };
  },
  /////////////////////////////////////////////////////////////////
  props: ["accountLegajo", "listDias", "Graficas"],
  watch: {
    diasList: function (newVal, oldVal) {
      // watch it
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
      this.selectGrafica(newVal[0][1]);
    },
    Graficas: function (newVal, oldVal) {
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
      this.selectGrafica(this.diasList);
    },
  },
  /////////////////////////////////////////////////////////////////
  mounted() {
    this.selectGrafica(this.diasList);
  },
  /////////////////////////////////////////////////////////////////
  beforeMount() {},
  /////////////////////////////////////////////////////////////////
  afterUpdate() {},

  /////////////////////////////////////////////////////////////////
  methods: {
    selectGrafica(index) {
      this.selectedDate = index;
      this.selectedGrafica = this.Graficas[index];
      this.diasList = this.Graficas["diasList"];
      return this.diasList[0];
    },
    checkAsignacion(asignacion, mode) {
      if (mode == "OFF") {
      } else {
        if (asignacion["horaentrada"] == "OFF") {
          return false;
        } else if (asignacion["legajo"] == "Dia") {
          return false;
        } else {
          return true;
        }
      }
    },
    selectRow(row) {
      if (this.selectedRow.includes(row)) {
        this.selectedRow.splice(this.selectedRow.indexOf(row), 1);
      } else {
        this.selectedRow.push(row);
      }
      console.log(this.selectedRow);
    },
    debug() {
      console.log(this.selectedDate);
      console.log(this.diasList);
      console.log(this.diasList[0]);
    },
  },

  /////////////////////////////////////////////////////////////////
  computed: {
    debug1: function () {
      console.log(this.diasList[0]);
    },
    onlyHoursArray: function () {
      var onlyHours = this.selectedGrafica;
      this.onlyHours = [];
      this.onlyOFF = [];
      for (var asignacion in onlyHours) {
        if (onlyHours[asignacion]["horaentrada"] == "OFF") {
          this.onlyOFF.unshift(onlyHours[asignacion]);
        } else if (asignacion == "Dia") {
          this.dateToShow = [
            onlyHours["Dia"].substring(0, 2),
            onlyHours["Dia"].slice(-5),
          ];
        } else if (onlyHours[asignacion]["horaentrada"] !== "OFF") {
          this.onlyHours.unshift(onlyHours[asignacion]);
        }
      }
      return this.onlyHours;
    },
  },
};
</script>

<style>
.graficasButtons {
  padding: 17px !important;
  text-overflow: ellipsis;
}
.tagDate {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%);
  height: auto !important;
}
</style>