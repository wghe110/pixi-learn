<template>
  <div>
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

export default {
  components: {
    demo1,
    demo2,
    demo3
  },
  data() {
    return {
      activeKey: 'demo3',
      demos: ['demo1', 'demo2', 'demo3']
    }
  }
}
</script>

<style scoped>
</style>