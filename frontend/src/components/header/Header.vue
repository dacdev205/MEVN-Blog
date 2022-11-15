<script>
    import router from "../../router";
    import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
    import "./header"
    import Toggle from "../Toggle.vue"
    export default {
        props: ['mode'],
        components: {
            Toggle,
        },
        data () {
            return {
                darkMode: null,
            }
        },
    };
    function menuShow() {
        let menuToggle = document.querySelector('.menu');
        menuToggle.classList.toggle('active');
    }   

    function showMenu() {
        document.querySelector(".navlink").classList.toggle("mobile-menu");
    }

</script>

<template>
    <header class="header"  >
        <router-link :to="{name: 'home'}" class="logo">
                <img height="50" src="./image/logo.png" alt="">
            </router-link>
            <ul class="navlink">
                <li>
                    <router-link tag="a" :to="{name: 'home', hash: '#home'}">
                            Home
                    </router-link>

                </li>
                <li>
                    <router-link tag="a" :to="{name: 'about', hash: '#about'}">
                        About
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" :to="{name: 'blogs', hash: '#blogs'}">
                        Blogs
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" :to="{name: 'contact', hash: '#contact'}">
                        Contact
                    </router-link>
                </li>
                <li class="changeMode"> 
                     <Toggle :mode="mode" @toggle="$emit('toggle')"></Toggle>
                </li>
            </ul>
                <div class="mainMenu-mobile" style="margin-left: 10px;">
                    <div class="profile-menu" v-if="isLoggedIn">
                        <div class="action" id="action" @click="menuShow()">
                            <img class="imge-user" id="imge-user" src="./image/userr.png" alt=""> 
                        </div>
                        <div class="menu" id="subMenu">
                        <div class="profile">
                            <img src="./image/userr.png" alt="">
                            <div class="infor">
                                <h2>dac dep chai</h2>
                                <p>@dac</p>
                            </div>
                        </div>
                    <ul>
                        <li>
                            <router-link class="addblog navigation" v-if="isLoggedIn" :to="{ name: 'addblog' , hash: '#addblog'}">
                            <i class="fa-solid fa-plus"></i>
                            Add Blog
                            </router-link>
                        </li>
                        <li>
                            <i class="fa-solid fa-gear"></i>
                            <a class="navigation" href="#">Setting</a>

                        </li>
                        <li>
                            <i class="fa-solid fa-circle-question"></i>
                            <a class="navigation" href="#">Help</a>
                        </li>
                        
                        <li>
                            <button class="signOut" @click="hadleSignOut" v-if="isLoggedIn">
                            <i class="fas fa-sign-out"></i>            
                            <span class="text-list">
                                Sign Out
                            </span>
                            </button>
                        </li>
                    </ul>
                    </div>      
                </div>
                <router-link v-if="!isLoggedIn" :to="{ name: 'login' }" id="login">
                    Sign In
                </router-link>
                <div class="menu-hamburger" @click="showMenu()">
                    <i style="color: white; font-size: 30px;" class="fa-solid fa-bars icon-hambuger"></i>
                </div>
                </div>
        </header>
    <section id="section1">
        <img src="./image/stars.png" id="starts" class="starts" alt="">
        <img src="./image/moon.png" id="moon" alt="">
        <img src="./image/mountains_behind.png" id="mountains_behind" alt="">
        <h2 id="text">dac blog</h2>
        <img src="./image/mountains_front.png" id="mountains_front" alt="">
    </section>

    <section id="section2">
        <h2 id="text2">dac blog</h2>
        <img id="forest" src="./image/forest.png" alt="">
        <img id="rock" src="./image/rookk.png" alt="">
        <img id="river" src="./image/river.png" alt="">
    </section>
</template>

<script setup>

import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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

const hadleSignOut = () => {
    signOut(auth).then(() => {
        router.push("/");
    });
};

</script>

<style scoped>

section {
    height: 100vh;
    overflow-x: hidden;
}

#section1 {
    background: linear-gradient(#2b1055, #7597de);
    }
#section2 {
    background: linear-gradient(#f1eaea, #ffffff);
}

.header {
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding:20px 100px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    transition: 0.6s all;
    z-index: 1000;
}
#section1 >img#moon {
    mix-blend-mode: screen;
}
header.sticky {
    padding: 20px 100px;
    background: #1d1f25;
}
.light .header.sticky {
    background: #f3f3f3;
}
.light #section1,
.dark #section2{
    display: none;
}
.light #login,
.light .icon-hambuger {
    color:black !important;
}

.header > ul {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0;
}

.header > ul > li {
    margin-left:20px;
}
.navlink li a.activeLink {
    background:#f3f3f3;
    color: #2b1055;
}

.light .navlink li a.activeLink {
    background:#2b1055;
    color: #f3f3f3;
}

.dark .header > ul > li > a:hover,
.header > ul > li > a:hover {
    text-decoration:none;
    background: #f3f3f3;
    color: #2b1055 !important;
} 

