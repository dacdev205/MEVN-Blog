<script>
import API from "../api"
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
    <div id="editblog" class="container-md max-width ">
        <Form  @submit="updateBlog()" enctype="multipart/form-data" class="form-style mt-3">
            <div class="mb-3">
                <img style="border-radius: 5px;" :src="`http://localhost:3000` + `/${blog.image}`" class="img-edit" alt="loi hinh anh" >
            </div>
            <div class="mb-3">
                <Field :rules="titleIsvalid" name="title" v-model="blog.title" type="text" class="form-control" placeholder="Title"/>
                <ErrorMessage style="color:red;" name="title"/>
            </div>
            <div class="mb-3">
                <Field :rules="typeIsvalid" name="category" v-model="blog.category" type="text" class="form-control"  placeholder="What type your blog?"/>
                <ErrorMessage style="color:red;" name="category"/>
            </div>
            <div class="mb-3">
                <Field v-model="blog.content" type="text" class="form-control" placeholder="Tell your story..." :rules="contentIsvalid"  name="content">
                </Field> 
                <ErrorMessage style="color:red;" name="content"/>
            </div>
            <div class="mb-3">
                <Field :rules="requiredIsvalid" name="author" v-model="blog.author" type="text" class="form-control"   placeholder="Your nickname"/>
                <ErrorMessage style="color:red;" name="author"/>
            </div>
            <div class="mb-3">
                <input class="upload-box" ref="file" @change="selectfile" type="file" />
            </div>
            <button type="submit" class="btn-submit">Create blog</button>
        </Form>
    </div>
    <br>
</template>



<style scoped>
.img-edit {
    width: 100%;
    border-radius: 5px;
    height: 350px;
}

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

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
   const titleIsvalid = yup
        .string()
        .required("Please required this field.")
        .min(5, "Title must be at least 5 characters.")
        .max(20, "Title must be at most 20 characters.")
    
   const typeIsvalid = yup
        .string()
        .required("Please required this field.")
        .max(10, "Type must be at most 10 characters.")
        .min(3, "Type must be at least 3 characters.")

    const contentIsvalid = yup
        .string()
        .required("Please required this field.")
        .min(20, "Title must be at least 20 characters.")    

    const requiredIsvalid = yup
        .string()
        .required("Please required this field.")

</script>

