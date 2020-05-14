<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">All Books</router-link>|

    </div>

    <router-view />

  </div>
</template>


<script>
export default {
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding: 2vh;

  h1 {
    font-size: 2rem;
    padding: 2vh 2vh;
    margin: 3vh 4vh;
  }
  h3, h5 {
    padding: 1vh;
    margin: 0;
  }
  
}

</style>
