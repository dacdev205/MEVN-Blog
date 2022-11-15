<script>
import API from "../../api"
export default {
    data() {
        return {
            blog: {
                title: "",
                category: "",
                content: "",
                author: "",
                image: "",
            },
            image:null,
        };
        },
        methods: {
           selectfile(event) {
                this.image = event.target.files[0]
           },
            async submitBlog() {
                const fd = new FormData();
                fd.append("image", this.image);
                fd.append("title", this.blog.title);
                fd.append("category", this.blog.category);
                fd.append("content", this.blog.content);
                fd.append("author", this.blog.author);
                await API.addBlog(fd)
                this.$router.push({name: 'blogs'});
            },
        },
}
</script>

<template>
    <div id="addblog" class="container-md max-width ">
        <form  @submit.prevent="submitBlog()" enctype="multipart/form-data" class="form-style mt-3">
            <div class="mb-3">
                <img class="img-add" src="./image/timon-klauser-3MAmj1ZKSZA-unsplash.jpg" alt="">
            </div>
            <div class="mb-3">
                <input v-model="blog.title" type="text" class="form-control" required id=""  placeholder="Title">
            </div>
            <div class="mb-3">
                <input v-model="blog.category" type="text" class="form-control" required id=""  placeholder="What type your blog?">
            </div>
            <div class="mb-3">
                <textarea  v-model="blog.content" type="text" class="form-control" required id=""  placeholder="Tell your story..."> </textarea>
            </div>
            <div class="mb-3">
                <input v-model="blog.author" type="text" class="form-control" required id=""  placeholder="Your nickname">
            </div>
            <div class="mb-3">
                <input class="upload-box" required id="" ref="file" @change="selectfile" type="file" >
            </div>
            <button type="submit" class="btn-submit">Create blog</button>
        </form>
    </div>
</template>

<style scoped>
.btn-submit {
    width:100%;
    background-color:black;
    padding:10px;
    border-radius: 5px;
    color:white;
}

.btn-submit:hover {
    opacity: 0.8;
}

.form-style {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.img-add {
    width: 100%;
    border-radius: 5px;
}

.max-width {
    max-width:578px ;
}

.upload-box {
    font-size:16px;
    background:white;
    border-radius: 50px;
    box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.6);
    width: 100px;
}

::-webkit-file-upload-button {
    color: white;
    background-color: black;
    border-radius: 50px;
    padding:10px;
    border: none;
    outline:none;
}

::-webkit-file-upload-button:hover {
    cursor: pointer;
    opacity: 0.8;
}
</style>