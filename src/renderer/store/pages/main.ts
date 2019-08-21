import { MutationTree, ActionTree, Module } from 'vuex'
import { ipcRenderer } from 'electron'

import { RootState } from '../index'

type FileType = {
  path: string,
  displayName: string,
  isFile: boolean,
  fileType: string,
  data: string
}

export type MainState = {
  fileList: FileType[]
}

const state = ():MainState => ({
  fileList: []
})

const actions: ActionTree<MainState, RootState> = {
  initialize({ dispatch }){
    ipcRenderer.send('getFiles')
    ipcRenderer.on('receiveFiles', (event: Event, fileList: any[]) => {
      dispatch('setFileList', fileList)
    })
  },
  setFileList({ commit }, fileList) {
    commit('setFileList', fileList)
  },
  selectFolder(_, path) {
    ipcRenderer.send('getFiles', path)
  }
}

const mutations: MutationTree<MainState> = {
  setFileList(state: MainState, fileList:FileType[]) {
    state.fileList = fileList
  }
}


const Main = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions
}

export default Main