.header > ul > li > a {
    padding: 6px 15px;
    color: #f3f3f3;
    border-radius: 20px;
}

.light .header > ul > li > a:hover {
    background: #2b1055;
    color: #f3f3f3 !important;

}
#section1,
#section2 {
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 100px;
    display: flex ;
    justify-content:center;
    align-items:center;
    overflow: hidden;

}

#section1::before {background: linear-gradient(to top,#1c0522, transparent);}
#section2::before{background: linear-gradient(to top,#015B6F, transparent);}
#section1::before,
#section2::before{
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height:100px;
    z-index: 100;
}
 
#section1 > img{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height:100%;
    object-fit: cover;
}

#section2 > img{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height:100%;
    object-fit: cover;
}

#section1 >img#mountains_front {
    z-index: 10;
}
#text {color: #fff;transform: translate(120px,100px);}
#text2{color: black;transform: translateY(100px);}

#text,
#text2{
    position: absolute;
    white-space: nowrap;
    z-index: 10;
    text-transform: uppercase;
    font-size: 7.5vw;
}
#text2 {
    font-family: 'Rancho', cursive;
}

.profile-menu .action {
    display: block;
    width:44px;
    height: 44px;
    background: #222533;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
}

.profile-menu .action img {
    width:100%;
    height: 100%;
}


.profile-menu .menu {
    width: 310px;
    padding:20px;
    background-color: #222533;
    border-radius: 10px;
    position:absolute;
    top: 80px;
    right: 105px;
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    transition: .2s ease-in-out;
}

.profile-menu .menu.active {
    opacity: 1;
    pointer-events: auto;
}


.profile-menu .menu::before {
    content: "";
    width: 16px;
    height: 16px;
    z-index: 5;
    background-color: #222533;
    border-top-left-radius: 3px;
    position: absolute;
    top: -8px;
    right: 10px;
    transform: rotate(45deg);
}

.profile-menu .menu .profile {
    display: flex;
    align-items:center;
    margin-bottom: 30px;
}

.profile-menu .menu .profile img {
    width: 56px;
    height:56px;
    border-radius: 50%;
    user-select: none;
}

.profile-menu .menu .profile .infor {
    margin-left: 15px;
}

.profile-menu .menu .profile .infor h2 {
    color: #dadada;
    font-size: 18px;
    text-transform: capitalize;
    margin-bottom: 4px;
}


.profile-menu .menu .profile .infor p {
    color: #7d8193;
    font-size:16px;
    font-weight: 400;
}

.profile-menu .menu .addblog {
    width: 250px;
    height:53px;
    color: #e5e5e5;
    background-color: #1a1c29;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    transition: all 0.3s;
}

.profile-menu .menu .addblog i {
    width:20px;
    margin-right: 5px;
    user-select: none;
}

.profile-menu .menu .addblog:hover {
    background-color: #292c3d;
}

.profile-menu .menu ul li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;;
    color: #e5e5e5;
    
}

.profile-menu .menu ul li a {
    color: #e5e5e5;
    font-size: 16px;
    font-weight: 400;

}

.profile-menu .menu ul li button {
    background-color: transparent;
    border: none;
    color: #e5e5e5;

}

.profile-menu .menu ul li a:hover {
    color: #e5e5e5;
    text-decoration: none;
}

.profile-menu .menu ul li i {
    width:26px;
    margin-right: 4px;
    user-select: none;
}

#login{
    text-decoration: none;
    color: #fff;
    margin-right: 10px;
    transition: all 0.3s;
}

#login:hover {
    opacity: 0.8;
}

.menu-hamburger {
    display: none;
}

@media screen and (max-width:1023px) {
    .header > ul {
        justify-content: center;
    }
    .header > ul >li {
        margin-left: 0;   
    }
    .header > ul > li > a {
        background-color: #1d1f25;
        border-radius: 10px;
        color: white ;
    }
    .header {
        padding:20px 60px;

    }
    .header.sticky {
        padding:20px 60px;

    }
    .navlink{
        top: 0;
        left: 0;
        position: absolute;
        height: 100vh;
        display: flex;
        width: 0;
        z-index: 2;
        overflow: hidden;
        justify-content:content;
        align-items:center;
        flex-direction: column;
        backdrop-filter: blur(8px);
        background-color: rgba(255,255,255,0.20);
        transition: all 0.5s ease-in;
    }
    .navlink.mobile-menu{
        width: 100%;
        z-index: -1;
        color: #2b1055 ;
    }
    .light .header > .navlink.mobile-menu > li > a {
        color: white;
    }
    .navlink > li {
        margin: 25px 0;
        font-size: 1.2em;
    }
 
    .menu-hamburger {
        display:block;
        z-index: 10;
        cursor: pointer;
        
    }
    .profile-menu {
        z-index: 10;
        margin-right: 20px;
    }
    .header .logo {
        z-index: -2;
    }
    .mainMenu-mobile {
        display:flex;
        align-items: center;
    }

}
@media (min-width: 1024px) {
    .light .header > ul > li > a {
        color: #292c3d;
    }
}
</style>
