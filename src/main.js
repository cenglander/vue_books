import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MY_JSON from './assets/childrensbooks.json'

Vue.config.productionTip = false

new Vue({

  data() { return {
    booksJson: MY_JSON,
  
  }
},

methods: {
  getBook(bookId) {
    return this.booksJson.books.find(book => book.id == bookId)
  },
  getAllBooks() {
    return this.booksJson.books
  }
},

  router,
  render: h => h(App)
}).$mount('#app')
