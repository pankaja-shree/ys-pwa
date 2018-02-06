<template>
  <div class="slokas">
    <h1>{{ msg }}</h1>
    <div v-for="sloka in slokas" :key="sloka.title">
      <h3>{{sloka.title}}</h3>
      <h4>{{sloka.description}}</h4>
    </div>
  </div>
</template>

<script>
import data from '../db.json';

export default {
  name: 'Slokas',
  data() {
    return {
      msg: 'Slokas of Yatiraja Saptati',
      slokas: [],
    };
  },
  created() {
    this.slokas = data;
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
