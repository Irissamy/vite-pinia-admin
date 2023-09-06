import axios from 'axios'
import { defineStore } from "pinia";

export default defineStore('orderStore',{
    state: () => ({
        orderList: [],
        pagination: {},
        toastMessages: [],
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
        async deleteOrder(orderId){
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/order/${orderId}`
            this.isLoading = true
            await axios.delete(api)
                .then((res) => {
                    if(res.data.success){
                        this.getOrderList()
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
        },
        async changeOrder(orderId){
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/order/${orderId}`
            const params = this.orderList.find((item) => item.id === orderId)
            this.isLoading = true
            await axios.put(api,{data:params})
                .then((res) => {
                    if(res.data.success){
                        this.getOrderList()
                        this.toastMessages.push({
                            style: 'success',
                            title: '編輯成功',
                            content: ''
                        })
                    } else {
                        this.toastMessages.push({
                            style: 'danger',
                            title: '編輯失敗',
                            content: res.data.message.join('、')
                        })
                    }
                })
            this.isLoading = false
        }
    }
})