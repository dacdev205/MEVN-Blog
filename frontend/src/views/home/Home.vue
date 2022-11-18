<template>
  <div id="home" class="container-fluiter">
    <div class="row recomment" v-for="blog in blogs.slice(0, count1)">
      <div  class="col-5 content-desc">
        <div class="text-desc">
          <span v-if="!isLoggedIn">Publish your passions, your way</span>
          <p class="mt-3 mb-3 text-content" v-if="!isLoggedIn">
            Create a unique and beautiful blog easily.
          </p>
          <div class="title-blog-home" v-if="isLoggedIn">{{ blog.title }}</div>
          <p class="mt-3 mb-3 content-blog" v-if="isLoggedIn">
            {{ blog.content.substring(0, 150) + "..." }}
          </p>
          <p>
          <router-link
            class="link-to"
            v-if="!isLoggedIn"
            :to="{ name: 'login' }"
            >Login/Register <i class="fa-solid fa-arrow-right"></i
          ></router-link>
        </p>
          <router-link
            class="link-to"
            v-if="isLoggedIn"
            :to="{ name: 'blogdetail', params: { id: blog._id }, hash: '#blogDetail' }"
            >View the blog <i class="fa-solid fa-arrow-right"></i
          ></router-link>
        </div>
      </div>
      <div class="col-7 " v-if="isLoggedIn">
        <img class="img-home" :src="PF + `/${blog.image}`" alt="loi hinh anh" />
      </div>
      <div class="col-7" v-if="!isLoggedIn">
        <img class="img-home" src="/aesthetic-art-desktop-sand-dunes-kulmn1twfm7752su.jpg" alt="loi hinh anh" />
      </div>
    </div>
    <div class="counter-up">
      <div class="content">
        <div class="box">
          <div class="icon"><i class="fa fa-history"></i></div>
          <div id="number1" class="counter" >550</div>
          <div class="text">Working Hours</div>
        </div>
        <div class="box">
          <div class="icon"><i class="fa-regular fa-file"></i></div>
          <div id="number2" class="counter" >260</div>
          <div class="text">Post Quantity</div>
        </div>
        <div class="box">
          <div class="icon"><i class="fa-regular fa-face-smile"></i></div>
          <div id="number3" class="counter" >410</div>
          <div class="text">Happy Clients</div>
        </div>
        <div class="box">
          <div class="icon"><i class="fa-solid fa-gift"></i></div>
          <div id="number4" class="counter" >120</div>
          <div class="text">Awards Received</div>
        </div>
      </div>
    </div>

    <div>
      <h3 style="margin-left: 15px" class="font-weight">View More Recent Blogs</h3>
      <div class="row mb-3">
          <div class="col-lg-3 col-md-6 col-sm-6 pt-3 main-card" v-if="isLoggedIn"
          v-for="blog in blogs.slice(1, count2)" >
               <div id="blogs" class="card ">
                  <img class="img-blogs" :src="PF + `/${blog.image}`" alt="loi hinh anh" >
                  <div class="card-body">
                        <span class="mb-2 title">{{blog.title}}</span>
                        <div class="content ">
                            <div class="block-content">
                                <i class="fas fa-tags"></i>
                                <a class="mt-3 text-white">#{{blog.category}}</a>
                            </div>
                          <p class="">{{blog.content.substring(0,100) + "..."}}</p>
                 
                          <div class="title-blog">
                                <router-link tag="h5" :to="{name: 'blogdetail' , params: {id: blog._id}}">
                                    Read More
                                </router-link>
                          </div>
                      </div>
               </div>
            </div>
         </div>   
      </div>
      <div class="row mb-3">
          <div class="col-lg-3 col-md-6 col-sm-6 pt-3 main-card" v-if="!isLoggedIn" v-for="blog in blogs.slice(0, count4)">
               <div id="blogs" class="card ">
                  <img class="img-blogs" :src="PF + `/${blog.image}`" alt="loi hinh anh" >
                  <div class="card-body">
                        <span class="mb-2 title">{{blog.title}}</span>
                        <div class="content ">
                            <div class="block-content">
                                <i class="fas fa-tags"></i>
                                <a class="mt-3 text-white">#{{blog.category}}</a>
                            </div>
                        <p class="">{{blog.content.substring(0,100) + "..."}}</p>
                        <div class="title-blog">
                                <router-link tag="h5" :to="{name: 'blogdetail' , params: {id: blog._id}}">
                                    Read More
                                </router-link>
                          </div>
                    </div>
               </div>
            </div>
         </div>   
      </div>
      <br />
    </div>
  </div>
</template>


<script>
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.js";
import API from "../../api";
import "./home"
import Blog from "../Blogs.vue"
export default {
  components:{Blog},
  data() {
    return {
      blogs: [],
      PF: [],
      search: "",
      count1: 1,
      count2: 5,
      count4: 4,
    };
  },
  async created() {
    this.PF = "http://localhost:3000";
    this.blogs = await API.getAllBlog();
  },
};
</script>

<script setup>
import "https://kit.fontawesome.com/9039f40edf.js";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
.col-6 {
  padding: 0;
}
.content-desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
}
.content .title-blog:hover a{
    text-decoration: none;
    color: white;
    
}
.card:hover .title-blog {
    opacity: 1;
    transition:0.6s;
}
.content .title-blog {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    opacity: 1;
}
.content .title-blog a {
    color: white;
}
.text-desc {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 200;
    font-size: 16px;
}
.text-desc > span {
    font-size:28px;
}
.img-home {
    width: 100%;
    height: 650px;
}
.recomment {
  box-shadow: 0 4px 4px black;
}
.link-to {
  color:white;
  transition: all 0.3s;
}
.link-to:hover {
  text-decoration: none;
  opacity:0.8;
}
.view-more-blog {
    margin-top: 100px;
    margin-left: 10px;
}
.register-footer-home {
    padding: 10px 20px;
    border-radius: 30px;
    background-color: black;
}
.register-footer-home:hover {
    color: #fff;
    text-decoration: none;
}
.counter-up {
    min-height: 60vh;
    padding: 0 50px;
    display: flex;
    align-items: center;
}
.counter-up .content {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.content .box {
    width: calc(25% - 30px);
    border:2px dashed gray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 20px;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
}
.content .box .icon {
    font-size: 50px;
}
.content .box .counter {
    font-size: 50px;
    font-weight: 400;
    font-family: sans-serif;
}
@media (max-width: 1036px) {
    .img-home {
        max-width: 100%;
        max-height:400px;
    }
    .content .box {
        width: calc(50% - 30px);
        margin-bottom: 50px;
    }
    .counter-up {
        padding: 50px 50px 0 50px;
    }
    .content-blog {
        display: none;
    }
    .title-blog-home {
        font-size:25px;
    }
}
@media (max-width: 580px) {
    .img-home {
        max-width: 100%;
        max-height:200px;
    }
    .text-desc {
        font-size: 12px;
    }
    .content .box {
        width: 100%;
    }
    .text-desc > span {
        font-size:14px;
    }
    .text-desc .text-content {
        display: none;
    }
}
</style>