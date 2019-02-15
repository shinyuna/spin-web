<template>
  <div id="main">
    <div class="container">
      <div class="breadcrumbs">
        <router-link to="/advertiser/adv_campaign_management">홈</router-link>
        <router-link to="/advertiser/adv_campaign_registration">켐페인 등록</router-link>
      </div>
      <div class="camp_wrap">
        <!--<form id="camp_form" action="/api/advertiser/adv_campaign_registration" method="post" enctype="multipart/form-data" >-->
        <form id="camp_form" enctype="multipart/form-data">
          <div class="input_wrap">
            <label for="sns_type" class="sns_wrap">SNS 타입<sup>*</sup></label>
            <div class="wrap_right sns_wrap">
              <select name="sns_type" class="sns_type">
                <option value="">SNS</option>
                <option value="instagram">인스타그램</option>
                <option value="facebook">페이스북</option>
                <option value="blog">블로그</option>
                <option value="youtube">유튜브</option>
              </select>
            </div>
            <div class="input_wrap">
              <label for="sex" class="sex_wrap">성별<sup>*</sup></label>
              <div class="wrap_right sex_wrap">
                <select name="sex" class="sex">
                  <option value="">성별</option>
                  <option value="man">남자</option>
                  <option value="woman">여자</option>
                </select>
              </div>
            </div>
            <div class="input_wrap">
              <label for="age" class="age_wrap">연령대<sup>*</sup></label>
              <div class="wrap_right age_wrap">
                <select name="age" class="age">
                  <option value="">연령대</option>
                  <option value="teens">10대</option>
                  <option value="twenties">20대</option>
                  <option value="thirties">30대</option>
                  <option value="fourties">40대</option>
                </select>
              </div>
            </div>
            <div class="input_wrap">
              <label for="camp_name" class="camp_name_wrap">캠페인 명<sup>*</sup></label>
              <div class="wrap_right camp_name_wrap">
                <input type="text" name="camp_name" class="camp_name">
              </div>
            </div>
            <div class="input_wrap">
              <label for="category" class="category_wrap">카테고리<sup>*</sup></label>
              <div class="wrap_right category_wrap">
                <select name="category" class="category">
                  <option value="">선택</option>
                  <option value="fashion">Fashion</option>
                  <option value="cosmetic">Cosmetic</option>
                  <option value="living">Living</option>
                  <option value="food">Food</option>
                </select>
              </div>
            </div>
            <div class="input_wrap">
              <label for="main_img" class="mimg_wrap">대표 이미지<sup>*</sup></label>
              <div class="wrap_right mimg_wrap ">
                <input value="파일선택" disabled="disabled" class="upload_name">
                <label for="main_img">업로드</label>
                <input type="file" name="main_img" accept="image/*" id="main_img" class="upload_hidden">
                <p>메인 페이지에 노출될 대표 이미지</p>
              </div>
            </div>
            <div class="input_wrap">
              <label for="sub_img" class="sub_wrap">상세 이미지<sup>*</sup></label>
              <div class="wrap_right sub_wrap">
                <input type="file" name="sub_img" accept="image/*"  class="sub_img">
                <input type="file" name="sub_img" accept="image/*"  class="sub_img">
                <input type="file" name="sub_img" accept="image/*"  class="sub_img">
                <p>캠페인 상세 페이지에 등록 될 이미지 &#40; 최대 개수&#58; 3개 &#41;</p>
              </div>
            </div>
            <div class="input_wrap">
              <label for="camp_description" class="camp_description_wrap">캠페인 설명<sup>*</sup></label>
              <div class="wrap_right camp_description_wrap">
                <textarea name="camp_description" cols="40" rows="8" class="camp_description"></textarea>
              </div>
            </div>
            <div class="input_wrap">
              <label for="mission_description" class="mission_description_wrap">미션 설명<sup>*</sup></label>
              <div class="wrap_right mission_description_wrap">
                <textarea name="mission_description" cols="40" 		rows="8" class="mission_description"></textarea>
              </div>
            </div>
            <div class="input_wrap">
              <label for="benefit_description" class="benefit_description_wrap">보상 설명<sup>*</sup></label>
              <div class="wrap_right benefit_description_wrap">
                <textarea name="benefit_description" cols="40" rows="8" class="benefit_description"></textarea>
              </div>
            </div>
            <div class="input_wrap">
              <label for="hash_tag" class="hash_tag_wrap">해시 태그<sup>*</sup></label>
              <div class="wrap_right hash_tag_wrap">
                <input type="text" name="hash_tag" class="hash_tag" placeholder="#패션#음식#화장품">
              </div>
            </div>
          </div>
        </form>
        <div>
          <input type="button" value="등록" name="camp_register_btn" class="camp_register_btn">
          <input type="button" value="취소" name="camp_cancel_btn" class="camp_cancel_btn">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "AdvRegistration"
}
</script>

