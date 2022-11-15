<template>
        <label class="toggle">
            <input type="checkbox" 
            :checked="(mode === 'dark') ? 'checked' : false"
            @change="$emit('toggle')"
            >
            <span class="toggler round"></span>
        </label>
</template>

<script>
    export default {
        props: ['mode'], 
    }
</script>

<style scoped>
    .toggle {
        position: relative;
        display: inline-block;
        width:52px;
        height:26px;
        margin: 0;
        background: transparent;
    }
    .toggle input {
        opacity: 0;
        width:0;
        height:0;
    }
    .toggler {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #f3f3f3;
        border: 1px solid #363434;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
    .toggler::before {
        position: absolute;
        content: "";
        height: 17px;
        background: #f1c40f;
        width:18px;
        top: 4px;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        left: 4px;
    }
    input:checked + .toggler {
        background: #363434;
    }
    input:focus + .toggler {
        box-shadow: 0 0 2px #f3f3f3;

    }
    input:checked + .toggler::before {
          background: #f3f3f3;
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
    }
    .toggler.toggler.round {
        border-radius:34px;
    }
    .toggler.round::before {
        border-radius: 50%;
    }

</style>