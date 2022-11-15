<template>
<div class="sroll-to-top">
    <a href="#"><img height="50" src="./top-up.png" alt=""></a>
</div>
</template>

<style scoped>
  .sroll-to-top {
    position:fixed;
    transition: all 0.4s;
    opacity: 0;
    pointer-events: none;
    z-index: 10;
    bottom: 20px;
    right: 20px;
  }
  .sroll-to-top.activeSroll{
    opacity: 1;
    pointer-events: auto;
  }

</style>

<script>
window.addEventListener('scroll', scrollToTop);
function scrollToTop(){
    if(window.pageYOffset > 100) {
        document.querySelector('.sroll-to-top').classList.add('activeSroll');
    } else {
        document.querySelector('.sroll-to-top').classList.remove('activeSroll');

    }
};
</script>