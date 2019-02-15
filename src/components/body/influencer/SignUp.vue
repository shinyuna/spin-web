<template>
    <div id="main">
        <div class="container">
            <div class="signup_form">
                <div class="info">
                <!-- 개인정보 입력 폼 -->
                    <h2 class="form_tit">개인정보 입력</h2>
                        <div class="form_left">
                            <div class="input_wrap"> 
                                <label for="profile_pic">사진(1MB 이하)<sup>*</sup></label>
                                <input type="file" name="profile_pic" id="profile_pic">
                                <img id="profile_image" src="#" width="50" height="50" alt="your image"/>
                            </div>
                            <div class="input_wrap">
                                <label for="name">이름(본명)</label>
                                <input type="text" name="name" id="name">
                            </div>
                        </div>
                        <div class="form_right">
                            <div class="input_wrap">
                                <label for="nickname">닉네임<sup>*</sup></label>
                                <input type="text" name="nickname" id="nickname">
                            </div>
                            <div class="input_wrap">
                                <label for="birth">생년월일<sup>*</sup></label>
                                <input type="text" name="birth" id="birth" placeholder="생년월일 8자리">
                            </div>
                            <div class="select_box">
                                <label for="gender" class="gen_la">성별<sup>*</sup></label>
                                <span>
                                    <input type="radio" name="gender" value="man" id="man" checked>
                                    <label for="man">남</label>
                                </span>
                                <span> 
                                    <input type="radio" name="gender" value="woman" id="woman">
                                    <label for="woman">여</label> 
                                </span>
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
                <!-- sns 연동 -->
                <div class="sns_con">
                    <h2 class="form_tit">SNS</h2>
                    <div class="form">
                        <button type="button" class="instagram_con_btn">instagram 연결하기</button>
                        <div class="input_wrap hidden sns_wrap">
                            <img class="instagram_profile_img" name="instagram_profile_img"/>
                            <div class="profile_txt">
                                <img src="https://s3.ap-northeast-2.amazonaws.com/spin-protocol-resource/resources/images/instagram/instagram_color.png" alt="인스타그램 로고">
                                <span class="username" name="instagram_username"></span>
                                <span>게시물<strong class="media_count" name="instagram_media_count"></strong></span>
                                <span>팔로워<strong class="followers_count" name="instagram_followers_count"></strong></span>
                                <span>팔로우<strong class="follows_count" name="instagram_follows_count"></strong></span>
                                <input type="hidden" name="instagram_access_token" class="instagram_access_token">
                                <input type="hidden" name="instagram_user_id" class="instagram_user_id">
                                <input type="hidden" name="instagram_user_birthday" class="instagram_user_birthday">    
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sns 끝 -->
                <div class="phone_cer">
                    <h2 class="form_tit">휴대폰 인증</h2>
                        <div class="form">
                            <div class="input_wrap">
                                <label for="phone_num">휴대폰 번호<sup>*</sup></label>
                                <input type="text" name="phone_num" id="phone_num" class="phone_num">
                                <button type="button" class="phone_chk_btn">본인인증</button>
                                <p class="error phone_num_error"></p>
                            </div>
                            <div class="input_wrap hidden">
                                <label for="phone_phone_certification_num">인증번호<sup>*</sup></label>
                                <input type="text" name="phone_certification_num" id="phone_certification_num" class="phone_certification_num">
                                <span class="error code_error"></span>
                                <input type="hidden" name="user_code" class="user_code">
                            </div>
                        </div>
                </div>
                <!-- 이용약관 -->
                <div class="term_inf">
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
        name: 'InfSignUp'
    }
</script>

