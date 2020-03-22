import axios from 'axios';
import errors from './errors';

const url = 'api/posts';

const state = {
  posts: []
};

const getters = { allPosts: state => state.posts };

const actions = {
  async fetchPosts({ commit }) {
    try {
      const response = await axios.get(url);

      commit('setPosts', response.data);
    } catch (error) {
      console.log(error.response.data);
      errors.actions.returnErrors({ commit }, error.response.data);
    }
  },
  async addPost({ commit }, text) {
    try {
      const response = await axios.post(url, { text });
      commit('newPost', response.data);
    } catch (error) {
      console.log(error.message);
      errors.actions.returnErrors({ commit }, error.response.data);
    }
  },
  async deletePost({ commit }, id) {
    try {
      await axios.delete(`${url}/${id}`);

      commit('removePost', id);
    } catch (error) {
      console.log(error.message);
      errors.actions.returnErrors({ commit }, error.response.data);
    }
  }
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  newPost: (state, post) => state.posts.unshift(post),
  removePost: (state, id) =>
    (state.posts = state.posts.filter(post => post._id !== id))
};

export default { state, getters, actions, mutations };
