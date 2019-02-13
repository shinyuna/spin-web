<template>
  <div id="main">
    <div class="container">
      <div class="breadcrumbs">
        <router-link to="/advertiser/adv_campaign_management">홈</router-link>
        <router-link to="/advertiser/adv_campaign_management">캠페인 리스트</router-link>
      </div>
      <div class="state_wrap">
        <h2 class="hide">전체 프로세스</h2>
        <ul class="state_box">
          <li>
            <a>
              <span class="state">전체</span>
              <span class="state_all"></span>
            </a>
          </li>
          <li>
            <a>
              <span class="state">대기중</span>
              <span class="state_wait"></span>
            </a>
          </li>
          <li>
            <a>
              <span class="state">진행중</span>
              <span class="state_progress"></span>
            </a>
          </li>
          <li>
            <a>
              <span class="state">완료</span>
              <span class="state_complete"></span>
            </a>
          </li>
        </ul>
      </div>
      <div class="search_wrap">
        <h2>상세검색</h2>
        <div class="search_word">
          <span>검색어</span>
          <div class="search_inbox">
            <input type="text" name="search_txt" class="search_txt" placeholder="상품명 검색">
            <button type="button" class="search_icon"></button>
          </div>
        </div>
        <div class="search_check">
          <span>판매상태</span>
          <div class="check_box">
            <div class="check_tab">
              <input type="checkbox" name="sale_chk" id="wait" value="wait" class="checkbox">
              <label for="wait">대기중</label>
            </div>
            <div class="check_tab">
              <input type="checkbox" name="sale_chk" id="progress" value="progress" class="checkbox">
              <label for="progress">진행중</label>
            </div>
            <div class="check_tab">
              <input type="checkbox" name="sale_chk" id="sale_complete" value="sale_complete" class="checkbox">
              <label for="sale_complete">판매완료</label>
            </div>
          </div>
        </div>
      </div>
      <div class="list_wrap">
        <h2>캠페인 리스트</h2>
        <table class="camp_table">
          <caption>캠페인 리스트 등록안내 게시판</caption>
          <thead>
          <tr>
            <th scope="col" class="num">NO</th>
            <th scope="col" class="campaign_name">캠페인 명</th>
            <th scope="col" class="apply_term">신청기간</th>
            <th scope="col" class="apply_count ud">신청인원</th>
            <th scope="col" class="start_date">캠페인 등록일</th>
            <th scope="col" class="camp_state ud">상태</th>
          </tr>
          </thead>
          <tbody class="camp_list">
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AdvManagement"
    }
</script>

<style scoped>
@import '../../../assets/css/adv_campaign.css';
  .state_wrap{position: relative;}
  .state_wrap:after{content: ''; display: block; clear: both;}
  .state_box li > a{
    width: calc((100% - 30px)/4);
    box-sizing: border-box;
    display: block;
    float: left;
    background-color: white;
    padding: 29px 22px 28px 25px;
    box-shadow: 0 1px 4px 0 #e5e9f2;
    border-radius: 5px;
  }
  .state_box li+li > a{margin-left: 10px;}
  .state_box .state{
    font-size: 14px;
    line-height: 20px;
    color: #999;
  }
  .state_box span{
    font-size:30px;
    line-height: 33px;
    display: block;
  }
  .search_wrap{
    position: relative;
    background-color: white;
    height: 150px;
    border-radius: 5px;
    box-shadow: 0 1px 4px 0 #e5e9f2;
    padding: 25px 0 0 25px;
  }
  .section_tit{
    position: absolute;
    top: -40px;
    left: 0;
  }
  .search_wrap > div{
    position: relative;
    height: 55px;
  }
  .search_wrap > div > div{
    position: absolute;
    left: 93px;
    top: 0;
  }
  .search_wrap > div > span{
    font-size: 16px;
    line-height: 45px;
    font-weight: bold;
  }
  .search_inbox .search_txt{
    width: 544px;
    font-size: 14px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding-left: 15px;
    letter-spacing: -1px;
  }
  .search_icon{
    position: relative;
    left: -34px;
    top: 4px;
    width: 18px;
    height: 18px;
    border: none;
    background: url(https://s3.ap-northeast-2.amazonaws.com/spin-protocol-resource/resources/images/search.png)no-repeat;
    background-size: 18px 18px;
  }

  .check_tab{
    display: inline-block;
    line-height: 45px;
    margin-right: 30px;
    font-size: 14px;
  }
  .campaign_name p{
    padding-left: 40px;
  }
  .campaign_name img{
    position: absolute;
    top: 25px;
    width: 35px;
    height: 35px;
    border: 1px solid rgba(229, 233, 242, 0.5);
  }
  .camp_state span{
    display: inline-block;
    font-size: 11px;
    line-height: 12px;
    border-radius: 20px;
    padding: 5px 0;
    width: 50px;
    text-align: center;
  }
</style>
