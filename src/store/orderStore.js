import axios from 'axios'
import { defineStore } from "pinia";

export default defineStore('orderStore',{
    state: () => ({
        orderList: [],
        pagination: {},
        isLoading: false
    }),
    actions: {
        async getOrderList (page = 1) {
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/orders/?page=${page}`
            this.isLoading = true
            await axios.get(api)
              .then((res) => {
                if (res.data.success) {
                  this.orderList = res.data.orders
                  this.isLoading = false
                } else {
                  console.log(res.data.messages)
                }
            })
        },
        async deleteOrder(orderId){
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/order/${orderId}`
            await axios.delete(api)
                .then((res) => {
                    if(res.data.success){
                        this.getOrderList()
                    } else {
                        console.log(res.data.message)
                    }
                })
        },
        async changeOrder(orderId){
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/order/${orderId}`
            const params = this.orderList.find((item) => item.id === orderId)
            // console.log(params)
            await axios.put(api,{data:params})
                .then((res) => {
                    if(res.data.success){
                        this.getOrderList()
                    } else {
                        console.log(res.data.message)
                    }
                })
        }
    }
})