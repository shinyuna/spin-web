<template>
    <div id="main">
        <div class="container">
            <div class="campaign_main">
                <img src=${campaignItem.img} alt="캠페인 메인이미지">
                <div class="mask">
                    <h1 class="brand_tit">${campaignItem.advertiser_id}</h1>
                    <p class="campaign_tit">${campaignItem.name}</p>
                    <ul class="campaign_info">
                        <li>
                            <p>성별</p>
                            <p>${campaignItem.info.sex}</p>
                        </li>
                        <li>
                            <p>연령</p>
                            <p>${campaignItem.info.age}</p>
                        </li>
                        <li>
                            <p>SNS</p>
                            <p>${campaignItem.sns_type}</p>
                        </li>
                        <li>
                            <p>카테고리</p>
                            <p>${campaignItem.category}</p>
                        </li>
                        <li>
                            <p>신청 기간</p>
                            <p>${formatBackDate(campaignItem.apply_start_date)} ~ ${formatBackDate(campaignItem.apply_end_date)}</p>
                        </li>
                        <li>
                            <p>발표 일</p>
                            <p>${formatBackDate(campaignItem.notice_date)}</p>
                        </li>
                        <li>
                            <p>포스팅 기간</p>
                            <p>${formatBackDate(campaignItem.post_start_date)} ~ ${formatBackDate(campaignItem.post_end_date)}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 캠페인 소개 -->
            <div class="campaign_article">
                <h2 class="detail_tit">
                    상세 이미지
                </h2>
                <div class="detail_content">
                    ${campaignItem.sub_img === null? `상세이미지가 없습니다` : go(campaignItem.sub_img, map((subImg) => ` <img src=${subImg}
                        alt="캠페인 상세이미지">`))}
                </div>
            </div>

            <div class="campaign_article">
                <h2 class="detail_tit">
                    제품 설명
                </h2>
                <div class="detail_content">
                    <p class="pd_info">
                        ${campaignItem.info.camp_description}
                    </p>
                </div>
            </div>

            <div class="campaign_article">
                <h2 class="detail_tit">
                    캠페인 미션
                </h2>
                <div class="detail_content">
                    <p class="pd_info">
                        ${campaignItem.info.mission_description}
                    </p>
                </div>
            </div>

            <div class="campaign_article">
                <h2 class="detail_tit">
                    필수 해시태그
                </h2>
                <div class="detail_content">
                    <p class="pd_info">
                        ${campaignItem.info.hash_tag}
                    </p>
                </div>
            </div>

            <div class="campaign_article">
                <h2 class="detail_tit">
                    켐페인 보상
                </h2>
                <div class="detail_content">
                    <p class="pd_info">
                        ${campaignItem.info.benefit_description}
                    </p>
                </div>
            </div>
            <div class="btn_wrap">
                <!-- <button type="button" class=${go(Object.keys(campaignItem.influencer_id), filter(id => id === user.id), a => a.length === 0) ? "submit_btn" : "submit_btn hidden"} campaign_id = ${campaignItem.id}>신청하기</button> -->
                <button type="button" class="submit_btn">신청하기</button> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #main{
        /* margin-left: 220px; */
    }

    .container{
        padding: 20px 150px;
    }

    .campaign_main{
        position: relative;
        width: 100%;
        height: 550px;
        overflow: hidden;
    }
    .campaign_main > img{
        width: 100%;
    }
    .mask{
        position: absolute;
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        /* height: 60%; */
        top: 50%;
        left: 0;
        transform: translate(0,-50%)
    }
    .mask  *{
        color: #fff;
        text-align: center;
    }
    .brand_tit{
        font-size: 1.9em;
        line-height: 2.3em;
    }
    .campaign_tit{
        font-size: 1.7em;
        line-height: 2em;
    }
    .campaign_info > li{
        margin-top: 10px;
    }
    .campaign_info > li > p {
        display: inline-block;
    }
    .campaign_info > li > p:nth-child(odd){
        width: 150px;
        position: relative;
    }
    .campaign_info > li > p:nth-child(odd)::after{
        content: '\2600';
        position: absolute;
        right: 0;
        color: #fff;;
    }
    .campaign_info > li > p:nth-child(even){
        width: 250px;
        text-align: center;
    }

    .campaign_article{
        height: auto;
    }
    .detail_tit{
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin: 20px 0;
        font-size: 1.3em;
        border-bottom: 1px solid #293150;
        color: #293150;
    }
    .detail_content > img{
        width: 100%;
    }
    .pd_info {
        white-space: pre-line;
        padding: 0 20px;
    }

    .btn_wrap{
        text-align: center;
        margin-top: 70px;
        margin-bottom: 40px;
    }
    .submit_btn{
        width: 370px;
        height: 40px;
        border-radius: 30px;
        border: none;
        color: #fff;
        background-color: #9b9b9b;
    }
    .submit_btn:hover{
        background-color: transparent;
        color: #108a7a;
        border: 2px solid #108a7a;
        transition: all 0.3s ease;
    }

    .hidden{
        display: none;
    }
</style>