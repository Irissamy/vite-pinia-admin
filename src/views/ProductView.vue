<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <ToastMessage :toast-msg="toastMessages"></ToastMessage>
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light fs-4">Pages /</span> Product 產品</h4>
    <div class="card">
        <div class="card-header d-flex align-items-center">
            <h5 class="mb-0">Product 產品</h5>
            <div class="ms-auto">
                <button class="btn btn-primary" type="button" @click.prevent="openModal(true)">新增項目</button>
            </div>
        </div>
        <div class="table-responsive text-nowrap">
            <table class="table">
                <thead class="table-light">
                    <tr>
                        <th width="120">分類</th>
                        <th>產品名稱</th>
                        <th width="120">原價</th>
                        <th width="120">售價</th>
                        <th width="100">是否啟用</th>
                        <th width="200">編輯</th>
                    </tr>
                </thead>
                <tbody class="table-border-bottom-0">
                    <tr v-for="item in products" :key="item.id">
                    <td>{{ item.category }}</td>
                    <td>{{ item.title }}</td>
                    <td class="text-right">
                        {{ currency(item.origin_price) }}
                    </td>
                    <td class="text-right">
                        {{ currency(item.price) }}
                    </td>
                    <td>
                        <span class="text-success" v-if="item.is_enabled === 1">啟用</span>
                        <span class="text-muted" v-else>未啟用</span>
                    </td>
                    <td>
                        <div class="btn-group">
                        <button class="btn btn-outline-primary btn-sm" @click.prevent="openModal(false,item)">編輯</button>
                        <button class="btn btn-outline-danger btn-sm" @click.prevent="delModal(item)">刪除</button>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <ProductDetail ref="productDatail" :product="currentProduct"></ProductDetail>
    <DeleteProduct ref="deleteProduct" :product="currentProduct"></DeleteProduct>
</template>

<script>
import { currency } from '@/methods/filterFn.js'
import productStore from '@/store/productStore.js' 
import { mapState, mapActions } from 'pinia'
import ProductDetail from '@/components/modal/ProductDetail.vue'
import DeleteProduct from '@/components/modal/DeleteProduct.vue'
import ToastMessage from '@/components/ToastMessage.vue'

export default {
    components: {
        ProductDetail,DeleteProduct,ToastMessage
    },
    data() {
        return {
            currency,
            isNew: false,
            currentProduct: {
                imagesUrl: []
            },
        }
    },
    computed: {
        ...mapState(productStore,['products','isLoading','toastMessages'])
    },
    methods: {
        ...mapActions(productStore,['getProductList']),
        openModal(isNew,item) {
            if(isNew){
                this.currentProduct = {
                    is_enabled: 0,
                    imagesUrl: [],
                    isNew: true
                }
            } else {
                this.currentProduct = { ...item }
                this.currentProduct.isNew = false
            }
            this.isNew = isNew
            this.$refs.productDatail.showModal()
        },
        delModal(item){
            this.currentProduct = { ...item }
            this.$refs.deleteProduct.showModal()
        }
    },
    created() {
        this.getProductList()
    }
}
</script>
