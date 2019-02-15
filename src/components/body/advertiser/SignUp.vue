<template>
  <div id="main">
    <div class="container">
      <div class="signup_form">
        <div class="info">
          <!-- 회원정보 입력 폼 -->
          <h2 class="form_tit">사업자 번호</h2>
          <div class="form_left">
            <div class="input_wrap">
              <label for="company_name">회사명<sup>*</sup></label>
              <input type="text" v-model='company_name' name="company_name" id="company_name">
            </div>
            <div class="input_wrap">
              <label for="brand_name">브랜드 명</label>
              <input type="text" v-model='brand_name' name="brand_name" id="brand_name">
            </div>
            <div class="input_wrap">
              <label for="ceo_name">대표자 명<sup>*</sup></label>
              <input type="text" v-model='ceo_name' name="ceo_name" id="ceo_name">
            </div>
            <div class="input_wrap">
              <label for="business_num">사업자등록 번호<sup>*</sup></label>
              <input type="text" v-model='business_num' name="business_num" id="business_num">
            </div>
          </div>
          <div class="form_right">
            <div class="input_wrap">
              <label for="event">종목<sup>*</sup></label>
              <input type="text" v-model='event' name="event" class="event" id="event">
            </div>
            <div class="input_wrap input_margin">
              <label for="industry">업태<sup>*</sup></label>
              <input type="text" v-model='industry' name="industry" class="industry" id="industry">
            </div>
            <div class="input_wrap">
              <label for="phone_num">전화번호<sup>*</sup></label>
              <input type="text" v-model='phone_num' name="phone_num" id="phone_num">
            </div>
            <div class="input_wrap">
              <label for="post_code">회사 주소<sup>*</sup></label>
              <input type="text" v-model='post_code' name="post_code" class="post_code" id="post_code">
              <button type="button" v-on:click='showPost' class="sch_add_btn">주소검색</button>
              <input type="text" v-model='address' name="address" class="address">
              <div id="sample"></div>
            </div>
          </div>
        </div>
        <!-- 회원정보 입력 폼 끝  -->
        <!-- 계정 입력 -->
        <div class="account">
          <h2 class="form_tit">계정 만들기</h2>
          <div class="form">
            <div class="input_wrap">
              <label for="id">ID<sup>*</sup></label>
              <input type="text" v-model='id' name="id" class="id" id="id" placeholder="sample@sample.com">
              <button type="button" v-on:click='checkId' class="id_chk_btn">중복확인</button>
              <p class="error">{{ id_error }}</p>
            </div>
            <div class="input_wrap">
              <label for="password">비밀번호<sup>*</sup></label>
              <input type="password" v-model='password' name="password" id="password">
              <p class="error">{{ password_error }}</p>
            </div>
            <div class="input_wrap">
              <label for="password_chk">비밀번호 확인<sup>*</sup></label>
              <input type="password" v-model='password_chk' name="password_chk" @input="onKeyup" id="password_chk">
              <p class="error">{{ password_chk_error }}</p>
            </div>
            <ul class="notice">
              <li>* 영문, 숫자, 특수문자 혼합 8자리 이상</li>
              <li>* 연속되는 영문 또는 숫자 3자리 이상 불가</li>
            </ul>
          </div>
        </div>
        <!-- 계정 입력 끝 -->
        <div class="clear"></div>
        <!-- 서류 등록 -->
        <div class="document">
          <h2 class="form_tit">서류등록</h2>
          <div class="form">
            <p class="notice">결과는 3일 이내 등록하신 이메일로 발송됩니다. 파일은 PDF 혹은 JPG 파일 5Mb 이하로 업로드해 주세요.</p>
          </div>
        </div>
        <!-- 서류 끝 -->
        <!-- 이용약관 -->
        <div class="term">
          <h2 class="form_tit">약관</h2>
          <div class="agree">
            <p class="all_agree">
              <input type="checkbox" name="all_chk" id="all_chk">
              <label for="all_chk">전체 동의</label>
            </p>
            <ul>
              <li>
                <input type="checkbox" name="chk1" id="chk1" class="chk">
                <label for="chk1"><a href="#">이용약관</a></label>
              </li>
              <li>
                <input type="checkbox" name="chk2" id="chk2" class="chk">
                <label for="chk2"><a href="#">개인정보 수집 및 이용동의</a></label>
              </li>
              <li>
                <input type="checkbox" name="chk3" id="chk3" class="chk">
                <label for="chk3"><a href="#">매월 15일/30일 정산동의</a></label>
              </li>
              <li>
                <input type="checkbox" name="chk4" id="chk4" class="chk">
                <label for="chk4"><a href="#">개인정보 제3자 제공 동의</a></label>
              </li>
              <li>
                <input type="checkbox" name="chk5" id="chk5" class="chk">
                <label for="chk5"><a href="#">전자 금융거래 이용약관</a></label>
              </li>
              <li>
                <input type="checkbox" name="chk6" id="chk6" class="chk">
                <label for="chk6"><a href="#">[광고용]SNS 수신 동의</a></label>
              </li>
              <li>
                <input type="checkbox" name="chk7" id="chk7" class="chk">
                <label for="chk7"><a href="#">[광고용]E-mail 수신 동의</a></label>
              </li>
            </ul>
          </div>
        </div>
        <!-- 이용약관 끝 -->
        <div class="clear"></div>
        <div class="submit_wrap">
          <button type="button" v-on:click="signup" class="submit_btn">가입하기</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { eventBus } from '../../../event'
