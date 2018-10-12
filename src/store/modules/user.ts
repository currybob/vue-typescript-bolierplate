import { Module } from 'vuex';
interface IState {
  isLogin?: boolean;
}

const namespaced = false;
const state: IState = {
  isLogin: false,
};
const getters = {};
const mutations = {
  changeLogin(state: IState): void {
    state.isLogin = !state.isLogin;
  },
};
const actions = {};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
} as Module<IState, any>;
