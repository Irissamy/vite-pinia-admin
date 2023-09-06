<template>
    <div class="modal fade" id="cuponModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">優惠卷</h5>
            <button type="button" class="btn-close"
                    data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="mb-3">
                <label for="title">標題</label>
                <input type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="couponInfo.title">
            </div>
            <div class="mb-3">
                <label for="coupon_code">優惠碼</label>
                <input type="text" class="form-control" id="coupon_code" placeholder="請輸入優惠碼" v-model="couponInfo.code">
            </div>
            <div class="mb-3">
                <label for="due_date">到期日</label>
                <input type="date" class="form-control" id="due_date" v-model="due_date">
            </div>
            <div class="mb-3">
                <label for="price">折扣百分比</label>
                <input type="number" class="form-control" id="price" placeholder="請輸入折扣百分比" v-model="couponInfo.percent">
            </div>
            <div class="mb-3">
                <div class="form-check">
                <input class="form-check-input" type="checkbox"
                    id="is_enabled"
                    v-model="couponInfo.is_enabled"
                    :true-value="1"
                    :false-value="0"
                    >
                <label class="form-check-label" for="is_enabled">
                    是否啟用
                </label>
                </div>
            </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="updateCoupon(couponInfo)">
                {{ coupon.isNew === true ? '新增優惠卷' : '編輯優惠券' }}
            </button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins'
import couponStore from '@/store/couponStore.js'
import { mapActions } from 'pinia'

export default {
    mixins: [modalMixins],
    props: {
        coupon: {
            type: Object
        }
    },
    data() {
        return {
            couponInfo: {},
            due_date: ''
        }
    },
    watch: {
        coupon() {
            this.couponInfo = this.coupon
            const dateAndTime = new Date(this.couponInfo.due_date * 1000).toISOString().split('T');
            [this.due_date] = dateAndTime // [] 包起來是改為 object 的格式，這樣才能符合 input type="date" 的形式
        },
        due_date () {
            this.couponInfo.due_date = Math.floor(new Date(this.due_date) / 1000)
        }
    },
    methods: {
        ...mapActions(couponStore,['updateCoupon'])
    }
}
</script>
