import axios from 'axios'
import { defineStore } from "pinia";

export default defineStore('couponStore',{
    state: () => ({
        couponList: [],
        currentCoupon: {},
        toastMessages: [],
        isLoading: false
    }),
    actions: {
      async getCoupon(page = 1) {
        const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/coupons/?page=${page}`
        this.isLoading = true
        await axios.get(api)
          .then((res) => {
            if(res.data.success){
              this.couponList = res.data.coupons
            } else {
              this.toastMessages.push({
                style: 'danger',
                title: '取得列表失敗',
                content: res.data.message.join('、')
              })
            }  
          })
        this.isLoading = false
      },
      async updateCoupon(couponInfo){
        this.currentCoupon = couponInfo
        let api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/coupon`
        let httpMethods = 'post'
        this.isLoading = true
        if (!couponInfo.isNew) {
          api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/coupon/${couponInfo.id}`
          httpMethods = 'put'
        }

        await axios[httpMethods](api, { data: this.currentCoupon })
          .then((res) => {
            if(res.data.success){
              this.getCoupon()
              this.toastMessages.push({
                style: 'success',
                title: httpMethods === 'post' ? '新增成功' : '編輯成功',
                content: ''
              })
            } else {
              this.toastMessages.push({
                style: 'danger',
                title: httpMethods === 'post' ? '新增失敗' : '編輯失敗',
                content: res.data.message.join('、')
              })
            }
          })
        this.isLoading = false
      },
      async deleteCoupon(couponId){
        const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/coupon/${couponId}`
        this.isLoading = true
        await axios.delete(api)
          .then((res) => {
            if(res.data.success){
              this.getCoupon()
              this.toastMessages.push({
                style: 'success',
                title: '刪除成功',
                content: ''
              })
            } else {
              this.toastMessages.push({
                style: 'danger',
                title: '刪除失敗',
                content: res.data.message.join('、')
              })
            }
          })
        this.isLoading = false
      }
    }
})