<template>
  <div id="app">
    <ScaleBox>
      {{test}}
      测试
      <color-button type="success" :disabled="false">按钮1</color-button> 
      <color-button :disabled="true">按钮2</color-button>
    </ScaleBox>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: 'message'
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.scale-box {
  background-color: beige;
}
</style>
