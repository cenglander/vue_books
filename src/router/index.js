import Vue from 'vue'
import VueRouter from 'vue-router'
import AllBooks from '../views/AllBooks.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'AllBooks',
    component: AllBooks
  },
  {
    path: '/one_book',
    name: 'One Book',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Book.vue')
  }

  // {
  //   dynamic routing with bookId v-on:click
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
