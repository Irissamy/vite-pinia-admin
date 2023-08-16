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
                        <button class="btn btn-outline-primary btn-sm" @click.prevent="openModal(false,item)">編輯</button>
                        <button class="btn btn-outline-danger btn-sm">刪除</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <CouponModal ref="CouponModal" :coupon="currentCoupon"></CouponModal>
</template>

<script>
import { currency,date } from '@/methods/filterFn.js'
import CouponModal from '@/components/modal/CouponModal.vue'
import couponStore from '@/store/couponStore.js'
import { mapActions, mapState } from 'pinia'

export default {
    components: {
        CouponModal
    },
    data() {
        return {
            currency,
            date,
            isLoading: false,
            isNew: false,
            currentCoupon: {}
        }
    },
    computed: {
        ...mapState(couponStore,['couponList'])
    },
    methods: {
        ...mapActions(couponStore,['getCoupon']),
        openModal(isNew,item){
            if(isNew) {
                this.isNew = isNew
                this.currentCoupon = {
                    is_enabled: 0, // 瀏覽器預設checkbox value，所以這邊先預設value避免空值
                    percent: 100,
                    due_date: new Date().getTime() / 1000,
                    isNew: this.isNew
                }
            } else {
                this.isNew = false
                this.currentCoupon = { ...item,isNew: this.isNew }
            }
            this.$refs.CouponModal.showModal()
        }
    },
    created() {
        this.getCoupon()
    }
}
</script>
