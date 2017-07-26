<template>
  <div>
    <vheader></vheader>
  </div>
</template>
<script>
import header from '../components/header'
import api from '../api/index'
export default {
  name: 'index',
  components: {
    vheader: header,
  },
  computed: {
    bookList() {
      return this.$store.state.bookList;
    }
  },
  created() {
    
  },
  methods: {
    getBookList() {
       this.axios.get(api.get_book_details())
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

