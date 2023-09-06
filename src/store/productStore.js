import axios from 'axios'
import { defineStore } from "pinia";

export default defineStore('productStore',{
    state: () => ({
        products: [],
        toastMessages: [],
        isLoading: false
    }),
    actions: {
      async getProductList () {
          const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/products/all`
          this.isLoading = true
          await axios.get(api)
            .then((res) => {
              if(res.data.success){
                this.products = res.data.products
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
      async removeProduct(productId){
        const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/product/${productId}`
        this.isLoading = true
        await axios.delete(api)
          .then((res) => {
            if (res.data.success){
              this.getProductList()
              this.toastMessages.push({
                style: 'success',
                title: '刪除成功'
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
      async addProduct(addProductList) {
        // 新增
        let api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/product`
        let apiMethods = 'post'
        
        // 編輯
        if(addProductList.isNew === false) {
          api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/product/${addProductList.id}`
          apiMethods = 'put'
        } 
        this.isLoading = true
        await axios[apiMethods](api, { data: addProductList})
          .then((res) => {
            if(res.data.success){
              this.getProductList()
              this.toastMessages.push({
                style: 'success',
                title: apiMethods === 'post' ? '新增成功' : '編輯成功',
                content: ''
              })
            } else {
              this.toastMessages.push({
                style: 'danger',
                title: '失敗',
                content: res.data.message.join('、')
              })
            }
          })
          this.isLoading = false
      }
    }
})