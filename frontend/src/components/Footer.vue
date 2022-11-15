<template>
    <div id="footer">
        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-6 social-main">
                        <h3 class="logo-footer">dVcBlog</h3>
                        <div class="social">
                            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram icon-social"></i></a>
                            <a href="https://twitter.com/?lang=vi"><i class="fa-brands fa-twitter icon-social"></i></a>
                            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook icon-social"></i></a>
                            <a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin icon-social"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-6 router-footer">
                        <div class="link-to-footer"><router-link tag="a" :to="{ name: 'home' }" class="text-white">
                           <span> Home</span>
                        </router-link></div>
                        <div class="link-to-footer"><router-link tag="a" :to="{ name: 'blogs' }" class="text-white">
                            <span> Blogs</span>

                        </router-link></div>
                        <div v-if="isLoggedIn" class="link-to-footer"><router-link tag="a" :to="{ name: 'addblog' }" class="text-white">
                            <span> Create Blog</span>

                        </router-link></div>
                        <div v-if="!isLoggedIn" class="link-to-footer"><router-link tag="a" :to="{ name: 'blogs' }" class="text-white">
                            <span> View Blog</span>

                        </router-link></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 text-white copyright">
                <p style="line-height: 72px;">Copyright 2022 All Rights Reserved</p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<script setup>

import "https://kit.fontawesome.com/9039f40edf.js" 
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged} from "firebase/auth";

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }
    });
});
</script>

<style scoped>
#footer{
    padding: 60px 16px;
    background: #1d1f25;
    position: relative;
    margin-top: auto;
    transition: 0.6s all;
}

.light #footer {
    background: #f3f3f3;
    color: black;
}
.social-main {
    font-size:20px;
}

.router-footer {
    text-transform: uppercase;
}
.light .copyright p,
.light .link-to-footer span,
.light .social .icon-social {
    color: black;
}
.social .icon-social:hover, 
.link-to-footer:hover > a{
    text-decoration: none;
    opacity: 0.8;
}


.social .icon-social {
    color: #fff;
    margin-right: 10px;
}

.copyright {
    display: flex;
    justify-content: flex-end;
}


@media (max-width: 1023px) {
  .copyright {
    display: inline-block;
    text-align: center;
  }
  .social-main {
    text-align: center;
  }
  .router-footer {
    text-align: center;
  }
}



</style>