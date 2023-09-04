<template>
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>訂單細節</span>
            </h5>
            <button type="button" class="btn-close"
                    data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4">
                <h3>用戶資料</h3>
                <table class="table">
                  <tbody>
                    <tr>
                      <th style="width: 100px;">姓名</th>
                      <td>{{ currentOrder.user.name }}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{{ currentOrder.user.email }}</td>
                    </tr>
                    <tr>
                      <th>電話</th>
                      <td>{{ currentOrder.user.tel }}</td>
                    </tr>
                    <tr>
                      <th>地址</th>
                      <td>{{ currentOrder.user.address }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-8">
                <h3>訂單細節</h3>
                <table class="table">
                  <tbody>
                    <tr>
                      <th style="width: 100px">訂單編號</th>
                      <td>{{ currentOrder.id }}</td>
                    </tr>
                    <tr>
                      <th>下單時間</th>
                      <td>{{ $dayjs(new Date(currentOrder.create_at * 1000)).format('YYYY-MM-DD') }}</td>
                    </tr>
                    <tr>
                      <th>付款時間</th>
                      <td>
                        <span>
                          paid_date
                        </span>
                        <span>時間不正確</span>
                      </td>
                    </tr>
                    <tr>
                      <th>付款狀態</th>
                      <td>
                        <strong v-if="isPaid" class="text-success">已付款</strong>
                        <span v-else class="text-muted">尚未付款</span>
                      </td>
                    </tr>
                    <tr>
                      <th>總金額</th>
                      <td>
                        ${{ currency(currentOrder.total) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h3>選購商品</h3>
                <table class="table">
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in currentOrder.products" :key="item.id">
                      <th>
                        {{ item.product.title }}
                      </th>
                      <td>
                        {{ item.qty }} / {{ item.product.unit }}
                      </td>
                      <td class="text-end">
                        ${{ currency(item.final_total) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary"
                    data-bs-dismiss="modal">取消
            </button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">確認</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixins.js'
import { currency } from '@/methods/filterFn.js'

export default {
    name: 'orderModal',
    props: {
        order: {
            type: Object,
            default() { return {}; },
        },
    },
    data() {
        return {
            currency,
            currentOrder: {
                user:{}
            },
            isPaid: false
        };
    },
    mixins: [modalMixin],
    watch: {
        order() {
            this.currentOrder = this.order
            this.isPaid = this.currentOrder.is_paid
        }
    }
}
</script>
