<template>
    <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
        <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
            <i class="bi bi-menu bi-sm"></i>
        </a>
        </div>

        <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            <!-- Search -->
            <div class="navbar-nav align-items-center">
            <div class="nav-item d-flex align-items-center">
                <i class="bi bi-search fs-4 lh-0"></i>
                <input type="text" class="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search...">
            </div>
            </div>
            <!-- /Search -->

            <ul class="navbar-nav flex-row align-items-center ms-auto">
                <!-- User -->
                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                    <a v-if="isLogin" class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <div class="avatar avatar-online">
                            <img src="../assets/image/avatars/vv.jpeg" alt="" class="w-10 h-auto rounded-circle">
                        </div>
                    </a>
                    <RouterLink to="/login" v-else>登入</RouterLink>
                    <ul v-if="isLogin" class="dropdown-menu dropdown-menu-end">
                        <li>
                            <a class="dropdown-item" href="javascript:void(0);">
                            <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                <div class="avatar avatar-online">
                                    <img src="../assets/image/avatars/vv.jpeg" alt="" class="w-px-40 h-auto rounded-circle">
                                </div>
                                </div>
                                <div class="flex-grow-1">
                                <span class="fw-semibold d-block">IrisAmy</span>
                                <small class="text-muted">Admin</small>
                                </div>
                            </div>
                            </a>
                        </li>
                        <li>
                            <div class="dropdown-divider"></div>
                        </li>
                        <li>
                            <a class="dropdown-item" href="javascript:void(0);">
                            <i class="bi bi-user me-2"></i>
                            <span class="align-middle">My Profile</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="javascript:void(0);">
                            <i class="bi bi-cog me-2"></i>
                            <span class="align-middle">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="javascript:void(0);">
                            <span class="d-flex align-items-center align-middle">
                                <i class="flex-shrink-0 bi bi-credit-card me-2"></i>
                                <span class="flex-grow-1 align-middle">Billing</span>
                                <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                            </span>
                            </a>
                        </li>
                        <li>
                            <div class="dropdown-divider"></div>
                        </li>
                        <li>
                            <a class="dropdown-item" href="javascript:void(0);" @click.prevent="logout">
                                <i class="bi bi-power-off me-2"></i>
                                <span class="align-middle">登出</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <!--/ User -->
            </ul>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name:'SearchBar',
    data() {
        return {
            isLogin: false
        }
    },
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
    },
    created() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
            this.$http.defaults.headers.common.Authorization = token
            const api = `${import.meta.env.VITE_APP_API}api/user/check`
            this.$http.post(api,this.user)
            .then((res) => {
                if (res.data.success) {
                    this.isLogin = true
                } else {
                    this.isLogin = false
                }
            })
    }
}
</script>