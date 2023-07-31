<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="btn-close"
                    data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="image" class="form-label">輸入圖片網址</label>
                  <input type="text" class="form-control" id="image"
                          placeholder="請輸入圖片連結">
                </div>
                <div class="mb-3">
                  <label for="customFile" class="form-label">或 上傳圖片
                    <i class="fas fa-spinner fa-spin"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control" ref="fileInput">
                  <div class="mt-3">
                    <button class="btn btn-outline-primary btn-md d-block w-100" @click.prevent="updateImgFile">
                      新增圖片
                    </button>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="d-flex">
                    <p class="fw-bolder mb-2">主要圖片</p>
                    <a href="javascript:void(0)" class="d-block ms-auto">
                      <i class="bi bi-trash"></i>
                    </a>
                  </div>
                  <input type="text" id="image-url" class="form-control" v-model="addProductList.imageUrl">
                  <img class="img-fluid mt-3 main-img" alt="" :src="addProductList.imageUrl">
                </div>
                <div class="row">
                  <p class="fw-bolder mb-2">次要圖片</p>
                  <div class="col-md-6">
                    <div class="form-check d-flex">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label ps-1" for="flexCheckDefault">
                        選為主要
                      </label>
                      <a href="javascript:void(0)" class="d-block ms-auto">
                        <i class="bi bi-trash"></i>
                      </a>
                    </div>
                    <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1924&amp;q=80" alt="圖片1" class="img-fluid card-img">
                  </div>
                  <div class="col-md-6">
                    <div class="form-check d-flex">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label ps-1" for="flexCheckDefault">
                        選為主要
                      </label>
                      <a href="javascript:void(0)" class="d-block ms-auto">
                        <i class="bi bi-trash"></i>
                      </a>
                    </div>
                    <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" alt="圖片2" class="img-fluid card-img">
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input type="text" class="form-control" id="title"
                          placeholder="請輸入標題" v-model="addProductList.title">
                </div>

                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <input type="text" class="form-control" id="category"
                            placeholder="請輸入分類" v-model="addProductList.category">
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">單位</label>
                    <input type="text" class="form-control" id="unit"
                            placeholder="請輸入單位" v-model="addProductList.unit">
                  </div>
                </div>

                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input type="number" class="form-control" id="origin_price"
                            placeholder="請輸入原價" v-model="addProductList.origin_price">
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input type="number" class="form-control" id="price"
                            placeholder="請輸入售價" v-model="addProductList.price">
                  </div>
                </div>
                <hr>

                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea type="text" class="form-control" id="description"
                            placeholder="請輸入產品描述" v-model="addProductList.description"></textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea type="text" class="form-control" id="content"
                            placeholder="請輸入產品說明內容" v-model="addProductList.content"></textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                            :true-value="1"
                            :false-value="0"
                            id="is_enabled"
                            v-model="addProductList.is_enabled">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary"
                    data-bs-dismiss="modal">取消
            </button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click.prevent="addProduct(addProductList)">確認</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins'
import axios from 'axios'
import productStore from '@/store/productStore.js'
import { mapActions } from 'pinia'

export default {
  props: {
    product: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      modal: {},
      addProductList: {}
    }
  },
  watch: {
    product() {
        this.addProductList = this.product
    }
  },
  mixins: [modalMixins],
  methods: {
    ...mapActions(productStore,['addProduct']),
    updateImgFile () {
      const uploadedFile = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/upload`
      axios.post(url, formData)
        .then((res) => {
          if (res.data.success) {
            this.addProductList.imageUrl = res.data.imageUrl
          }
        })
      this.$refs.fileInput.value = ''
    }
  }
}
</script>

<style scoped>
.main-img {
  object-fit: cover;
}.card-img {
  object-fit: cover;
  height: 100px;
}
</style>
