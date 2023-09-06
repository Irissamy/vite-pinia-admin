<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <ToastMessage :toast-msg="toastMessages"></ToastMessage>
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light fs-4">Pages /</span> Coupon 折扣碼</h4>
    <div class="card">
        <div class="card-header d-flex align-items-center">
            <h5 class="mb-0">Coupon 折扣碼</h5>
            <div class="ms-auto">
                <button class="btn btn-primary" type="button" @click.prevent="openModal(true)">建立新的優惠券</button>
            </div>
        </div>
        <div class="table-responsive text-nowrap">
            <table class="table">
                <thead class="table-light">
                    <tr>
                        <th>名稱</th>
                        <th>折扣百分比</th>
                        <th>到期日</th>
                        <th>是否啟用</th>
                        <th>編輯</th>
                    </tr>
                </thead>
                <tbody class="table-border-bottom-0">
                    <tr v-for="item in couponList" :key="item.id">
                        <td>{{ item.title }}</td>
                        <td>{{ item.percent }}%</td>
                        <td>{{ date(item.due_date) }}</td>
                        <td>
                            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
                            <span v-else class="text-muted">未啟用</span>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button class="btn btn-outline-primary btn-sm" @click.prevent="openModal(false,item)">編輯</button>
                                <button class="btn btn-outline-danger btn-sm" @click.prevent="deleteCoupon(item.id)">刪除</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <CouponModal ref="CouponModal" :coupon="currentCoupon"></CouponModal>
</template>

<script>
import { currency,date } from '@/methods/filterFn.js'
import CouponModal from '@/components/modal/CouponModal.vue'
import ToastMessage from '@/components/ToastMessage.vue'
import couponStore from '@/store/couponStore.js'
import { mapActions, mapState } from 'pinia'

export default {
    components: {
        CouponModal,ToastMessage
    },
    data() {
        return {
            currency,
            date,
            isNew: false,
            currentCoupon: {}
        }
    },
    computed: {
        ...mapState(couponStore,['couponList','isLoading','toastMessages'])
    },
    methods: {
        ...mapActions(couponStore,['getCoupon','deleteCoupon']),
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
