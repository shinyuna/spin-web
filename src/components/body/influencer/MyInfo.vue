<template>
    <div id="main">
        <div class="container">
            <div class="account_wrap">
                <h2 class="set_tit">
                    계정정보
                </h2>
                <div class="setting">
                    <label for="id">아이디</label>
                    <input type="text" name="id" id="id" readonly value="${user.id}">

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

            <div class="personal_wrap">
                <h2 class="set_tit">
                    개인정보
                </h2>
                <div class="setting">
                    <label for="name">이름</label>
                    <input type="text" name="name" id="name" placeholder="본명" value="${user.info.name}">
                    <label for="nickname">닉네임</label>
                    <input type="text" name="nickname" id="nickname" placeholder="활동 시 사용이름"  value="${user.info.nickname}">
                    <label for="birth">생년월일</label>
                    <input type="text" name="birth" id="birth" placeholder="ex. 19900216" value="${user.info.birth}">
                    <!--
                    <label for="phone_num">핸드폰 번호</label>
                    <input type="text" name="phone_num" id="phone_num" placeholder="ex. 01012341234" value="${user.info.phone_num}">
                    -->
                </div>
                <div class="btn_wrap">
                    <button type="button" class="modify_psInfo_btn">변경하기</button>
                </div>
            </div>

            <div class="sns_warp">
                <h2 class="set_tit">
                    SNS 연동
                </h2>
                <div class="setting">
                    <div class="profile_img">
                        <img src="${instagramInfo.profile_picture_url}" alt="instagram_profile_img" class="instagram_profile_img">
                    </div>
                    <div class="profile_info">
                        <div class="instagram_change_btn info_1">
                            <i class="fab fa-instagram inst_logo"></i>
                            <h1 class="instagram_username">${instagramInfo.username}</h1>
                        </div>
                        <ul class="info_2">
                            <li>게시물 <strong class="instagram_media_count">${instagramInfo.media_count}</strong></li>
                            <li>팔로워 <strong class="instagram_followers_count">${instagramInfo.followers_count}</strong></li>
                            <li>팔로우 <strong class="instagram_follows_count">${instagramInfo.follows_count}</strong></li>
                            <input type="hidden" name="instagram_access_token" value="${user.sns_info.instagram_access_token}">
                            <input type="hidden" name="instagram_user_id" value="${user.sns_info.instagram_id}" >
                            <input type="hidden" name="instagram_user_birthday" value="${user.sns_info.instagram_user_birthday}">
                        </ul>
                        <button type="button" class="sns_change_btn">변경</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'InfMyInfo'
    }
</script>

