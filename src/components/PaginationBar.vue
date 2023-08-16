<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ 'disabled' : !paginationBar.has_pre }" @click.prevent="prevPage(paginationBar.current_page)">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item" v-for="page in paginationBar.total_pages" :key="page"><a class="page-link" :class="{ 'active' : page === paginationBar.current_page }" href="#" @click.prevent="updatePage(page)">{{ page }}</a></li>
            <li class="page-item" :class="{ 'disabled' : !paginationBar.has_next}" @click.prevent="nextPage(paginationBar.current_page)">
              <a class="page-link">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
  props: ['paginationBar'],
  data () {
    return {
    }
  },
  methods: {
    updatePage (page) {
      this.$emit('emit-page', page)
    },
    prevPage (currentPage) {
      currentPage -= 1
      if (this.paginationBar.has_pre === false) {
        return
      }
      this.$emit('emit-prevpage', currentPage)
    },
    nextPage (currentPage) {
      currentPage += 1
      if (this.paginationBar.has_next === false) {
        return
      }
      this.$emit('emit-nextpage', currentPage)
    }
  }
}
</script>
