import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import Explorer, { ExplorerState } from './pages/explorer'

Vue.use(Vuex)

export type RootState = {
  Explorer: ExplorerState
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
  modules: {
    Explorer
  }
})