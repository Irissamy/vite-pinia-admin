<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <AsideBar></AsideBar>
      <div class="layout-page">
        <SearchBar></SearchBar>
        <div class="content-wrapper">
          <div class="container-xxl flex-grow-1 content">
            <RouterView />
          </div>
        </div>   
      </div>
    </div>
  </div>
</template>

<script>
import {  RouterView } from 'vue-router'
import AsideBar from '@/components/AsideBar.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  components: {
    RouterView,AsideBar,SearchBar
  }
}
</script>
