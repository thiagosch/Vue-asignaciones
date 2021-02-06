<template>
  <div>
    <h3>Pagina no encontrada!</h3>
    <h4>Posiblemente esta pagina fue eliminada.</h4>
    <h5>uri: {{ uri }}</h5>
  </div>
</template>

<script>
export default {
    data(){
        return{
            uri: this.$route.path
        }
    },
    methods:{
        pageuri(){
            console.log(this.$route.path)
        }
    }
};
</script>

<style scoped>
div {
  color: red;
}
</style>