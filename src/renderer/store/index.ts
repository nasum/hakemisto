import Vue from 'vue'
import Vuex from 'vuex'

import Main, { MainState } from './pages/main'

Vue.use(Vuex)

export type RootState = {
  Main: MainState
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Main
  }
})