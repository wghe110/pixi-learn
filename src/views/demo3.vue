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

      const loader = new PIXI.Loader();
      loader.add('sprite', require('assetsPath/zombie-no-pivot.png'))
        .load((loader, resources) => {
          const texture = resources.sprite.texture;

          const react = new PIXI.Rectangle(2, 2, 278, 478);
          texture.frame = react

          const zombie = new PIXI.Sprite(texture)
          app.stage.addChild(zombie)
        })
    }
  }
}
</script>