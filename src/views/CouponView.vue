<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="text-end">
        <button class="btn btn-primary" type="button" @click.prevent="openModal(true)">建立新的優惠券</button>
    </div>
    <table class="table mt-4">
        <thead>
            <tr>
                <th>名稱</th>
                <th>折扣百分比</th>
                <th>到期日</th>
                <th>是否啟用</th>
                <th>編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in couponList" :key="item.id">
                <td>{{ item.title }}</td>
                <td>{{ item.percent }}%</td>
                <td>{{ date(item.due_date) }}</td>
                <td>
                    <span v-if="item.is_enabled === 0" class="text-success">啟用</span>
                    <span v-else class="text-muted">未啟用</span>
                </td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-outline-primary btn-sm" @click.prevent="editCoupon(item,false)">編輯</button>
                        <button class="btn btn-outline-danger btn-sm">刪除</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { currency,date } from '@/methods/filterFn.js'

export default {
    data() {
        return {
            currency,
            date,
            isLoading: false,
            couponList: {},
        }
    },
    computed: {
        
    },
    methods: {
        getCoupon(page = 1) {
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/coupons/?page=${page}`
            this.isLoading = true
            this.$http.get(api)
                .then((res) => {
                    this.couponList = res.data.coupons
                    this.isLoading = false
                })
        }
    },
    created() {
        this.getCoupon()
    }
}
</script>
