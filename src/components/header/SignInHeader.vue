<template>
  <div id="header">
    <h1 class="logo">
      <a href="/">
        <img src="https://s3.ap-northeast-2.amazonaws.com/spin-protocol-resource/resources/images/spin-logo1/group-17.png" srcset="https://s3.ap-northeast-2.amazonaws.com/spin-protocol-resource/resources/images/spin-logo1/group-17%402x.png, https://s3.ap-northeast-2.amazonaws.com/spin-protocol-resource/resources/images/spin-logo1/group-17%403x.png" class="logo" alt="spinprotocol_logo">
      </a>
    </h1>
    <p class="title">{{ message }}</p>
  </div>
</template>

<script>
import { eventBus } from '../../event'

export default {
  name: 'SignInHeader',
  data () {
    return {
      message: ''
    }
  },
  created () {
    eventBus.$on('account', data => {
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
