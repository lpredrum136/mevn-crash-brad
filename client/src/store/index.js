import Vuex from 'vuex';
import Vue from 'vue';
import posts from './modules/posts';
import errors from './modules/errors';
// Load Vuex
Vue.use(Vuex);

// Create store
const myStore = new Vuex.Store({
  modules: {
    posts,
    errors
  }
});

export default myStore;
