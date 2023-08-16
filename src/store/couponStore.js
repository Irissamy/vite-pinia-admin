import axios from 'axios'
import { defineStore } from "pinia";

export default defineStore('couponStore',{
    state: () => ({
        couponList: [],
        currentCoupon: {},
        isLoading: false
    }),
    actions: {
      async getCoupon(page = 1) {
        const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/coupons/?page=${page}`
        this.isLoading = true
        await axios.get(api)
            .then((res) => {
                this.couponList = res.data.coupons
                this.isLoading = false
            })
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
              this.isLoading = false
            } else {
              console.log(res.data.message)
            }
          })
      },
      async deleteCoupon(couponId){
        const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/coupon/${couponId}`
        this.isLoading = true
        await axios.delete(api)
          .then((res) => {
            if(res.data.success){
              this.getCoupon()
              this.isLoading = false
            } else {
              console.log(res.data.message)
            }
          })
      }
    }
})