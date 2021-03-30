<template>
  <div ref="pixiRef"></div>
</template>

<script>
import * as PIXI from 'pixi.js'

export default {
  mounted() {
    this.init()
  },
  methods: {
    /**
     * 初始化
     */
    init() {
      const app = new PIXI.Application({
        width: 800, // default 800
        height: 600, // default 600
        transparent: false, // default false
        anitialias: true, // default true
        resolution: 1 // default 1
      });

      const { $refs: { pixiRef } } = this
      pixiRef.appendChild(app.view)

      // 添加图片到舞台
      const loader = new PIXI.Loader();
      loader
        .add('logo', require('assetsPath/logo.png'))
        .load((loader, resources) => {
          const texture = resources.logo.texture;
          const sprite = new PIXI.Sprite(texture)
          app.stage.addChild(sprite)

        })


    }
  }
}
</script>

<style  scoped>
</style>