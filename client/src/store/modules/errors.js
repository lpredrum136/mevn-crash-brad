const state = {
  msg: ''
};

const getters = { allErrors: state => state.msg };

const actions = {
  returnErrors({ commit }, msg) {
    commit('getErrors', msg);
  }
};

const mutations = {
  getErrors: (state, msg) => (state.msg = msg)
};

export default { state, getters, actions, mutations };
