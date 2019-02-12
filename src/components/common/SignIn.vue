<template>
  <div id="main">
    <div class="signin_box">
      <p class="login_tit">SIGN IN</p>
      <div class="signin_wrap">
        <input type="text" v-model='email' class="id">
        <span class="id_error">{{ emailError }}</span>
        <input type="password" v-model='pw' class="pw">
        <span class="id_error">{{ pwError }}</span>
        <button v-on:click="signin" class="signin_btn">로그인</button>
      </div>
      <div class="other_wrap">
        <button id="show-modal" @click="showModal = true" class="btn signup">회원 가입</button>
        <modal v-if="showModal" @close="showModal = false"></modal>
<!--
        <router-link to="/common/signup_popup" class="btn signup">회원가입</router-link>
-->
        <router-link to="/common/find_user" class="btn find_user">아이디/비밀번호 찾기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../event'
import Modal from '../advertiser/Modal'

export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      pw: '',
      message: '로그인',
      showModal: false
    }
  },
  components: {
    Modal: Modal
  },
  methods: {

    // onChange ({ target }) {
    //   (target.classList.value === 'id') ? this.validationId(target.value.trim()) : this.validationPw(target.value.trim())
    // },
    // validationId (value) {
    //   const idReg = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
    //   if (!idReg.test(value.trim())) {
    //     this.emailError = '이메일 형식을 지켜주세요'
    //   } else {
    //     this.emailError = ''
    //   }
    // },
    // validationPw (value) {
    //   const pwReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    //   if (!pwReg.test(value.trim())) {
    //     this.pwError = '비밀번호 형식을 지켜주세요'
    //   } else {
    //     this.pwError = ''
    //   }
    // },
    async signin () {
      try {
        await this.$http.post(
          `posts`, // url
          { // body
            email: this.email,
            pw: this.pw
          })
        window.location.href = '/'
      } catch (e) {
        alert(e.message)
      }
    }
  },
  created () {
    eventBus.$emit('account', '로그인')
  }
}
</script>

<style scoped>
/* main */
#main{
  width: 100%;
  height: 100%;
}
.signin_box{
  position: absolute;
  width: 520px;
  height: 600px;
  left: 50%;
  top: 50%;
  border-radius: 8px;
  box-shadow: 12.2px 19.5px 9.6px 0.4px rgba(0, 0, 0, 0.13);
  background-color: #f8f8fb;
  transform: translate(-50%,-50%);
}
.login_tit{
  position: relative;
  text-align: center;
  line-height: 80px;
  margin-top: 20px;
  font-size: 2em;
}
.login_tit::before{
  content: '';
  position: absolute;
  width: 48px;
  height: 1px;
  background-color: #00aa87;
  bottom: -0;
  margin-left: 25px;
}
.signin_wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 70px;
}
.signin_wrap  > input{
  width: 443px;
  height: 58px;
  border: none;
  background: none;
  border-bottom: 1px solid #cbcbcb;
  margin-top: 10px;
  padding: 20px;
}
.signin_wrap > input:focus{
  border-bottom: 1px solid #00aa87;
  transition: 0.5s ease;
}
.signin_wrap > button{
  width: 443px;
  height: 58px;
  border: none;
  margin-top: 30px;
  background-color: #108a7a;
  color: #fff;
}
.signin_wrap > button:hover{
  background-color: transparent;
  color: #9b9b9b;
  font-weight: 600;
  border: 2px solid #9b9b9b;
  transition: all 0.3s ease;
}

.other_wrap{
  text-align: right;
  padding: 15px 40px;
}
.other_wrap > a{
  font-size: 12px;
  color: #999999;
}
.other_wrap > a:hover{
  text-decoration: underline;
}
</style>
