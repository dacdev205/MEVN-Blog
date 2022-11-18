<template>
    <div id="about" class="container">
        <div class="title-about">
                <p>About us</p>
        </div>
        <div class="row main-about ">
            <div class="col-12 content-about about1">
                    <p class="title-about-child"> Purpose</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque blandit sagittis nisi, quis convallis lacus convallis vitae.
                         Sed et nisl vel ante fringilla maximus ut ac velit. Cras sed venenatis orci.
                    </p>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 content-about about2">
                    <p class="title-about-child">Vision statement</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit sagittis nisi, quis convallis lacus convallis vitae. Sed et nisl vel ante fringilla maximus ut ac velit. Cras sed venenatis orci. Aenean vel dolor enim. Ut bibendum ligula id sapien imperdiet pharetra. Nam dui risus, ultrices id cursus non, elementum sed velit</p>
                </div>
                <div class="col-lg-6 col-md-6 content-about about3">
                    <p class="title-about-child">Parsonal Core Values</p>
                    <img height="150" src="/education.png" alt="">
                    <img height="150" src="/approved.png" alt="">
                    <img height="150" src="/achievement.png" alt="">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 content-about about4">
                    <div class="image-about">
                        <img height="150" src="/target.png" alt="">
                    </div>
                    <div style="margin-left: 155px;">
                        <p  class="title-about-child">Personal Statement</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit sagittis nisi, quis convallis lacus convallis vitae. Sed et nisl vel ante fringilla maximus ut ac velit. Cras sed venenatis orci. Aenean vel dolor enim. Ut bibendum ligula id sapien imperdiet pharetra. Nam dui risus, ultrices id cursus non, elementum sed velit</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>


</script>

<style scoped>
    .container .title-about{
        text-align: center;
        font-weight: 700;
        font-size: 60px;
        text-transform: uppercase;
    }
    .row .title-about-child {
        font-size:20px;
        font-weight: 600;
    }
    .content-about {
        padding:10px;
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius:10px;

    }
    .about1 {
        background: #F5C26B;
    }
    .about2 {
        background: #1AC3AE;
    }
    .about4 {
        background: #FF7A59;
        position: relative;
    }
    .image-about {
        position: absolute;
        top: 0;
        left: 0;
    }
    @media (max-width:1023px) {
        .about3 img {
            height: 130px;
        }
    }
</style>