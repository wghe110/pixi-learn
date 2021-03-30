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
      loader.add('logo', require('assetsPath/logo.png'))
        .load((loader, resources) => {
          const sprite = new PIXI.Sprite(resources.logo.texture)
          sprite.anchor.set(0.5, 0.5)
          sprite.x = 200
          sprite.y = 200
          app.stage.addChild(sprite)

          app.ticker.add(delta => {

            sprite.rotation += 0.01;
            console.log('delta', delta)
          })
        })

    }
  }
}
</script>