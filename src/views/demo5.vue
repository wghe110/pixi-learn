<template>
  <div ref="pixiRef"></div>
</template>

<script>
import * as PIXI from 'pixi.js'
export default {
  mounted() {
    this.initPixi()
  },
  methods: {
    initPixi() {
      const app = new PIXI.Application()
      this.$refs.pixiRef.appendChild(app.view)

      const loader = new PIXI.Loader();
      loader
        .add('walk1', require('assetsPath/zombie/walk1.png'))
        .add('walk2', require('assetsPath/zombie/walk2.png'))
        .add('walk3', require('assetsPath/zombie/walk3.png'))
        .load((loader, resources) => {
          const textureArray = []
          textureArray.push(resources.walk1.texture)
          textureArray.push(resources.walk2.texture)
          textureArray.push(resources.walk3.texture)
          console.log('textureArray', textureArray)

          const animation = new PIXI.AnimatedSprite(textureArray)
          animation.animationSpeed = .1;
          animation.loop = true;
          animation.play()
          console.log('animation', animation)
          app.stage.addChild(animation)
        })
    }
  }
}
</script>

<style scoped>
</style>