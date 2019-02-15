<template>
    <div id="nav">
        <a class="open ham_btn"></a>
        <h1 class="logo">
            <router-link to="/">
                <img src="https://s3.ap-northeast-2.amazonaws.com/spin-protocol-resource/resources/images/spin-logo1/group-17.png" srcset="https://s3.ap-northeast-2.amazonaws.com/spin-protocol-resource/resources/images/spin-logo1/group-17%402x.png, https://s3.ap-northeast-2.amazonaws.com/spin-protocol-resource/resources/images/spin-logo1/group-17%403x.png" class="logo" alt="spinprotocol_logo">
            </router-link>
        </h1>
        <div class="profile">
            <div class="image">
                <img src="http://file2.nocutnews.co.kr/newsroom/image/2018/07/18/20180718120948825781_0_420_600.jpg" alt="profile image">
            </div>
            <p class="user_name"></p>
        </div>
        <ul class="nav_gnb">
            <li class="nav_on"><router-link to="/influencer/inf_campaign_management">캠페인 관리</router-link></li>
            <li><router-link to="/influencer/campaign_list">캠페인 목록</router-link></li>
            <li class="setting">
                <router-link to="/influencer/inf_my_info">설정</router-link>
            </li>
        </ul>
        <div class="logout_btn_wrap">
            <router-link class="logout_btn" to="/common/signout">로그아웃</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InfNav'
    }
</script>

<style scoped>

</style>