<script>
import API from "../../api"
import "../editblog/editblog.css"
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
            message: "",
            image:null,
            PF: [],

        };
        },
        async created () {
            const response = await API.getBlogById(this.$route.params.id);
            this.blog = response;
         },
        methods: {
           selectfile(event) {
                this.image = event.target.files[0]
           },
           async updateBlog() {
               try {
                    const fd = new FormData();
                    fd.append("image", this.image);
                    fd.append("title", this.blog.title);
                    fd.append("category", this.blog.category);
                    fd.append("content", this.blog.content);
                    fd.append("author", this.blog.author);
                    fd.append("old_image", this.blog.image);
                    await API.updateBlog(this.$route.params.id, fd)
                    this.$router.push({name: 'blogs'});
                    this.message = 'Updated successfully!'
               } catch (error) {
                    console.log(error);
               }
            },
        },
}
</script>

<template>
    <div id="editblog" class="container-md max-width">
        <form @submit.prevent="updateBlog()" enctype="multipart/form-data" class="form-style mt-3">
            <div class="mb-3">
                <img style="border-radius: 5px;" :src="`http://localhost:3000` + `/${blog.image}`" class="img-edit" alt="loi hinh anh" >
            </div>
            <div class="mb-3">
                <input v-model="blog.title" type="text" class="form-control" placeholder="Title">
            </div>
            <div class="mb-3">
                <input v-model="blog.category" type="text" class="form-control"  placeholder="What type your blog?">
            </div>
            <div class="mb-3">
                <textarea v-model="blog.content" type="text" class="form-control" placeholder="Write something"> </textarea>
            </div>
            <div class="mb-3">
                <input v-model="blog.author" type="text" class="form-control" placeholder="Your nickname">
            </div>
            <div class="mb-3">
                <input ref="file" @change="selectfile" type="file" class="upload-box">
            </div>
            <button type="submit" class="btn-submit">Update blog</button>
        </form>
    </div>
</template>

