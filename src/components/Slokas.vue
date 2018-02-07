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
      <video :src="selectedSloka.videoUrl" controls></video>
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
          videoUrl: '/static/sloka01.mp4',
          title: 'Sloka 1',
          description: 'An array is a data structure that contains a group of elements. Typically these elements are all of the same data type, such as an integer or string. Arrays are commonly used in computer programs to organize data so that a related set of values can be easily sorted or searched.',
        },
        {
          videoUrl: '/static/sloka02.mp3',
          title: 'Sloka 2',
          description: 'Coding For Dummies is the perfect place to start! Explore the basics of HTML, CSS, JavaScript, Ruby, and Python and find out how to build great web applications.',
        },
        {
          videoUrl: '/static/sloka03.mp3',
          title: 'Sloka 3',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka04.mp3',
          title: 'Sloka 4',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka05.mp3',
          title: 'Sloka 5',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka06.mp3',
          title: 'Sloka 6',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka07.mp3',
          title: 'Sloka 7',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka08.mp3',
          title: 'Sloka 8',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka09.mp3',
          title: 'Sloka 9',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka10.mp3',
          title: 'Sloka 10',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka11.mp3',
          title: 'Sloka 11',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka12.mp3',
          title: 'Sloka 12',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka13.mp3',
          title: 'Sloka 13',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka14.mp3',
          title: 'Sloka 14',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka15.mp3',
          title: 'Sloka 15',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka16.mp3',
          title: 'Sloka 16',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka17.mp3',
          title: 'Sloka 17',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka18.mp3',
          title: 'Sloka 18',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka19.mp3',
          title: 'Sloka 19',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka20.mp3',
          title: 'Sloka 20',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka21.mp3',
          title: 'Sloka 21',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka22.mp3',
          title: 'Sloka 22',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka23.mp3',
          title: 'Sloka 23',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka24.mp3',
          title: 'Sloka 24',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka25.mp3',
          title: 'Sloka 25',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka26.mp3',
          title: 'Sloka 26',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka27.mp3',
          title: 'Sloka 27',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka28.mp3',
          title: 'Sloka 28',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka29.mp3',
          title: 'Sloka 29',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka30.mp3',
          title: 'Sloka 30',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka31.mp3',
          title: 'Sloka 31',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka32.mp3',
          title: 'Sloka 32',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka33.mp3',
          title: 'Sloka 33',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka34.mp3',
          title: 'Sloka 34',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka35.mp3',
          title: 'Sloka 35',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka36.mp3',
          title: 'Sloka 36',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka37.mp3',
          title: 'Sloka 37',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka38.mp3',
          title: 'Sloka 38',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka39.mp3',
          title: 'Sloka 39',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka40.mp3',
          title: 'Sloka 40',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka41.mp3',
          title: 'Sloka 41',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka42.mp3',
          title: 'Sloka 42',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka43.mp3',
          title: 'Sloka 43',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka44.mp3',
          title: 'Sloka 44',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka45.mp3',
          title: 'Sloka 45',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka46.mp3',
          title: 'Sloka 46',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka47.mp3',
          title: 'Sloka 47',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka48.mp3',
          title: 'Sloka 48',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka49.mp3',
          title: 'Sloka 49',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka50.mp3',
          title: 'Sloka 50',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka51.mp3',
          title: 'Sloka 51',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka52.mp3',
          title: 'Sloka 52',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka53.mp3',
          title: 'Sloka 53',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka54.mp3',
          title: 'Sloka 54',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka55.mp3',
          title: 'Sloka 55',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka56.mp3',
          title: 'Sloka 56',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka57.mp3',
          title: 'Sloka 57',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka58.mp3',
          title: 'Sloka 58',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka59.mp3',
          title: 'Sloka 59',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka60.mp3',
          title: 'Sloka 60',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka61.mp3',
          title: 'Sloka 61',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka62.mp3',
          title: 'Sloka 62',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka63.mp3',
          title: 'Sloka 63',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka64.mp3',
          title: 'Sloka 64',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka65.mp3',
          title: 'Sloka 65',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka66.mp3',
          title: 'Sloka 66',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka67.mp3',
          title: 'Sloka 67',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka68.mp3',
          title: 'Sloka 68',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka69.mp3',
          title: 'Sloka 69',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka70.mp3',
          title: 'Sloka 70',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka71.mp3',
          title: 'Sloka 71',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka72.mp3',
          title: 'Sloka 72',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka73.mp3',
          title: 'Sloka 73',
          description: 'For 10 years, Harry lives in the cupboard under the stairs and is subjected to cruel mistreatment by Aunt Petunia, Uncle Vernon and their son Dudley. On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry.',
        },
        {
          videoUrl: '/static/sloka74.mp3',
          title: 'Sloka 74',
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
