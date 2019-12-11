import { MutationTree, ActionTree, Module } from "vuex";
import { ipcRenderer } from "electron";

import { RootState } from "../../Index";

type FileType = {
  path: string;
  displayName: string;
  isFile: boolean;
  fileType: string;
  data: string;
};

export type ExplorerState = {
  currentPath: string;
  fileList: FileType[];
};

const state = (): ExplorerState => ({
  currentPath: "",
  fileList: []
});

const MUTATION_MAP = {
  SET_CURRENT_PATH: "SET_CURRENT_PATH",
  SET_FILE_LIST: "SET_FILE_LIST"
};

const actions: ActionTree<ExplorerState, RootState> = {
  initialize({ commit, dispatch }, path = "~/") {
    ipcRenderer.send("getFiles", path);
    ipcRenderer.on("receiveFiles", (event: Event, fileList: any[]) => {
      dispatch("setFileList", fileList);
    });
    commit(MUTATION_MAP.SET_CURRENT_PATH, "");
  },
  setFileList({ commit }, fileList) {
    commit(MUTATION_MAP.SET_FILE_LIST, fileList);
  },
  selectFolder({ commit }, path: string) {
    let absolutePath = "";
    if (path === undefined) {
      absolutePath = "~/";
    } else {
      absolutePath = "/" + path;
    }
    ipcRenderer.send("getFiles", absolutePath);
    commit(MUTATION_MAP.SET_CURRENT_PATH, absolutePath);
  },
  selectFile(_, path: string) {
    ipcRenderer.send("openFile", path);
  }
};

const mutations: MutationTree<ExplorerState> = {
  [MUTATION_MAP.SET_CURRENT_PATH](state: ExplorerState, path: string) {
    state.currentPath = path;
  },
  [MUTATION_MAP.SET_FILE_LIST](state: ExplorerState, fileList: FileType[]) {
    state.fileList = fileList;
  }
};

const Explorer = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions
};

export default Explorer;
