<template>
    <div id="main">
        <div class="container">
                <div class="campaign_info">
                    <h1 class="brand_tit" id=${campaignItem.id}>${campaignItem.advertiser_id}</h1>
                    <p class="campaign_tit">${campaignItem.name}</p>
                </div>

                <div class="confirm_info">
                    <h2 class="confirm_tit">
                        신청한 SNS
                    </h2>
                    <div class="confirm_content">
                        <p class="inf_info user_id" followers = ${req.session.user.sns_info.instagram_followers}>${req.session.user.id}</p>
                        <textarea name="memo" id="memo" class="memo" placeholder="${req.session.user.id}의 메모를 작성해주세요."></textarea>
                    </div>
                </div>

                <div class="confirm_info">
                    <h2 class="confirm_tit">
                        연락처
                    </h2>
                    <div class="confirm_content">
                        <p class="inf_info phone_num">${req.session.user.info.phone_num}</p>
                    </div>
                </div>

                <div class="confirm_info">
                    <h2 class="confirm_tit">
                        받는 분 이름
                    </h2>
                    <div class="confirm_content">
                        <p class="inf_info name">${req.session.user.info.name}</p>
                    </div>
                </div>

                <div class="confirm_info">
                    <h2 class="confirm_tit">
                        배송지 주소
                    </h2>
                    <div class="confirm_content">
                        <input type="text" name="post_code" class="post_code" id="post_code" placeholder="우편번호">
                        <button type="button" class="sch_add_btn">주소검색</button>
                        <br>
                        <input type="text" name="address" class="address" placeholder="주소를 입력해주세요.">
                    </div>
                </div>

                <div class="campaign_agree agree1">
                    <div class="agree_title">
                        <h2 class="agree_txt">등록하신 콘텐츠는 홍보나 필요에 의해 사용될 수 있습니다.</h2>
                        <div class="input_wrap">
                            <input type="checkbox" name="cam_agree" id="cam_agree">
                            <label for="cam_agree"></label>
                        </div>
                    </div>
                </div>

                <div class="campaign_agree agree2">
                <div class="agree_title">
                    <h2 class="agree_txt">Spinner 선정 되신 후 콘텐츠 미등록 시 혹은 다음과 같은 경우로 계약 위반 페널티가 적용됩니다.</h2>
                    <div class="input_wrap">
                        <input type="checkbox" name="cam_agree2" id="cam_agree2">
                        <label for="cam_agree2"></label>
                    </div>
                </div>
                <div class="agree_contents">
                    <ul class="agree_contents_txt">
                        <li>캠페인 선정 후 기간 내 포스팅를 등록하지 않는 경우</li>
                        <li>캠페인 가이드를 충분히 숙지하지 않고 캠페인을 신청한 경우</li>
                        <li> 포스팅 유지기간 1개월 미준수 및 계정 비공개 전환 등 인증이 불가능 한 경우</li>
                        <li>가이드에 맞지 않는 포스팅 재업로드 및 수정 요청을 수행하지 않는 경우</li>
                        <li>태그바이 매니저의 연락 시, 고의적인 연락 회피, 캠페인 진행에 영향을 미칠 정도로 늦게 연락을 주는 경우</li>
                        <li>제품협찬 캠페인의 경우, 제품 수령 후부터 어떠한 연락도 되지 않는 경우</li>
                        <li>현금지급 캠페인의 경우, 캠페인 기간 미준수시 제공금액 삭감 (3일 80% / 4일부터 70% / 7일이상 50%)</li>
                    </ul>
                </div>
            </div>

            <div class="campaign_agree agree3">
                <div class="agree_title">
                    <h2 class="agree_txt">다음과 같은 경우로 태그바이는 Spinner에게 손해배상 청구를 할 수 있습니다.</h2>
                    <div class="input_wrap">
                        <input type="checkbox" name="cam_agree3" id="cam_agree3">
                        <label for="cam_agree3"></label>
                    </div>
                </div>
                <div class="agree_contents">
                    <ul class="agree_contents_txt">
                        <li>모든 캠페인은 미포스팅 시 해당 캠페인 건에 대한 손해배상청구 가능</li>
                        <li>제품협찬 캠페인의 경우, 미포스팅시 제품회수 및 해당 캠페인 건에 대한 손해배상 청구 가능 (제품 훼손 및 분실시 제품비 청구)</li>
                        <li>주소 입력 오류로 인한 제품 미수령 또는 분실 시, 직접 제품을 구매하여 포스팅을 올려주셔야 합니다.</li>
                    </ul>
                </div>
            </div>
            
            <div class="btn_wrap">
                <button type="button" class="campaign_agree_btn">동의 후 신청하기</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'CampaignApply'
    }
</script>

<style scoped>
    /* #main{margin-left: 220px;} */
    .container{
        /* width: 80%;
        margin: 0 auto; */
        padding: 20px 150px;
    }

    .campaign_info{height: 80px;}
    .brand_tit{
        font-size: 18px; 
        font-weight: 400;
        line-height: 25px;
    }
    .campaign_tit{
        font-size: 25px;
        font-weight: bold;
    }

    .confirm_info{
        height: auto;
        margin-bottom: 30px;
    }
    .confirm_info:nth-child(2){margin-bottom: 0;}
    .confirm_info:nth-child(5) .confirm_content{margin-top: 20px;}
    .confirm_tit{
        width: 100%;
        margin: 10px 0;
        font-size: 17px;
        line-height: 50px;
        color: black;
        border-bottom: 1px solid black;
    }
    .inf_info{margin-bottom: 10px;}
    .memo{
        margin: 0;
        width: 100%;
        height: 110px;
        border-radius: 5px;
        padding: 10px;
        border: 1px solid #ccc;
    }
    .agree_txt, .input_wrap{display: inline-block;}
    .agree_title{padding: 20px;}
    .agree_contents{
        padding: 0 0 20px 0;
    }
    .input_wrap{float: right;}
    .campaign_agree{
        width: 100%;
        border-radius: 10px;
        margin-top: 10px;
        background-color: white;
        box-shadow: 0 1px 4px 0 #e5e9f2;
    }
    .agree1{margin-top: 80px;}
    .agree_contents_txt{
        white-space: pre-line;
        padding: 0 70px;
    }
    .agree_contents_txt > li{
        position: relative;
    }
    .agree_contents_txt > li::before{
        content: '\2600';
        position: absolute;
        left: -30px
    }
    .btn_wrap{
        text-align: center;
        margin: 100px 0
    }
    .campaign_agree_btn{
        width: 300px;
        height: 50px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
    }
    .container button{
        border: none;
        background-color: #00aa87;
        color: #fff;
    }
    input[type="text"]{
        width: 500px;
        height: 40px;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    input:focus{border: 1px solid #00aa87;}
    .post_code{width: 414px !important;}
    .sch_add_btn{
        width: 76px;
        height: 40px;
        margin-left:5px;
        border-radius: 5px;
    }
</style>