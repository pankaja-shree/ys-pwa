<template>
  <div class='slokas'>
    <h1>{{ msg }}</h1>
    <div v-for='sloka in slokas' :key='sloka.title'>
      <h3>{{sloka.title}}</h3>
      <h4>{{sloka.description}}</h4>
    </div>
  </div>
</template>

<script>
// import data from '../db.json';

export default {
  name: 'Slokas',
  data() {
    return {
      msg: 'Slokas of Yatiraja Saptati',
      slokas: [
        {
          imageUrl: 'http://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1507714088/cover1_qy3ovk.png',
          videoUrl: '#',
          title: 'Sloka 1',
          description: 'An array is a data structure that contains a group of elements. Typically these elements are all of the same data type, such as an integer or string. Arrays are commonly used in computer programs to organize data so that a related set of values can be easily sorted or searched.',
        },
        {
          imageUrl: 'http://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1507714088/cover2_e50jkt.jpg',
          videoUrl: '#',
          title: 'Sloka 2',
          description: 'Coding For Dummies is the perfect place to start! Explore the basics of HTML, CSS, JavaScript, Ruby, and Python and find out how to build great web applications.',
        },
        {
          imageUrl: 'http://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1507714088/cover3_tyyyre.jpg',
          videoUrl: '#',
          title: 'Sloka 3',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
      ],
    };
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
