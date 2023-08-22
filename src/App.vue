<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="wrapper">
      <NavBar></NavBar>
    </div>
  </header>
  <div class="container py-4">
    <RouterView />
  </div>
</template>

<script>
import {  RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    RouterView,NavBar
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
            this.$http.defaults.headers.common.Authorization = token
            const api = `${import.meta.env.VITE_APP_API}api/user/check`
            this.$http.post(api,this.user)
            .then((res) => {
                if (!res.data.success) {
                this.$router.push('/login')
                }
            })
  }
}
</script>
