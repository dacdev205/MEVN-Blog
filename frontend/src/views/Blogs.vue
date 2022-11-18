<script scoped>
import API from "../api"
export default {
    data() {
        return {
            blogs: [],
            PF: [],
            MOCK_DATA: [],
            term:null,
            message:"",
            select_all: false,
            selected: [],
            checked: false,
            toggle: false,
            findBlogByType: false,
            findBlogByName: true,
            messageWarn: "",
            emoji: null,
        };
    },
   async created() {
      this.PF = "http://localhost:3000";
      this.blogs = await API.getAllBlog();
      this.MOCK_DATA = await API.getAllBlog();
   }, 
   methods: {
    search(term) {
        this.resetData()
        try {
            if(term == null) {this.toggle = false;} 
            if(this.findBlogByName && !this.findBlogByType) {
            this.blogs = this.blogs.filter((blog)=> {
                if(blog.title.toLowerCase().match(term.toLowerCase()) ){
                    return this.blogs
                }
            })
            }else if (!this.findBlogByName && this.findBlogByType) {
                this.blogs = this.blogs.filter((blog)=> {
                if(blog.category.toLowerCase().match(term.toLowerCase())){
                    return this.blogs
                } 
            })
            } if(this.blogs.length >= 1) {
                        this.messageWarn =""
                        this.emoji = null
                    } else {
                        this.emoji = true;
                        this.messageWarn = "Nothing to here!";
                    }

       } catch (error) {
            return
       }
       for(let i in this.blogs) {
            if(this.blogs[i]){
                this.toggle = false;
            } else {
                this.toggle = true;
            } 
       }
    },
    changeTypeSearch() {
        if(this.findBlogByType == true) {
            this.findBlogByName = false;
        } else {
            this.findBlogByName = true;
        }
    },
    select () {
        if(this.select_all == true) {
            for(let i in this.blogs){
                this.checked = true; 
                this.selected.push(this.blogs[i]._id);
            }
        } else {
            this.checked = false;
            this.selected = [];
        }
    },
    selectSingleBlog() {
        if(this.blogs.length == this.selected.length) {
            this.select_all = true;
        } else {
            this.select_all = false;
        } if(this.selected.length >= 1){
            this.checked = true; 
        } else {
            this.checked = false;
        }
    },
    async deleteRecords(selected) {
        this.resetData()
        for(let i in this.selected) {
            if(window.confirm("Bạn có chắc muốn xóa các mục đã chọn")){
                await API.deleteBLog(selected[i])
            }
        }
    },
    resetData() {
        this.blogs = this.MOCK_DATA;
        this.term = null;
        this.message = '';
        this.select_all = false;
        this.checked = false;
        this.toggle = true;
        this.messageWarn = "";
        this.emoji = null;

    },
    change () {
        
    }
   },
}
document.addEventListener("click", function(e) {
    try {
        let cards = document.querySelectorAll('.main-card .card')
        for (let i = 0; i < cards.length; i++) {
            const toggleBtn = document.querySelector('.toggle2select')
            if(toggleBtn.contains(e.target)) {
                var card = cards[i]
                card.classList.toggle('toggleActive')
            }
        } 
    } catch (error) {
    }
    try {
        let cardsBody = document.querySelectorAll('.card-body .content')
        for (let i = 0; i < cardsBody.length; i++) {
            const toggleBtn = document.querySelector('.toggle2select')
            if(toggleBtn.contains(e.target)) {
                var cardBody = cardsBody[i]
                cardBody.classList.toggle('toggleActiveContent')
            } 
    } 
    } catch (error) {
        return false
    }
    try {
        let selects = document.querySelectorAll('.select')
        for (let i = 0; i < selects.length; i++) {
            const toggleBtn = document.querySelector('.toggle2select')
            if(toggleBtn.contains(e.target)) {
                var select = selects[i]
                select.classList.toggle('selectActive')
            } 
        } 
    } catch (error) {
       return false
    }
    try {
        let selectAll = document.querySelector('.selectAll')
        const toggleBtn = document.querySelector('.toggle2select')
        if(toggleBtn.contains(e.target)) {
                selectAll.classList.toggle('selectAllActive')
            } 
    } catch (error) {
        return false
    }
    try {
        let titles = document.querySelectorAll('.card-body .title')
        for (let i = 0; i <titles.length; i++){
            const toggleBtn = document.querySelector('.toggle2select')
            if(toggleBtn.contains(e.target)) {
                var title = titles[i];
                title.classList.toggle('activeTitle')
            } 
        }
    } catch (error) {
        return false
    }
    try {
        const explamation = document.querySelector('.explamation');
        const iconExlamation = document.querySelector('.iconExlamation');
        if(iconExlamation.contains(e.target)){
            explamation.classList.toggle('activeExplamation');
        } else {
             explamation.classList.remove('activeExplamation');
        }
    } catch (error) {
        return false
    }
})
</script>
<template>
    <div id="blogs" class="container-fluiter">      
        <div class="search_box">
            <input type="text" v-model="term" @keyup.enter="search(term)" placeholder="what are you looking for?">
            <button class="btn-search" @click="search(term)"><i class="fas fa-search"></i></button>
        </div>
        <div class="findBlogByType">
            <div class="main-find">
                <span class="explamation">
                    <p>You can change type search, Default search is search by title.</p>
                </span>
                <i class="fa-solid fa-circle-exclamation iconExlamation"></i>
            <label for="findBlogByType">
                Search blog by hashtag
                <input id="findBlogByType" v-model="findBlogByType"  @change="changeTypeSearch()" type="checkbox" class="">
            </label>
            </div>
        </div>
        
        <br>
        <br>
        <br>
 
        <div class="toggle" v-if="isLoggedIn">
            <button v-if="!toggle" class="toggle2select" @change="change()" >Toggle to select</button>
        </div>
        <div class="selectAll">
            <div class="select2del">
                <button class="deleteSelectBlog" v-if="checked" @click="deleteRecords(selected)">Delete</button>
            </div>
            <label for="selectsAll">
                Select all records
                <input id="selectsAll" type="checkbox" v-model="select_all" @change="select()">
            </label>
        </div>
        <div style="display: flex; justify-content: center;" class="msgWarn">
            <span v-if="emoji">{{messageWarn}}😟</span>
        </div>
        <div class="row mb-3 mt-3">
            <div class="col-lg-3 col-md-6 col-sm-6 pt-3 main-card" v-for="blog in blogs" :key="blog._id" >
                <input class="select" type="checkbox" :value="blog._id" v-model="selected" @change="selectSingleBlog()">
                <div id="blogs" class="card font-weight ">
                    <img class="img-blogs" :src="PF + `/${blog.image}`" alt="loi hinh anh" >
                    <div class="card-body">
                        <span class="mb-2 title">{{blog.title}}</span>
                        <div class="content">
                            <div class="block-content text-white">
                                <i class="fas fa-tags text-white"></i>
                                <a class="mt-3 text-white">#{{blog.category}}</a>
                            </div>
                                <p class="text-white">{{blog.content.substring(0,100) + "..."}}</p>
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

            <br>
            <br>
            <br>
        </div>
    </template>

