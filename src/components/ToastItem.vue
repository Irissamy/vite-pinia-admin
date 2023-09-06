<template>
  <div class="bs-toast toast toast-placement-ex m-2" :class="`bg-${msg.style}`" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="toast-header">
      <i class="bi bi-bell me-2"></i>
      <!-- <span class="p-2 rounded me-2 d-inline-block" :class="`bg-${msg.style}`"></span> -->
      <strong class="me-auto fw-semibold">{{ msg.title }}</strong>
      <button type="button" class="btn-close" :class="`bg-${msg.style}`" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body" v-if="msg.content">
      {{ msg.content }}
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'
export default {
  name: 'ToastItem',
  props: [
    'msg'
  ],
  mounted () {
    const toastEl = this.$refs.toast
    const toast = new Toast(toastEl, {
      delay: 4000
    })
    toast.show()
  }
}
</script>
