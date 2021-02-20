import { createStore } from 'vuex'

export default createStore({
    state: {
        legajo: '',
        accountLegajo: '',
        graficas: '{}',
    },
    getters: {

    },
    mutations: {
        setLegajo(state, value) {
            state.legajo = value
        },
        setGraficas(state, value) {
            state.graficas = value
        },
        setAccountLegajo(state, value) {
            state.legajo = value
        }
    },
    actions: {},
    modules: {}
})