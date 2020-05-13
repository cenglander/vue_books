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
  }
}
</script>

<style scoped lang="scss">

div .book-summary {
    width: 200px;
    height: 300px;
    background: cadetblue;
    h1 {
        font-size: 2rem;
    }
}
</style>