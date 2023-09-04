<template>
  <RouterView />
</template>

<script>
import {  RouterView } from 'vue-router'


export default {
  components: {
    RouterView
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