<style scoped>
    #main{
        margin-left: 220px;
    }
    .container{
        width: 100%;
        position: relative;
        padding: 0 0 200px 0;
    }
    .container > div{
        display: block;  
        position: relative;
        top: 50px; left: 50%;
        transform: translateX(-50%);
        width: 80%;
        max-width: 800px;
        min-width: 600px;
        margin: 0 0 20px 0;
        padding: 0 30px 30px;
        border-radius: 8px;
        box-shadow: 0 1px 4px 0 #e5e9f2;
        background-color: #fff;
    }
    .set_tit{
        height: 70px;
        line-height: 70px;
        font-size: 1.3em;
    }
    .setting > input{
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
    .gen_der > label{
        display: inline-block;
        margin-left: 30px;
        margin-top: 10px;
    }
    .container button{
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
    .btn_wrap{
        margin-top: 30px;
    }

    .name_wrap  input{
        margin-bottom: 10px;
    }

    .error{
        color: red;
        font-size: 12px;
    }

    /* sns instagram */
    .profile_img{
        float: left;
        width: 150px;
        height: 150px;
        border-radius: 100%;
        overflow: hidden;
        border: 1px solid #ccc;
    }
    .profile_img > img{
        width: 100%;
    }
    .profile_info{
        padding: 10px 10px 0 200px;
    }
    .info_1{
        background: linear-gradient(-45deg, #4e70d4, #ba3bbe, #fbc94c, #f86e3f, #cc36a4);
        background-size: 400% 400%;
        -webkit-animation: Gradient 5s ease infinite;
        -moz-animation: Gradient 5s ease infinite;
        animation: Gradient 5s ease infinite;
        /* background-color: #c93681; */
        padding: 15px 30px;
        border-radius: 15px;
        cursor: pointer;
    }
    @-webkit-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
    @-moz-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
    @keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    .info_1 > img{
        vertical-align: middle;
    }
    .info_1 > h1{
        display: inline-block;
        color: #fff;
        padding: 0 10px;
        line-height: 25px;
        font-size: 1.3em;
        font-weight: 500;
    }
    .inst_logo{
        display: inline-block;
        text-align: center;
        font-size: 16px;
        vertical-align: middle;
        border-right: 2px solid rgba(255,255,255,.5);
        color: #fff;
        padding-right: 3%;
    }
    .info_2 {
        margin-top: 30px;
        width: 100%;
        padding: 0 30px;
    }
    .info_2 > li{
        width: 32%;
        display: inline-block;
        font-size: 16px;
    }
    .sns_change_btn{display: none;}
    .sns_warp{height: 250px;}

    /* 반응형 */
    @media screen and (max-width:767px){
        #header{
            position: relative;
            z-index: 100;
            box-shadow: 0 4px 20px rgba(124, 124, 124, 0.13);
            height: 56px;
        }
        .header_gnb{padding-right: 0;}
        .header_gnb li{padding: 0 2px;}
        .header_img, #header p{display: none;}
        .breadcrumbs{display: none;}
    /*공통내용끝*/
        #nav{
            position: absolute;
            z-index: 1000;
            left: -220px;
            transition: all 0.5s ease;
        }
        #nav.on{
            position: fixed;
            left: 0;
            transition: all 0.5s ease;
        }
        #nav > a{
            display: block;
            position: absolute;
            left: 240px;
            top: 15px;
            z-index: 10;
        }
        #nav .open{
            background: url(https://s3.ap-northeast-2.amazonaws.com/spin-protocol-resource/resources/images/open.png)no-repeat;
            background-size: 100% auto;
            width: 22px;
            height: 22px;
        }
        #nav .close{
            background: url(https://s3.ap-northeast-2.amazonaws.com/spin-protocol-resource/resources/images/close_2.png)no-repeat;
            background-size: 100% auto;
            width: 22px;
            height: 22px;
            left: 175px;
        }
        .logo{height: 56px;}
        .logo > a{
            width: 130px;
            margin-right: 40px;
        }
        #main{
            margin-left: 0;
            padding: 0 0 0;
            position: relative;
            z-index: 0;
            width: 100%;
        }
        .container > div{
            margin: 0 0 20px 0;
            padding: 0 20px 30px 20px;
            width: 100%;
            min-width: 0;
            border-radius: 4px;
        }
        .profile_img{
            width: 70px;
            height: 70px;
        }
        .profile_info{
            width: 75%;
            padding:0;
            position: relative;
            left: 100px;
        }
        .info_1{
            position: relative;
            padding: 5px 0;
            height: 40px;
        }
        .info_2{padding: 0 20px;}
        .info_2 > li{font-size: 14px;}
        
        .sns_warp{height: 270px;}
        .container .sns_change_btn{
            position: absolute;
            left: 0;
            width: 100%;
            bottom: -70px;
        }
    }

    @media screen and (min-width:768px) and (max-width:1023px){
        #main{margin-left: 100px;}
        .header_gnb{margin-right:25px;}
        #nav{width: 100px;}
        .logo{display: block; height: 80px;}
        .logo > a{width: 100px; height: 70px;}
        .logo > a > img{width: 94px;}
        .nav_on > a::after{display: none;}
        .nav_gnb > li{position: relative; height: 90px;}
        .nav_gnb > li > a{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 11px;
            line-height: 20px;
            text-align: center;
            padding: 0 19px;
        }
        .nav_gnb > li.setting{height: 130px;}
        .setting > a{padding: 20px 39px !important ;}
        .setting > a::before{
            content: '';
            background: url(https://s3.ap-northeast-2.amazonaws.com/spin-protocol-resource/resources/images/icon-settings/ic-settings%402x.png)no-repeat;
            background-size: 35px;
            width: 35px;
            height: 35px;
            top: -17px;
            left: 33px;
        }
    /*공통내용끝*/
        .container > div{
            width: 85%;
            max-width: 600px;
            min-width: 550px;
        }
        .sns_warp{height: 300px;}
        .container .sns_change_btn{
            width: 100%;
            position: relative;
            display: block;
            bottom: -30px;
        }
    }

    @media screen and (min-width:1024px) and (max-width:1599px){
        .header_gnb{margin-right:25px;}
        .sns_warp{height: 300px;}
        .profile_img{
            position: relative;
            top: 20px;
        }
        .container .sns_change_btn{
            width: 100%;
            position: relative;
            bottom: -30px;
        }
    }
    @media screen and (min-width:1600px) { /*기본*/
        .sns_warp{height: 290px;}
        .container .sns_change_btn{
            width: 530px;
            position: absolute;
            bottom: 30px;
        }
    }
</style>