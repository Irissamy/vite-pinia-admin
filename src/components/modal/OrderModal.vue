<template>
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
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
                      <td>name</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>email</td>
                    </tr>
                    <tr>
                      <th>電話</th>
                      <td>tel</td>
                    </tr>
                    <tr>
                      <th>地址</th>
                      <td>address</td>
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
                      <td>id</td>
                    </tr>
                    <tr>
                      <th>下單時間</th>
                      <td>create_at</td>
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
                        <strong  class="text-success">已付款</strong>
                        <span class="text-muted">尚未付款</span>
                      </td>
                    </tr>
                    <tr>
                      <th>總金額</th>
                      <td>
                        $500
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h3>選購商品</h3>
                <table class="table">
                  <thead>
                    <tr>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        title
                      </th>
                      <td>
                        1 / 個
                      </td>
                      <td class="text-end">
                        $500
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
            <button type="button" class="btn btn-primary">確認</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixins.js'

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
            
        };
    },
    mixins: [modalMixin],
    watch: {
        
    }
}
</script>
