<template>
    <div  id="app" :class="mode">
        <Loading/>
        <Header v-if="!header" :mode="mode" @toggle="toggle"></Header>
        <Alert/>
        <router-view/>
        <ToggleToTop/>
        <Footer v-if="!header"/>
    </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Footer from "./components/Footer.vue";
import ToggleToTop from "./components/ToggleToTop.vue";
import Loading from "./components/Loading.vue";
import Alert from "./components/Alert.vue";

    export default {
        name: 'app',
        components: {Header,Footer,ToggleToTop,Loading,Alert},
        
        data() {
            return {
                header: null,
                mode: 'dark',
            }
        },
        created() {
            this.checkRoute();
            window.addEventListener("keyup", this.keyPress);
        },
        methods: {
            checkRoute() {
                if(this.$route.name === "login" || this.$route.name === "register") {
                    this.header = true;
                    return;
                } else {
                    this.header = false;
                }
                    
                },

            toggle() {
                if(this.mode === 'dark') {
                    this.mode = 'light'
                } else {
                    this.mode = 'dark'
                }
            },
            keyPress(e) {
                if(e.key === '`') {
                    this.toggle();
                }
            },
  
        },
        watch: {
            $route() {
                this.checkRoute();
            }
        }
    };

</script>

<style>

    .page {
        text-align: center;
    }
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth !important;
    }
    .row {
        margin: 0 !important;
    }
    .col-7 {
        padding: 0 !important;
    }
    #app {
        display: flex;
        flex-direction: column;
        background: #015B6F;
        color: #F3F3F3;
        transition: background 0.6s ease-in-out;
        transition: 0.6s all;
    }
    body::-webkit-scrollbar {
        width:10px;
        background: black;
    }
    body::-webkit-scrollbar-thumb {
        background: linear-gradient(transparent, #6a00ff);
        border-radius:6px;
    }
    body::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(transparent, #006eff);

    }
 
    .dark {
        background: #1c0522 !important;
        color: #F3F3F3 !important;
    }

</style>