new Vue({
    el: '#app',
    data: {
      newAnimal: '',
      animals: ['Hare', 'Wolf', 'Tiger', 'Bear', 'Squirrel'],
  },
  methods: {
      addAnimal: function () {
        this.animals.push(this.newAnimal)
      }
    }
});