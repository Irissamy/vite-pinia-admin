<template>
    <div class="toast-container position-absolute pe-3 top-0 end-0">
      <ToastItem v-for="(msg,key) in toastMsg" :key="key" :msg="msg"></ToastItem>
    </div>
</template>

<script>
import ToastItem from '@/components/ToastItem.vue'

export default {
  components: {
    ToastItem
  },
  props: {
    toastMsg: {
        type: Array
    }
  },
  data () {
    return {
      messages: []
    }
  }
}
</script>
