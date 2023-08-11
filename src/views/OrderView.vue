<template>
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
      <tr v-for="item in orderList" :key="item.id">
        <td>{{ item.create_at }}</td>
        <td>{{ item.user.email }}</td>
        <td>
          <ul class="list-unstyled">
            <li v-for="el in item.products" :key="el.id">
              {{ el.product.title }}
             / 數量：{{ el.product.num }}
            </li>
          </ul>
        </td>
        <td class="text-right">{{ item.total }}</td>
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
            <button class="btn btn-outline-primary btn-sm">檢視</button>
            <button class="btn btn-outline-danger btn-sm" @click.prevent="deleteOrder(item.id)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  data () {
    return {
      orderList: [],
      pagination: {}
    }
  },
  methods: {
    getOrderList (page = 1) {
      const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/orders/?page=${page}`
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.orderList = res.data.orders
          } else {
            console.log(res.data.messages)
          }
        })
    },
    deleteOrder(orderId){
        const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/order/${orderId}`
        this.$http.delete(api)
            .then((res) => {
                if(res.data.success){
                    this.getOrderList()
                } else {
                    console.log(res.data.message)
                }
            })
    },
    changeOrder(orderId){
        const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/order/${orderId}`
        const params = this.orderList.find((item) => item.id === orderId)
        // console.log(params)
        this.$http.put(api,{data:params})
            .then((res) => {
                if(res.data.success){
                    this.getOrderList()
                } else {
                    console.log(res.data.message)
                }
            })
    }
  },
  created () {
    this.getOrderList()
  }

}
</script>