<style >
.main-find {
    display: flex;
    position: relative;
    align-items: baseline;
}
.main-find i {
    margin-right: 5px;
    cursor: pointer;
}
.main-find i:hover {
    opacity: 0.8;
}

.explamation{
    background: white;
    bottom: -80px;
    position: absolute;
    right: 191px;
    width: 200px;
    padding: 10px;
    height: 80px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;

}
.explamation.activeExplamation{
    opacity:1;
    transition: opacity 0.2s ease-in-out;
    pointer-events: auto;
}
.explamation p {
    color: black;
    margin: 0 ;
}
.explamation::before {
    content: "";
    width: 16px;
    height: 16px;
    z-index: 5;
    background: white;
    border-top-left-radius: 3px;
    position: absolute;
    top: -8px;
    right: 10px;
    transform: rotate(45deg);
}
.findBlogByType {
    float: right;
    margin: 20px;
}

.findBlogByType label {
    display: flex;
    justify-content:center;
    align-items:center;
}
.findBlogByType span {
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content:center;
}
.toggle {
    display: flex;
    justify-content: flex-end;
    margin: 20px;
}
.toggle .toggle2select {
    border: none;
    padding:5px 10px;
    border-radius:5px;
    background: rgb(242, 194, 62);
}
.select {
    position: absolute;
    z-index: 10;
    right: 15px;
    opacity: 0;
    pointer-events: none;
}
input[type="checkbox"] {
    margin:10px;
}
.selectAll{
    opacity: 0;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
}
.deleteSelectBlog {
    padding: 5px 10px;
    color: white;
    background: red;
    border-radius:5px;
    border: none;
}
.selectAll.selectAllActive,
.select.selectActive {
    opacity: 1;
    pointer-events: auto;
}

.search_box{
    display: flex;
    position: relative;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
}

.search_box input[type="text"]{
  padding: 20px;
  padding-right: 60px;
  box-sizing: border-box;
  background: rgba(0,0,0,0.3);
  border: 2px solid #fff;
  border-radius: 10px;
  font-size: 18px;
  color: #fff;
  outline: none;
}

.btn-search{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
    color: #fff;
    border: none;
    background: transparent;
    font-size: 25px;
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #fff;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #fff;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: #fff;
}

.main-card .card {
    opacity: 0.8;
    background: #303030;
    border-radius: 5px;
    position: relative;
}
.main-card .card.toggleActive {
    opacity: 1;
    transition:0.6s all;
    transform: rotate(1deg)
}



.card .img-blogs {
    height:300px;
    vertical-align: top;
    transition:0.6s;
    border-radius: 5px;
    
}

.main-card .card:hover {
    opacity: 1;
    transition:0.6s all;
    transform: rotate(1deg)
} 

.card:hover .title{
    transform: translateY(-30px);
    transition:0.6s;

}


.card:hover .content {
    opacity: 1;
    transform: translateY(-40px);
    transition:0.6s;

}
.card-body .title {
    font-weight: 400;
    text-align: center;
    display: flex;
    font-size: 40px;
    color: #fff;
    justify-content: space-around;
}
.card-body .title.activeTitle {
    transform: translateY(-30px);
    transition:0.6s;
}
.card-body .content {
    margin: 30px 30px 0 30px;
    font-weight: 400;
    text-align: center;
    opacity: 0;
    height: 200px;
}
.card-body .content.toggleActiveContent {
    opacity: 1;
    transform: translateY(-40px);
    transition:0.6s;
}
.main-card .card .card-body{
    position:absolute;
    padding:0;
    margin-top: 30px;
}

.block-content{ 
    display: block;
}

.block-content > a {
    cursor: pointer;
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
.font {
    font-size:14px
}

@media screen and (max-width:1023px) {
    .card-body .title-blog {
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 20px;
    }
}

@media (max-width: 739px) {
    .search_box input[type="text"]{
        width: 100%;
        margin-left: 20px;
    }
}
</style>

<script setup>
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
