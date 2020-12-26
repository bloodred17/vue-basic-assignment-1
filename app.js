const app = Vue.createApp({
  data() {
    return {
      name: 'Ankur',
      age: 25,
      favNum: Math.random(),
      val: 'Assignment 1',
      imageUrl: 'https://picsum.photos/300/200',
    }
  },
  methods: {
    favRandom() {
      return Math.random();
    },
  }
});

app.mount('#assignment');