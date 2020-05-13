<template>
  <div class="book-front"> 
    <h3>{{ title }}</h3>
    <h5>{{ author }}</h5>
    

  </div>
</template>

<script>
export default {
  name: 'BookFront',
  props: {
    title: String,
    author: String,
    
  },
  
  methods: {
    //   console.log (this.$root.booksJson )
  }
}
</script>

<style scoped lang="scss">

div .book-front {
    width: 200px;
    height: 300px;
    background: lightskyblue;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1vw;
    margin: 1vw;

    h1 {
        font-size: 2rem;
    }
}
</style>
