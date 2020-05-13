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

// methods: {
//   getTitle(id) {
//     return this.books.find(title => title.id == id)
//   }
// },

  router,
  render: h => h(App)
}).$mount('#app')