<style scoped>
@import '../../../assets/css/signup.css';
    .input_wrap{
        display: inherit;
        padding-bottom: 10px;
    }
    /* 회원정보 */
    .info{
        width: 970px;
    }
    /* 계정정보 */
    .account{
        width: 472px;
    }
    .account .input_wrap{
        padding-bottom: 0;
    }
    .sns_con, .phone_cer, .term_inf{
        float: left;
        width: 470px;
        height: 345px;
        margin-top: 20px;
        border-radius: 8px;
        background-color: #ffffff;
    }
    .term_inf{
        width: 472px;
        float: right;
    }
    .agree{
        padding-left: 40px;
    }
    .agree > ul{
        position: relative;
        width: 390px;
        height: 225px;
        margin: 0;
        padding: 10px 50px;
        border-radius: 4px;
        background-color: #f9faff;
    }
    .agree > ul > li{
        margin-top: 5px;
    }
    .agree > ul > li > label > a{
        text-decoration: underline;
    }

    .phone_cer{
        margin-left: 30px;
    }

    .select_box > label{
        padding-bottom: 20px;
    }
    .select_box > span > label{
        display: inline-block;
        padding-right: 20px;
        padding-bottom: 20px;
    }

    .sns_con > .form{
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 75px;
    }
    .instagram_con_btn{
        width: 280px;
        height: 60px;
    }
    .instagram_con_btn:hover{
        background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
        background-size: 400% 400%;
        -webkit-animation: Gradient 3s ease infinite;
        -moz-animation: Gradient 3s ease infinite;
        animation: Gradient 3s ease infinite;
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

    .hidden{
        display: none;
    }

    .sns_con{
        background-color: white;
        border-radius: 8px;
    }
    .form_tit{
        font-size: 22px;
    }
    .form{
        position: relative;
    }

    .instagram_profile_img{
        position: relative;
        top: -47px;
        left: -150px;
        width: 100px;
        height: 100px;
    }
    .profile_txt{
        width: 300px;
        position: absolute;
        top: 30px;
        left: 160px;
        text-align: left;
        font-size: 0;
    }
    .profile_txt img{
        position: relative;
        left: 0; top: 25px;
        width: 25px;
        height: 25px;
    }
    .profile_txt .username{
        display: block;
        text-align: left;
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 15px;
        margin-left: 35px;
    }
    .profile_txt strong{
        padding: 10px;
    }

    /* 반응형 */
    @media screen and (max-width:767px){
        #header{height: 56px;}
        #header .logo{
            padding-left: 8px;
            height: 56px;
        }
        .title{
            margin-right: 8px;
            line-height: 56px;
        }
        #main{padding: 0;}
        .container{
            width: 100%;
            min-width: 0;
        }
        .form_tit{font-size: 18px;}
        .clear{display: none;}
        .signup_form{max-width: 767px;}
        .signup_form > div{
            float: none;
            margin-top: 15px;
            max-width: 728px;
            min-width: 360px;
            border-radius: 0;
        }
        .signup_form > .info{
            width: 100%;
            height: 420px;
            margin-top: 0;
        }
        .info:after{content: ''; display: block; clear: both;}
        .form_left{
            padding: 0 20px;
            width: 100%;
        }
        .form_left:after{content: ''; display: block; clear: both;}
        .form_left > .input_wrap{display: block;}
        .event, .industry, .post_code{width: 100% !important;}
        .form_left > .input_wrap input[type="text"]{width: 100%;}
        .form_right{
            float: left;
            padding: 0 20px;
            width: 100%;
            font-size: 0;
        }
        .form_right > .input_wrap{display: block;}
        .form_right > .input_wrap input[type="text"]{width: 100%;}
        .form_right > .input_wrap:nth-child(1),
        .form_right > .input_wrap:nth-child(2),
        .form_right > .input_wrap:nth-child(3)
        {width: calc((100% - 15px) / 2); display: inline-block;}
        .form_right > .input_wrap:nth-child(4) .post_code
        {width: 48% !important;}
        .form_right > .input_wrap:nth-child(2) input[type="text"],
        .form_right > .input_wrap:nth-child(2) label
        {margin-left: 15px;}
        .input_margin{margin: 0;}
        
        .account{width: 100%; height: 330px;}
        .account .form{padding: 0 20px;}
        .account > div{font-size: 0;}
        .account > div > div{
            width: 100%;
            font-size: 0;
        }
        .account .input_wrap input[type="text"]{
            width: calc(100% - 86px) !important;
            display: inline-block;
        } 
        input[type="password"]{width: 100%; }
        .account .form > .input_wrap:nth-child(2),
        .form > .input_wrap:nth-child(3){
            width: calc((100% - 15px) / 2);
            display: inline-block;
            font-size: 0;
        }
        .account .form > .input_wrap:nth-child(3) input[type="password"],
        .account .form > .input_wrap:nth-child(3) label
        {margin-left: 15px;}
        
        .sns_con{
            width: 100%;
            height: 300px;
        }
        .sns_con > .form{
            position: relative;
            top: 20%;
            transform: translateY(-20%);
            padding: 0;
        }
        .phone_cer{
            display: block;
            float: none;
            width: 100%;
            height: 200px;
            padding: 0;
            margin: 0;
        }
        .phone_cer .form{padding: 0 20px;}
        .phone_cer .input_wrap{font-size: 0;}
        .phone_cer .input_wrap input[type="text"]{
            width: calc(100% - 86px) !important;
            display: inline-block;
        } 
        .term_inf{
            width: 100%;
            height: 450px;
            padding: 0;
        }
        .agree{padding: 0;}
        .all_agree{padding-left: 20px;}
        .agree > ul{
            width: 100%;
            height: 300px;
            margin: 0;
            padding: 20px 40px;
            background-color: white;
        }
        .agree > ul > li{width: 100%; padding-bottom: 10px;}
        .agree > ul > li a{font-size: 13px;}
        .submit_btn{margin: 40px 0;}
    }
    @media screen and (min-width:768px) and (max-width:1023px){
        #main{padding: 20px 20px 0;}
        .container{
            width: 100%;
            min-width: 0;
        }
        .form_tit{font-size: 20px;}
        .signup_form{
            max-width: 1000px;
            min-height: 728px;
        }
        .signup_form > div{margin-top: 0; float: none;}
        .signup_form > .info{
            display: block;
            width: 100%;
            height: 360px;
        }
        .info:after{content: ''; display: block; clear: both;}
        .info > div{width: calc((100% - 20px)/2);}
        .info .input_wrap input[type="text"]{width: 100%;}
        .info .form_left .input_wrap:nth-child(2){
            width: 90%;
            position: absolute;
            top: 90px;
        }
        .form_left{padding: 0 0 0 40px; position: relative;}
        .form_right{padding: 0 40px 0 0;}
        .account{
            position: relative;
            top: 20px;
            width: 100%;
            height: 340px;
            display: block;
        }
        .account:after{content: ''; display: block; clear: both;}
        .account > div{font-size: 0;}
        .account > div > div{
            width: 100%;
            font-size: 0;
        }
        .account .input_wrap input[type="text"]{
            width: calc(100% - 86px) !important;
            display: inline-block;
        } 
        input[type="password"]{width: 100%; }
        .account .form > .input_wrap:nth-child(2),
        .form > .input_wrap:nth-child(3){
            width: calc((100% - 15px) / 2);
            display: inline-block;
            font-size: 0;
        }
        .form > .input_wrap:nth-child(3) input[type="password"],
        .form > .input_wrap:nth-child(3) label{margin-left: 15px;}        
        .sns_con{
            /* float: left; */
            position: relative;
            top: 40px; left: 0px;
            display: inline-block;
            width: calc((100% - 20px)/ 2);
            height: 280px;
            vertical-align: top;
        }
        .sns_con:after{content: ''; display: block; clear: both;}
        .sns_con .form{
            position: relative;
            padding: 0;
            top: 20%;
            transform: translateY(-20%);
        }
        body .phone_cer{
            display: inline-block;
            position: relative;
            top: 40px; left: 20px;
            width: calc((100% - 20px)/ 2);
            height: 280px;
            margin: 0;
        }
        .phone_cer input[type="text"]{width: 100% !important;}
        .phone_chk_btn{margin: 10px 0 0;}
        .term_inf{
            position: relative;
            top: 60px;
            width: 100%;
            height: 340px;
            margin-bottom: 200px;
        }
        .agree > ul {
            width: 100%;
            height: 200px;
            padding: 20px 0;
            font-size: 0;
        }
        .agree > ul > li{
            display: inline-block;
            width: 50%;
            padding-bottom: 15px;
        }
        .submit_wrap{
            position: relative;
            top: -70px;
        }
    }
    @media screen and (min-width:1024px) and (max-width:1599px){
        #main{padding: 50px 20px 0;}
        .container{
            width: 100%;
            min-width: 0;
        }
        .form_tit{font-size: 20px;}
        .signup_form{
            width: 965px;
            margin: 0 auto;
        }
        .signup_form > div{margin-top: 0;}
        .signup_form > .info{
            float: left;
            position: relative;
            top: 0;
            display: inline-block;
            width: 480px;
            height: 500px;
        }
        .form_left{
            float: none;
            display: block;
            width: 465px;
        }
        .form_right{
            float: none;
            display: block;
            width: 465px;
            height: 300px;
            padding: 0 40px;
        }
        .account{
            position: relative;
            top: 0;
            display: inline-block;
            width: 465px;
            height: 500px;
        }
        .sns_con{
            position: relative;
            top: 20px; left: 0;
            display: inline-block;
            width: 480px;
            height: 300px;
            margin-top: 0;
        }
        .sns_con .form{
            position: relative;
            padding: 0;
            top: 20%;
            transform: translateY(-20%);
        }
        .phone_cer{
            position: relative;
            top: 20px; left: 20px;
            width: 465px;
            height: 300px;
            margin: 0;
        }
        .term_inf{
            position: relative;
            top: 45px; left: -3px;
            width: 960px;
            height: 320px;
            margin-bottom: 200px;
        }
        .agree > ul {
            width: 100%;
            height: 130px;
            display: inline-block;
            padding: 30px 50px;
        }
        .agree > ul > li{
            display: inline-block;
            width: 30%;
            padding-bottom: 15px;
        }
        .submit_wrap{
            position: relative;
            top: -80px;
        }
    }
</style>