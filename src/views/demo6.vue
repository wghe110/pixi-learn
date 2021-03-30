<template>
  <div ref="pixiRef"></div>
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
  mounted() {
    this.initPixi()
  },
  methods: {
    initPixi() {
      const app = new PIXI.Application();
      this.$refs.pixiRef.appendChild(app.view)

      const loader = new PIXI.Loader();
      loader
        .add('zombie', 'zombie.json')
        .load((loader, resources) => {
          console.log('resources', resources)
          const sheet = resources.zombie.spritesheet;
          console.log('sheet', sheet)
          const animation = new PIXI.AnimatedSprite(sheet.animations['walk'])
          animation.animationSpeed = .1;
          animation.play()

          app.stage.addChild(animation)
        })
    }
  }
}
</script>