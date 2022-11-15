<template >
    <div class="container-fluiter">
       <div class="row" style="overflow: hidden; background:white;">
       <div class="col-lg-5" style="
          display: flex;
          flex-direction: column;
          place-content: center;
          position: relative;
          height: 100vh;">
          <div class="register" >
             <div><span style="color:black;">Already have an account? </span><router-link class="register-link" to="/login">Login</router-link></div>
             <h1 class="p-3" style="color:black;">Create Your dVcBlog Account</h1>
             <div class="form-login">
                <div class="input-login mb-2">
                   <span class="icon-email"> <i class="far fa-envelope "></i></span>
                   <input class="input-email" type="text" placeholder="Email" v-model="email">
                </div>  
                <div class="input-login">
                   <span class="icon-lock"><i class="fas fa-lock"></i></span>
                   <input class="input-password" type="password" placeholder="Password" v-model="password">
                </div>
             </div> 
                 <div class="mt-4" style="color: red;" v-if="errMsg">{{errMsg}}</div>
                <button class="mt-4 btn-signin" style="
                transition: all .5s ease;
                margin-top: 24px;
                padding: 10px 20px;
                background-color: #303030;
                color: #fff;
                border-radius: 25px;
                border: none;
                text-transform: uppercase;
                " @click="register" >Sign up</button>
          </div>
          <div class="angle" style="
             position: absolute;
             transform: rotate(3deg);
             width: 60px;
             right: -40px;
             height: 101%;
             background: white;
             z-index: 1; ">  
             
          </div>
       </div>
       <div class="col-lg-7" style="
          display: flex;
          align-content: center;
          padding: 0;
          ">
          <div class="background-login"></div>
       </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useRouter} from 'vue-router'
const email = ref("");
const password = ref("");
const router = useRouter();
const errMsg = ref();
const register = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email.value, password.value)
        .then((data) => {
            console.log("Successfully registered!");
            console.log(auth.currentUser)
            router.push('/blogs')
        })
        .catch((error) => {
               console.log("error.code");
                  switch (error.code) {
                     case "auth/invalid-email":
                        errMsg.value = "Invalid email";
                        break;
                     case "auth/user-not-found":
                        errMsg.value = "No account with that email was found";
                        break;
                     case "auth/wrong-password":
                        errMsg.value = "Incorrect password";
                        break;
                     default:
                        errMsg.value = "Email or password is incorrect";
                        break;
                  }   
               
           });
};
</script>

<style>
@media (min-width: 1024px) {
    .register {
        text-align: center;
        margin: 120px;
    }
}

@media (max-width: 1023px) {
    .register {
        margin: auto;
        text-align: center;
        max-width: 350px;
        font-size: 14px;
    }
}
</style>