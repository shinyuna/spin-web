<template>
  <div id="main">
    <div class="container">
      <div class="account_wrap">
        <h2 class="set_tit">
          계정정보
        </h2>
        <div class="setting">
          <label for="id">아이디</label>
          <input type="text" name="id" id="id">

          <label for="password">기존 비밀번호</label>
          <input type="password" name="password" id="password">
          <p class="error password_error"></p>

          <label for="new_password">비밀번호</label>
          <input type="password" name="new_password" id="new_password">
          <p class="error new_password_error"></p>

          <label for="password_chk">비밀번호 확인</label>
          <input type="password" name="password_chk" id="password_chk">
          <p class="error password_chk_error"></p>
        </div>
        <ul class="notice">
          <li>* 영문, 숫자, 특수문자 혼합 8자리 이상</li>
          <li>* 연속되는 영문 또는 숫자 3자리 이상 불가</li>
        </ul>
        <div class="btn_wrap">
          <button type="button" class="modify_password_btn">비밀번호 변경</button>
        </div>
      </div>

      <div class="company_wrap">
        <h2 class="set_tit">
          사업자 정보
        </h2>
        <div class="setting">
          <label for="company_name">회사명</label>
          <input type="text" name="company_name" id="company_name" value="${user.info.company_name}">
          <label for="brand_name">브랜드 명</label>
          <input type="text" name="brand_name" id="brand_name" value="${user.info.brand_name}">
          <label for="ceo_name">대표자 명</label>
          <input type="text" name="ceo_name" id="ceo_name" value="${user.info.ceo_name}">
          <label for="business_num">사업자등록 번호</label>
          <input type="text" name="business_num" id="business_num" value="${user.info.business_num}">
          <span class="haf">
                            <label for="event">종목</label>
                            <input type="text" name="event" class="event" id="event" value="${user.info.event}">
                        </span>
          <span class="haf">
                            <label for="industry">업태</label>
                            <input type="text" name="industry" class="industry" id="industry" value="${user.info.industry}">
                        </span>
          <label for="phone_num">전화번호</label>
          <input type="text" name="phone_num" id="phone_num" placeholder="ex. 0212341234" value="${user.info.phone_num}" >
        </div>
        <div class="btn_wrap">
          <button type="button" class="modify_bsInfo_btn">변경하기</button>
        </div>
      </div>

      <div class="address_wrap">
        <h2 class="set_tit">
          주소
        </h2>
        <div class="setting">
                        <span class="haf">
                            <label for="post_code">회사 주소</label>
                            <input type="text" name="post_code" class="post_code" id="post_code" value="${user.info.post_code}">
                        </span>
          <button type="button" class="sch_add_btn">주소검색</button>
          <input type="text" name="address" class="address" placeholder="상세주소" value="${user.info.address}">
        </div>
        <div class="btn_wrap">
          <button type="button" class="modify_address_btn">변경하기</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "AdvMyInfo"
}
</script>
<style scoped>
  #main{
    margin-left: 220px;
  }
  .container{
    padding: 50px 200px;
  }

  .container > div{
    display: inline-block;
    width: 100%;
    padding: 0px 70px 30px;
    margin-bottom: 30px;
    background-color: #fff;
    border-radius: 15px;
  }
  .set_tit{
    height: 70px;
    line-height: 70px;
    font-size: 1.3em;
  }
  .setting input{
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 20px;
    display: block;
    margin-bottom: 10px;
  }
  label{
    display: block;
    padding-top: 10px;
    padding-bottom: 5px;
    color: #92949c;
    font-size: 12px;
  }
  label:nth-child(1){
    padding-top: 0;
  }
  .notice{
    margin-top: 20px;
  }
  .notice,.notice li{
    font-size: 12px;
    color: #74767d;
  }

  .error{
    color: red;
    font-size: 12px;
  }

  .btn_wrap{
    margin-top: 30px;
  }
  button{
    width: 100%;
    height: 40px;
    background-color: #9b9b9b;
    border: none;
    border-radius: 5px;
    color: #fff;
  }
  .container button:hover{
    background-color: #fff;
    color: #108a7a;
    border: 2px solid #108a7a;
    transition: all 0.3s ease;
  }

  .haf{
    width: 40%;
    display: inline-block;
    margin-right: 25px;
  }
  .sch_add_btn{
    width: 80px;
  }

</style>
