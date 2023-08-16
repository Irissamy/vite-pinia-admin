<template>
    <div class="toast-container position-absolute pe-3 top-0 end-0">
      <ToastItem v-for="(msg,key) in messages" :key="key" :msg="msg"></ToastItem>
    </div>
</template>

<script>
import ToastItem from '@/components/ToastItem.vue'

export default {
  components: {
    ToastItem
  },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>
