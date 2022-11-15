<template>
    <div class="loading">
        <img height="150" src="/loading2.gif" alt="">
        <p class="text-load">waiting for u...</p>
    </div>
</template>

<script>
export default {
    name: 'loading'
}
window.addEventListener('load', loading);
function loading() {
  document.querySelector('.loading').classList.add('hide');
};

</script>

<style scoped>
    .loading {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #F0F7FF;
        z-index: 9999;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        flex-direction: column;
    }
    .loading.hide {
        display: none;
        text-align: center;
    }
    .text-load {
        color: black;
        font-weight: 600;
        font-size: 28px;
}
</style>