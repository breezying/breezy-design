<template>
  <div id="app">
    {{test}}
    测试
    <com-color-button type="success" :disabled="false">按钮1</com-color-button> 
    <com-color-button :disabled="true">按钮2</com-color-button>
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

</style>
