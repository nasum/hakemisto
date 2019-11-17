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

export type ExplorerState = {
  currentPath: string
  fileList: FileType[]
}

const state = (): ExplorerState => ({
  currentPath: '',
  fileList: []
})

const actions: ActionTree<ExplorerState, RootState> = {
  initialize({ dispatch }, path = "~/") {
    ipcRenderer.send('getFiles', path)
    ipcRenderer.on('receiveFiles', (event: Event, fileList: any[]) => {
      dispatch('setFileList', fileList)
    })
  },
  setFileList({ commit }, fileList) {
    commit('setFileList', fileList)
  },
  selectFolder({ commit }, path: string) {
    let absolutePath = ''
    if (path === undefined) {
      absolutePath = '~/'
    } else {
      absolutePath = '/' + path
    }
    ipcRenderer.send('getFiles', absolutePath)
    commit('setCurrentPath', absolutePath)
  }
}

const mutations: MutationTree<ExplorerState> = {
  setCurrentPath(state: ExplorerState, path: string) {
    state.currentPath = path
  },
  setFileList(state: ExplorerState, fileList: FileType[]) {
    state.fileList = fileList
  }
}


const Explorer = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions
}

export default Explorer