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
              <input type="text" name="company_name" id="company_name">
            </div>
            <div class="input_wrap">
              <label for="brand_name">브랜드 명</label>
              <input type="text" name="brand_name" id="brand_name">
            </div>
            <div class="input_wrap">
              <label for="ceo_name">대표자 명<sup>*</sup></label>
              <input type="text" name="ceo_name" id="ceo_name">
            </div>
            <div class="input_wrap">
              <label for="business_num">사업자등록 번호<sup>*</sup></label>
              <input type="text" name="business_num" id="business_num">
            </div>
          </div>
          <div class="form_right">
            <div class="input_wrap">
              <label for="event">종목<sup>*</sup></label>
              <input type="text" name="event" class="event" id="event">
            </div>
            <div class="input_wrap input_margin">
              <label for="industry">업태<sup>*</sup></label>
              <input type="text" name="industry" class="industry" id="industry">
            </div>
            <div class="input_wrap">
              <label for="phone_num">전화번호<sup>*</sup></label>
              <input type="text" name="phone_num" id="phone_num">
            </div>
            <div class="input_wrap">
              <label for="post_code">회사 주소<sup>*</sup></label>
              <input type="text" name="post_code" class="post_code" id="post_code">
              <button type="button" class="sch_add_btn">주소검색</button>
              <input type="text" name="address" class="address">
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
              <input type="text" name="id" class="id" id="id" placeholder="sample@sample.com">
              <button type="button" class="id_chk_btn">중복확인</button>
              <p class="error id_error"></p>
            </div>
            <div class="input_wrap">
              <label for="password">비밀번호<sup>*</sup></label>
              <input type="password" name="password" id="password">
              <p class="error password_error"></p>
            </div>
            <div class="input_wrap">
              <label for="password_chk">비밀번호 확인<sup>*</sup></label>
              <input type="password" name="password_chk" id="password_chk">
              <p class="error password_chk_error"></p>
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
          <button type="button" class="submit_btn">가입하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvSignUp'
}
</script>

<style scoped>

  .container{
    width: 1470px;
    min-width: 1470px;
    margin: 0 auto;
  }
  /* header */
  #header{
    width: 100%;
    height: 70px;
    background-color: #1f263e !important;
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

  /* 회원가입 카테고리 버튼 */
  .txt{
    line-height: 70px;
  }
  .btn_wrap{
    width: 360px;
    height: 300px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .btn{
    display: inline-block;
    width: 100px;
    height: 50px;
    line-height: 50px;
    background-color: #00aa87;
    color: #fff;
  }

  .form_tit{
    padding: 20px;
  }
  input[type="text"],input[type="password"]{
    width: 380px;
    height: 35px;
    padding: 20px;
    margin-bottom: 5px;
    border: 1px solid #e9eaf1;
    border-radius: 4px;
    /* box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1); */
    background-color: #fbfcff;
  }
  input:focus{
    border: 1px solid #00aa87;
  }

  label{
    display: block;
    padding-bottom: 5px;
    color: #92949c;
    font-size: 12px;
  }
  sup{
    font-size: 12px;
    color: #00aa87;
  }
  .input_margin{
    /* 작은 input 마진 */
    margin-left: 20px;
  }
  .input_wrap{
    display: inline-block;
  }
  button{
    text-align: center;
    color: #fff;
    border:none;
    cursor: pointer;
    border-radius: 4px;
    background-color: #9b9b9b;
  }

  .error{
    color: red;
    font-size: 12px;
  }
  /* main */
  #main{
    padding-top: 20px;
  }
  .form_left{
    padding: 0 40px;
    width: 400px;
    float: left;
  }
  .form_right{
    width: 430px;
    float: right;
  }
  .event, .industry, .post_code{
    width: 180px !important;
  }
  .sch_add_btn, .id_chk_btn, .phone_chk_btn{
    width: 76px;
    height: 40px;
    margin-left: 10px;
  }

  /* 회원정보 */
  .info{
    float: left;
    height: 380px;
    border-radius: 8px;
    background-color: #ffffff;
  }
  /* 계정정보 */
  .account{
    float: right;
    height: 380px;
    border-radius: 8px;
    background-color: #ffffff;
  }
  .form{
    padding: 0 40px;
  }
  .id, .phone_num{
    width: 290px !important;
  }
  .notice{
    margin-top: 20px;
  }
  .notice,.notice li{
    font-size: 12px;
    color: #74767d;
  }
  /* 제출 button */
  .submit_wrap{
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 30px;
  }
  .submit_btn{
    width: 300px;
    height: 50px;
    border-radius: 30px;
    background-color: #9b9b9b;
  }
  .submit_btn:hover{
    background-color: transparent;
    color: #108a7a;
    font-weight: 600;
    border: 2px solid #108a7a;
    transition: all 0.3s ease;
  }
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
