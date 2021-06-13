/* global Vue */

const app = new Vue({
  el: '#app',
  data: {
    currentImageUrl: null,
    favourites: []
  },
  methods: {
    loadImage: async function() {
      const response = await fetch("https://picsum.photos/200/300/");
      const asJson = await response.json();
      this.currentImageUrl = asJson.message;
      console.log(this.currentImageUrl);
    },
    addFave: function() {
      if (!this.favourites.includes(this.currentImageUrl)) {
         this.favourites.push(this.currentImagegUrl);
      }
      this.loadImage();
    },
    removeFave: function(image) {
      this.favourites = this.favourites.filter(item => item !== null);
    }
  },

  created() {
    this.loadDog();
  }
});