import Modal from './Modal'

export default {
  name: 'AdvSignUp',
  data () {
    return {
      id: null,
      password: null,
      company_name: null,
      brand_name: null,
      ceo_name: null,
      business_num: null,
      event: null,
      industry: null,
      phone_num: null,
      post_code: null,
      address: null,
      password_chk: null,
      password_chk_error: null,
      showModal: false
    }
  },
  components: {
    Modal: Modal
  },
  computed: {
    id_error: function () {
      const idReg = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
      if (!this.id) {
        return ''
      } else if (!idReg.test(this.id)) {
        return '이메일 형식을 지켜주세요'
      }
      return ''
    },
    password_error: function () {
      const pwReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      if (!this.password) {
        return ''
      } else if (!pwReg.test(this.password)) {
        return '비밀번호 형식을 지켜주세요'
      }
      return ''
    }
  },
  methods: {
    showPost () {
      // new daum.Postcode({
      //   oncomplete: function (data) {
      //     let fullAddr = null
      //     let extraAddr = null
      //
      //     if (data.userSelectedType === 'R') {
      //       fullAddr = data.roadAddress
      //     } else {
      //       fullAddr = data.jibunAddress
      //     }
      //
      //     if (data.userSelectedType === 'R') {
      //       if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
      //         extraAddr += data.bname
      //       }
      //       if (data.buildingName !== '' && data.apartment === 'Y') {
      //         extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName)
      //       }
      //       fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '')
      //     }
      //     console.log(data.zonecode)
      //   }
      // }).open();
    },
    onKeyup ({ target }) {
      if (!this.password) {
        this.password_chk = ''
        this.password_chk_error = '비밀번호를 먼저 입력해주세요.'
      } else if (this.password === target.value) {
        this.password_chk_error = ''
      } else {
        this.password_chk_error = '비밀번호가 일치 하지 않습니다.'
      }
    },
    async signup () {
      try {
        const result = await this.$http.post(
          '/api/common/signup',
          JSON.stringify({
            id: this.id,
            pw: this.password
          })
        )
        if (result.data.response) {
          throw result.data
        }
        window.location.href = '/common/signin'
        /**
         * company_name: this.company_name,
         brand_name: this.brand_name,
         ceo_name: this.ceo_name,
         business_num: this.business_num,
         event: this.event,
         industry: this.industry,
         phone_num: this.phone_num,
         post_code: this.post_code,
         address: this.address
         */
      } catch (e) {
        alert(e.message)
      }
    },
    async checkId () {
      try {
        await this.$http.post(
          '/api/advertiser/adv_check_id',
          {
            id: this.id
          })
        this.id_error = '사용가능한 아이디입니다.'
      } catch (e) {
        alert(e.message)
      }
    }
  },
  created () {
    eventBus.$emit('account', '회원가입')
  }
}
</script>

<style scoped>
@import '../../../assets/css/signup.css';
  .address{
    margin-top: 10px;
  }
  .info{
    width: 960px;
  }
  /* 계정 */
  .account{
    width: 480px;
  }
  /* 서류제출 */
  .document{
    float: left;
    width: 550px;
    height: 320px;
    margin-top: 30px;
    border-radius: 8px;
    background-color: #ffffff;
  }
  /* 이용약관 */
  .term{
    float: right;
    width: 885px;
    height: 320px;
    margin-top: 30px;
    border-radius: 8px;
    background-color: #ffffff;
  }
  .agree{
    padding: 0 40px;
  }
  .agree > ul{
    width: 100%;
    height: 160px;
    padding: 35px 80px;
    border-radius: 4px;
    margin-top: 20px;
    background-color: #f9faff;
  }
  .agree > ul > li{
    float: left;
    width: 200px;
    margin-left: 10px;
    padding-bottom: 10px;
  }
  .agree > ul > li > label >  a{
    text-decoration: underline;
  }
</style>
