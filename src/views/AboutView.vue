<template>
  <div class="about">
    <div class="user">
      <h3>隨機使用者</h3>
      <img :src="user.picture.medium" class="user__img" />
      <div class="user-info">
        <h3 class="user-info__name">{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</h3>
        <p>Gender：{{ user.gender }}</p>
        <p>Age：{{ user.dob.age }}</p>
        <p>Birth：{{ $dayjs(user.dob.date).format('YYYY-MM-DD') }}</p>
        <p>Location City：{{ user.location.city }}</p>
        <p>Phone：{{ user.phone }}</p>
        <p>Email：{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutView',
  data () {
    return {
      user: {
        dob: {},
        location: {},
        picture: {},
        name: {}
      }
    }
  },
  methods: {
    getUser(){
      const api = import.meta.env.VITE_PATH
      this.$http.get(api)
        .then((res) => {
          if(res.data.results){
            this.user = res.data.results[0]
          } 
        })
    }
  },
  created () {
    this.getUser()
  }
}
</script>

