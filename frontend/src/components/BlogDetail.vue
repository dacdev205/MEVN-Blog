<template>
<div id="blogDetail" class="container-fluiter" >
    <div class="row">
        <div class="col p-2 mx-auto">
            <div class="card card-block">
                <img style="border-radius: 5px;" :src="`http://localhost:3000` + `/${blog.image}`" with="100%" alt="loi hinh anh" >
                 <div class="row mt-4 mx-1">
                    <div  class="col">
                        <h5 class="card-title">{{blog.title}}</h5>
                    </div>
                    <div class="col btn-list">
                            <router-link v-if="isLoggedIn" tag="button" :to="{ name: 'editblog'}" class="btn-btn btn-edit"> 
                                <i class="fas fa-edit size-icon"></i>
                            </router-link>
                        <button v-if="isLoggedIn" class="btn-btn btn-delete" @click="removeBlog(blog._id)"><i class="fas fa-trash size-icon"></i></button>
                    </div>
                </div>
                <div class="col mx-1">
                    <div class="tag mt-3" style="display: inline-block;">
                        <i class="fas fa-tags"></i>
                        <a class="text-white">#{{blog.category}}</a>
                    </div>
                    <p class="mt-3">{{blog.content}}</p>
                    <p class="mt-3">Author: {{blog.author}}</p>
       
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script scoped>
import API from "../api"
export default {
    data () {
        return {
            blog: {},
        };
    },
    async created () {
        const response = await API.getBlogById(this.$route.params.id);
        this.blog = response;
    },
    methods: {
        async removeBlog(id) {
            window.confirm("Are you sure you want to remove this blog")
            await API.deleteBLog(id)
            this.$router.push({name: 'blogs'})
            alert("Removed this blog successfully");
        }
    }
}
</script>

<script setup>

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
    .btn-list {
    display: flex;
    justify-content: flex-end;
}
p {
    margin: 0;
}
h5 {
    margin-bottom:0 !important;
    padding-top: 8px;
}

.size-icon {
    font-size:10px;
}

.btn {
    padding: 0 15px;
}

.tag {
    cursor: pointer;
}

.tag > i {
    margin-right: 5px;

}
.card-block{
    border: none;
    background: transparent;
}

.col {
    padding: 0;
}

.btn-delete {
    margin-left: 10px;
    background: rgb(240, 73, 44)

}

.btn-edit {
    background: rgb(91, 231, 59)
}

.btn-btn {
    padding: 10px 20px;
    border: none;
    color: white;
    border-radius:5px
}

.btn-btn:hover {
    opacity: 0.8;
    color: white;
}


</style>