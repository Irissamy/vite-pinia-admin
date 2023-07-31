<template>
    <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="text-end">
        <button class="btn btn-primary" type="button" @click.prevent="openModal(true)">新增項目</button>
    </div>
    <table class="table mt-4">
        <thead>
            <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="200">編輯</th>
            </tr>
        </thead>
        <tbody>
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
    <ProductDetail ref="productDatail" :product="currentProduct"></ProductDetail>
    <DeleteProduct ref="deleteProduct" :product="currentProduct"></DeleteProduct>
</template>

<script>
import { currency } from '@/methods/filterFn.js'
import productStore from '@/store/productStore.js' 
import { mapState, mapActions } from 'pinia'
import ProductDetail from '@/components/modal/ProductDetail.vue'
import DeleteProduct from '@/components/modal/DeleteProduct.vue'

export default {
    components: {
        ProductDetail,DeleteProduct
    },
    data() {
        return {
            currency,
            isNew: false,
            currentProduct: {},
        }
    },
    computed: {
        ...mapState(productStore,['products','isLoading'])
    },
    methods: {
        ...mapActions(productStore,['getProductList']),
        openModal(isNew,item) {
            if(isNew){
                this.currentProduct = {
                    is_enabled: 0,
                    isNew: true
                }
            } else {
                this.currentProduct = { ...item,isNew:false }
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
