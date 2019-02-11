<template>
  <div id="header">
    <p class="title">{{ message }}</p>
  </div>
</template>

<script>
import { eventBus } from '../../event'

export default {
  name: 'Header',
  data () {
    return {
      message: ''
    }
  },
  created () {
    eventBus.$on('title', data => {
      this.message = data
    })
  }
}
</script>

<style scoped>
  /* header */
  #header{
    width: 100%;
    height: 70px;
    background: transparent;
    box-shadow: none;
  }
  #header .logo{
    float: left;
    width: 174px;
    height: 70px;
    padding-left: 20px;
    object-fit: contain;
  }
  #header .logo a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .title{
    float: right;
    width: 70px;
    margin-right: 30px;
    line-height: 70px;
    color: #eaedf8;
    font-weight: 500;
  }
</style>