<style scoped>
  @import '../../../assets/css/campaign.css';

  .camp_wrap{
    position: relative;
    border: 1px solid #ddd;
    border-bottom: none;
    border-radius: 4px;
    background-color: white;
  }
  .input_wrap{
    width: 100%;
  }
  .input_wrap:after{content: ''; display: block; clear: both;}
  .input_wrap > label{
    float: left;
    width: 25%;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    font-size: 15px;
    line-height: 70px;
    text-align: right;
    padding-right: 20px;
    color: #222;
  }
  .input_wrap > .wrap_right{
    float: left;
    border-bottom: 1px solid #ddd;
    width: 75%;
    padding: 0 15px;
  }
  sup{
    font-weight: bold;
    font-size: 5px;
    vertical-align: middle;
    margin-left: 8px;
  }
  .input_wrap .sns_wrap {height: 70px;}
  .input_wrap .sex_wrap{height: 70px;}
  .input_wrap .age_wrap{height: 70px;}
  .input_wrap .camp_name_wrap{height: 70px;}
  .input_wrap .category_wrap{height: 70px;}

  .input_wrap .sub_wrap{height: 80px;}
  .wrap_right.sub_wrap{padding: 15px;}

  .input_wrap .date_wrap{height: 140px;}
  .wrap_right.date_wrap{padding: 15px;}

  .input_wrap .camp_description_wrap{height: 165px;}
  .input_wrap .mission_description_wrap{height: 165px;}
  .input_wrap .benefit_description_wrap{height: 165px;}
  .input_wrap .hash_tag_wrap{height: 70px;}

  select{
    border: 1px solid #ddd;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 40px;
    padding-left: 5px;
    border-radius: 4px;
    font-size: 14px;
    line-height: 14px;
  }
  .camp_name{
    border: 1px solid #ddd;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 40px;
    padding-left: 10px;
    border-radius: 4px;
    font-size: 14px;
    line-height: 14px;
  }
  #campaign_image{
    font-size: 13px;
    margin-left: 10px;
  }
  .wrap_right p{
    margin-top: 8px;
    font-size: 13px;
    color: #858585;
  }
  .date_wrap > div{
    width: 800px;
    height: 33px;
    padding-left: 10px;
    margin-bottom: 6px;
  }
  .date_wrap > div > input{
    background-color: #dedede;
    padding-left: 10px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    line-height: 30px;
    height: 30px;
    margin-right: 6px;
    width: 200px;
    color: #555;
  }
  .date_wrap > div > label{
    display: inline-block;
    width: 80px;
  }
  textarea{
    width: 100%;
    height: 135px;
    padding: 10px;
    margin-top: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .hash_tag{
    border: 1px solid #ddd;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 40px;
    padding-left: 10px;
    border-radius: 4px;
    font-size: 14px;
    line-height: 14px;
  }

  .camp_wrap > div{
    position: absolute;
    left: 0;
    right: 0;
    bottom: -100px;
    text-align: center;
    /*	border: 3px solid blue;*/
  }
  .camp_wrap > div > input{
    width: 90px;
    height: 35px;
    margin-left: 10px;
    border: 1px solid #a8a8a8;
    border-radius: 5px;
    background-color: white;
  }
  .camp_wrap > div > input:hover{
    background-color: #a8a8a8;
    color: white;
  }

  /* 파일 css */
  .input_wrap .mimg_wrap{height: 90px;}
  .wrap_right.mimg_wrap{padding: 15px;}

  .wrap_right.mimg_wrap label {
    display: inline-block;
    padding: .5em .75em;
    color: #999;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: .25em;
  }

  .wrap_right.mimg_wrap input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;

  }

  .wrap_right.mimg_wrap .upload_name {
    display: inline-block;
    padding: .5em .75em; /* label의 패딩값과 일치 */
    font-size: inherit;
    font-family: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #f5f5f5;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: .25em;
    -webkit-appearance: none; /* 네이티브 외형 감추기 */
    -moz-appearance: none;
    appearance: none;
  }


  [type="date"] {
    background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
  }
  [type="date"]::-webkit-inner-spin-button {
    display: none;
  }
  [type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
</style>
