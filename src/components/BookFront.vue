<template>
  <div class="book-front"
    v-bind:style="style"
    @click="showThisBook()">  
    <h3>{{ title }}</h3>
    <h5>{{ author }}</h5>

  </div>
</template>

<script>
export default {
  name: 'BookFront',
  props: {
    bookId: Number,
    title: String,
    author: String,
    bgColor: String,
    
  },
  computed: {
    style() {
      //return 'background-color: ' + this.bgColor;
      return 'background-image: linear-gradient(to top right, ' + this.bgColor + ' , white);'
    }
  },
  
  methods: {
    showThisBook() {
      console.log(this.bookId)
    }

  }
}
</script>

<style scoped lang="scss">


</style>
