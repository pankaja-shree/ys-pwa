<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2><router-link to="/slokas">View all Slokas</router-link></h2>
    <img src="../assets/desikar.png" alt="Vue.js PWA">
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
