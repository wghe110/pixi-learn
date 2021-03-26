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

export default {
  components: {
    demo1
  },
  data() {
    return {
      activeKey: 'demo1',
      demos: ['demo1']
    }
  }
}
</script>

<style scoped>
</style>