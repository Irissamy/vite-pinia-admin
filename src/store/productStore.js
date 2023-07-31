import axios from 'axios'
import { defineStore } from "pinia";

export default defineStore('productStore',{
    state: () => ({
        products: [],
        isLoading: false
    }),
    actions: {
      async getProductList () {
          const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/products/all`
          this.isLoading = true
          await axios.get(api)
            .then((res) => {
              this.products = res.data.products
              this.isLoading = false
            })
      },
      async removeProduct(productId){
        const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/product/${productId}`
        this.isLoading = true
        await axios.delete(api)
          .then(() => {
            this.getProductList()
            this.isLoading = false
          })
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
            } else {
              console.log(res.data.message)
            }
          })
          this.isLoading = false
      }
    }
})