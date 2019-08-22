import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import Main, { MainState } from './pages/main'

Vue.use(Vuex)

export type RootState = {
  Main: MainState
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
  modules: {
    Main
  }
})