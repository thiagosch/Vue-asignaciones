import { createStore } from 'vuex'

export default createStore({
    state: {
        legajo: '',
        graficas: '',
    },
    getters: {

    },
    mutations: {
        setLegajo(state, value) {
            state.legajo = value
        },
        setGraficas(state, value) {
            state.graficas = value
        }
    },
    actions: {},
    modules: {}
})