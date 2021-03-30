<template>
  <div style="padding: 40px">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane v-for="item in demos"
                  :key="item"
                  :tab="item"></a-tab-pane>
    </a-tabs>

    <component :is="activeKey" />
  </div>
</template>

<script>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'

export default {
  components: {
    demo1,
    demo2,
    demo3,
    demo4,
    demo5,
    demo6,
  },
  data() {
    return {
      activeKey: 'demo6',
      demos: ['demo1', 'demo2', 'demo3', 'demo4', 'demo5', 'demo6']
    }
  }
}
</script>

<style scoped>
</style>