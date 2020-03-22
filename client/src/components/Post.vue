<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <!-- CREATE POST HERE -->
    <div class="create-post">
      <label for="create-post">Say something...</label>
      <input type="text" id="create-post" v-model="text" placeholder="Create a post" />
      <button @click="createPost">Post</button>
    </div>
    <hr />
    <p class="error" v-if="allErrors">{{allErrors}}</p>
    <div class="posts-container">
      <div
        class="post"
        v-for="(post, index) in allPosts"
        :key="post._id"
        @dblclick="deletePost(post._id)"
      >
        {{moment(post.date).format('dddd D MMM YYYY')}}
        <p class="text">{{post.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// Connect to Vuex
import { mapGetters, mapActions } from "vuex";
import moment from "moment";

export default {
  name: "Post",
  data() {
    return {
      text: ""
    };
  },
  computed: mapGetters(["allPosts", "allErrors"]),
  methods: {
    ...mapActions(["fetchPosts", "addPost", "deletePost"]),
    moment() {
      return moment();
    },
    createPost() {
      this.addPost(this.text);
    }
  },
  created() {
    this.fetchPosts();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
