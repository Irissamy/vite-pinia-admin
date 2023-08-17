<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
    <table class="table mt-4">
    <thead>
    <tr>
      <th>購買時間</th>
      <th>Email</th>
      <th>購買款項</th>
      <th>應付金額</th>
      <th>是否付款</th>
      <th>編輯</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="item in orderList" :key="item.id" :class="{'text-secondary': !item.is_paid}">
        <td>{{ $dayjs(item.create_at * 1000).format('YYYY-MM-DD') }}</td>
        <td>{{ item.user.email }}</td>
        <td>
          <ul class="list-unstyled">
            <li v-for="el in item.products" :key="el.id">
              {{ el.product.title }}
             / 數量：{{ el.qty }}{{ el.product.unit }}
            </li>
          </ul>
        </td>
        <td class="text-right">{{ currency(item.total) }}</td>
        <td>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" v-model="item.is_paid" @change="changeOrder(item.id)">
            <label class="form-check-label">
              <span v-if="item.is_paid">已付款</span>
              <span v-else>未付款</span>
            </label>
          </div>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openOrder()">檢視</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelete(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <OrderModal ref="orderModal" ></OrderModal>
  <DeleteModal ref="deleteModal" :delete-item="currentList" @del-item="deleteOrder(currentList.id)"></DeleteModal>
</template>

<script>
import { currency } from '@/methods/filterFn.js'
import OrderModal from '@/components/modal/OrderModal.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'
import orderStore from '@/store/orderStore.js'
import { mapState, mapActions } from 'pinia'

export default {
  components: {
    OrderModal,DeleteModal
  },
  data () {
    return {
      currency,
      currentList: {}
    }
  },
  computed: {
    ...mapState(orderStore,['orderList','isLoading'])
  },
  methods: {
    ...mapActions(orderStore,['getOrderList','deleteOrder','changeOrder']),
    openOrder(){
      this.$refs.orderModal.showModal()
    },
    openDelete(item) {
      this.currentList = { ...item }
      this.$refs.deleteModal.showModal()
    }
  },
  created () {
    this.getOrderList()
  }

}
</script>
