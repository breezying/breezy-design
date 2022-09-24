<template>
  <div class="scale-box-wrapper">
    <div ref="scaleBox" class="scale-box" :style="{width: width + 'px', height: height + 'px'}">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ScaleBox",
  data () {
    return {
      width: 1920,
      height: 1080,
      scale: 0
    }
  },
  mounted () {
    this.setScale()
    window.addEventListener('resize', this.debounce(this.setScale))
  },
  methods: {
    getScale () {
      const scale_width = window.innerWidth / this.width
      const scale_height = window.innerHeight / this.height
      return Math.min(scale_width, scale_height)
    },
    setScale () {
      this.scale = this.getScale()
      this.$refs.scaleBox.style.transform = `scale(${this.scale}, ${this.scale}) translate(-50%)`
    },
    sizeInit () {
      const warp = this.$el
      const warpWidth = warp.clientWidth
      const warpHeight = warp.clientHeight
      let width = 0
      let height = 0
      if (warpHeight * this.width > warpWidth * this.height) {
        width = warpWidth
        height = this.height / this.width * width
      } else {
        height = warpHeight
        width = this.width / this.height * height
      }

      const scale = width / this.width
      return {
        width,
        height,
        scale
      }
    },
    debounce (fn, delay = 50) {
      let _this = this
      let cancelId = null
      return function () {
        cancelId && clearTimeout(cancelId)
        cancelId = setTimeout(() => {
          fn.apply(_this, arguments)
        }, delay);

      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scale-box-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.scale-box {
  position: absolute;
  left: 50%;
  transform-origin: 0 0;
  transition: .3s;

}
</style>

