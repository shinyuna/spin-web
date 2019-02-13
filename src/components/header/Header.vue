<template>
    <div id="header">
        <ul class="header_gnb">
            <li class="notice_icon">
                <button type="button" class="notice_msg">
                    <div class="circle_cnt"></div>
                    <img class="gnb_icon" src="https://s3.ap-northeast-2.amazonaws.com/spin-protocol-resource/resources/images/notice_icon/baseline-search-24-px-copy.svg" alt="notice icon">
                </button>
            </li>
            <li class="header_profile_img">
                <div class="header_img">
                    <img src="http://file2.nocutnews.co.kr/newsroom/image/2018/07/18/20180718120948825781_0_420_600.jpg" alt="profile image">
                </div>
            </li>
            <li>
                <p>님</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
