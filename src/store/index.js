import { createStore } from 'vuex'

export default createStore({
    state: {
        legajo: '00000'
    },
    getters: {

    },
    mutations: {
        setLegajo(state, value) {
            state.legajo = value
        }
    },
    actions: {},
    modules: {}
})