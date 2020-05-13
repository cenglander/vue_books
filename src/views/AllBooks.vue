<template>
  <div class="all-books">
      <h1>8 Classic Childrens Books</h1>
      <BookFront title="This is the title" 
      author="This is the author"

      />

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import BookFront from '@/components/BookFront.vue'

export default {
  name: 'AllBooks',
  components: {
      BookFront
  }
}
</script>