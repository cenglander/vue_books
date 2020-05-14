import Vue from 'vue'
import VueRouter from 'vue-router'
import AllBooks from '../views/AllBooks.vue'
import Book from '../views/Book.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'AllBooks',
    component: AllBooks
  },
  {
    path: '/books/:id',
    name: 'One Book',
    component: Book
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
