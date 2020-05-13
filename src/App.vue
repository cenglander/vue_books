<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">All Books</router-link>|
      <router-link to="/one_book">One Book</router-link>

    </div>

    <router-view />

  </div>
</template>


<script>
export default {
  // computed: {  
  //   books() {
  //     return this.$root.booksJson.books
  //   }
  // }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
