<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Iris & Amy</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about" class="nav-link">About</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/product" class="nav-link">Product</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/order" class="nav-link">Order</RouterLink>
                    </li>
                </ul>
                <div class="nav-item dropdown pe-3">
                    <RouterLink to="/login" class="btn btn-outline-success me-2">登入</RouterLink>
                    <button class="btn btn-outline-success" type="button" @click.prevent="logout">登出</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';


export default {
    name:'NavBar',
    components: {
        RouterLink
    },
    methods: {
        logout () {
            const api = `${import.meta.env.VITE_APP_API}logout`
            this.$http.post(api, this.user)
                .then(() => {
                    this.$router.push('/login')
                })
    }
    }
}
</script>
