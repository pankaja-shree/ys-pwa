<template>
  <div class='slokas'>
    <h1>{{ msg }}</h1>
    <select v-model="selectedSloka">
      <option disabled value="">Please select one</option>
      <option v-for='sloka in slokas' :key='sloka.title' v-bind:value='sloka'>{{sloka.title}}</option>
    </select>
    <section>
      Playing: {{ selectedSloka.title }}
      <p>{{ selectedSloka.description }}</p>
      <video width="320" height="240" controls>
        <source :src="selectedSloka.videoUrl" type="video/mp4">
      Your browser does not support the video tag.
      </video>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Slokas',
  data() {
    return {
      msg: 'Slokas of Yatiraja Saptati',
      selectedSloka: '',
      slokas: [
        {
          videoUrl: '../assets/sloka01.mp4',
          title: 'Sloka 1',
          description: 'An array is a data structure that contains a group of elements. Typically these elements are all of the same data type, such as an integer or string. Arrays are commonly used in computer programs to organize data so that a related set of values can be easily sorted or searched.',
        },
        {
          videoUrl: '../assets/sloka02.mp3',
          title: 'Sloka 2',
          description: 'Coding For Dummies is the perfect place to start! Explore the basics of HTML, CSS, JavaScript, Ruby, and Python and find out how to build great web applications.',
        },
        {
          videoUrl: '../assets/sloka03.mp3',
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
