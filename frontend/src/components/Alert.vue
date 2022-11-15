<template>
    <div class="alertChangeMode">
        <span class="close-Alert"><i class="fa-solid fa-xmark closee"></i></span>
        <p class="text-alert">You can click on this button or click " ` " on keyboard to change mode</p>
    </div>
</template>

<style scoped>

    p {
        margin: 0;
    }
    .alertChangeMode {
        position: fixed;
        transition: 0.2s ease-in-out;
        z-index: 10;
        top: 75px;
        right: 180px;
        z-index: 1001;
        padding: 10px;
        width: 235px;
        height: 100px;
        background: #222533;
        border-radius: 5px;
    }
    .alertChangeMode .text-alert {
        color: #f3f3f3;
        margin-right: 10px;
    }
    .alertChangeMode .close-Alert {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1000;
        padding:10px;
    }
    .alertChangeMode .close-Alert:hover {
        cursor: pointer;
    }
    .alertChangeMode.activeCloseAlert {
        transition: 0.2s ease-in-out;
        opacity: 0;
        pointer-events: none;
    }
    .alertChangeMode::before {
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
    @media screen and (max-width:1023px) {
        .alertChangeMode {
            opacity: 0;
            pointer-events: none;
        }
    }
</style>

<script>
document.addEventListener('click', function(e) {
    const closeBtn = document.querySelector('.close-Alert');
    const alertChangeMode = document.querySelector('.alertChangeMode');
    if(closeBtn.contains(e.target) || !alertChangeMode.contains(e.target)) {
        alertChangeMode.classList.add('activeCloseAlert');
    }
});
document.addEventListener('keyup', function(e) {
    const alertChangeMode = document.querySelector('.alertChangeMode');
    if(e.key === '`') {
        alertChangeMode.classList.add('activeCloseAlert');
    }
});
</script>