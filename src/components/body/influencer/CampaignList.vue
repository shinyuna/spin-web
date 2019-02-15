<template>
    <div id="main">
        <div class="breadcrumbs">
            <router-link to="/">홈</router-link>
            <router-link to="/influencer/inf_campaign_list">캠페인 리스트</router-link>
        </div>
        <div>
            <table class="filter_camp">
                <tr>
                    <th>카테고리</th>
                    <td>
                        <select name="category" class="category">
                            <option value="">선택</option>
                            <option value="fashion">Fashion</option>
                            <option value="cosmetic">Cosmetic</option>
                            <option value="living">Living</option>
                            <option value="food">Food</option>
                        </select>
                    </td>
                    <th>SNS 타입</th>
                    <td>
                        <select name="sns_type" class="sns_type">
                            <option value="">SNS</option>
                            <option value="instagram">인스타그램</option>
                            <option value="facebook">페이스북</option>
                            <option value="blog">블로그</option>
                            <option value="youtube">유튜브</option>
                        </select>
                    </td>
                    <th>성별</th>
                    <td>
                        <select name="sex" class="sex">
                            <option value="">성별</option>
                            <option value="man">남자</option>
                            <option value="woman">여자</option>
                        </select>
                    </td>  
                    <th>연령대</th>
                    <td>
                        <select name="age" class="age">
                            <option value="">연령대</option>
                            <option value="teens">10대</option>
                            <option value="twenties">20대</option>
                            <option value="thirties">30대</option>
                            <option value="fourties">40대</option>
                        </select>
                    </td>             
                    <td>
                        <button class="filter_button">검색</button>
                    </td>             
                </tr>
            </table>
        </div>
        <div class="container">
            ${go(campaignList, TMPL.InfCampaignList.list)}
        </div>
    </div>

</template>

<script>
    export default {
        name: 'CampaignList'
    }
</script>

<style scoped>
    /* main */
    #main{
        margin-left: 220px;
    }
    .container{
        /* position: relative; */
        width: 100%;
        padding: 40px;
        margin: 0 auto;
    }
    .breadcrumbs{
        height: 70px;
        line-height: 70px;
        padding: 0 30px;
    }
    .breadcrumbs a{
        position: relative;
        padding-right: 23px;
        color: #cccccc;
        font-weight: 600;
        font-size: 13px;
    }
    .breadcrumbs a:after{
        content: '';
        position: absolute;
        top:3px; right: 4px;
        width: 10px;
        height: 15px;
        background: url(https://s3.ap-northeast-2.amazonaws.com/spin-protocol-resource/resources/images/arrow.png)no-repeat;
        background-size: 8px;
        opacity: 0.2;
    }
    .breadcrumbs a:last-child{
        color: #222;
    }
    .breadcrumbs a:last-child:after{
        content: none;
    }

    .campaign{
        position: relative;
        float: left;
        width: 350px;
        padding: 10px;
        overflow: hidden;
        transition: 0.3s;
        margin-bottom: 20px;
        margin-left: 20px;
    }
    .campaign_img{
        width: 100%;
        border-radius: 15px;
    }
    .campaign_info{
        font-weight: 600;
    }
    .campaign >a:hover::after{
        content: "신청하기";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        text-align: center;
        line-height: 263px;
        top: 0;
        left: 0;
        font-size: 1.2em;
        background-color: rgba(0,0,0,0.5);
        color: #fff;
    }
    table {
        width: 80%;
        background-color: white;
        border-radius: 7px;
        box-shadow: 0 1px 4px 0 #e5e9f2;
        padding: 20px 40px 20px 30px;
        margin: 0 auto;

    }
    .filter_button{
        width: 80px;
        height: 30px;
        border-radius: 10px;
        border: none;
        color: #fff;
        background-color: #9b9b9b;
    }
    .filter_button:hover{
        background-color: transparent;
        color: #108a7a;
        border: 2px solid #108a7a;
        transition: all 0.3s ease;
    }
</style>