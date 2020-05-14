<template>
  <div class="book-summary">
    <h1>{{ title }}</h1>

  </div>
</template>

<script>
export default {
  name: 'BookSummary',
  props: {
    title: String
  },
  
}
</script>

<style scoped lang="scss">

 div .book-summary {
      width: 400px;
      height: 600px;
      background: lightskyblue;

      display: flex;
      justify-content: center;
      padding: 1vw;
      margin: 1vw;
      
      h1 {
          font-size: 4rem;
      }
  }
</style>