
<template >
   <div class="container-fluiter">
      <div class="row" style="overflow: hidden; background:white;">
      <div class="col-lg-5" style="
         display: flex;
         flex-direction: column;
         place-content: center;
         position: relative;
         height: 100vh;">
         <div class="login">
            <div><p style="color: black;">Don't have an account? </p><router-link class="register-link" to="/register">Register</router-link></div>
            <h1 class="p-4" style="color: black;">Login to dVcBlog</h1>
            <div class="form-login">
               <div class="input-login mb-2">
                  <span class="icon-email"> <i class="far fa-envelope"></i></span>
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
               " @click="login" >Sign in</button>
         </div>
         <div class="angle" style="
            position: absolute;
            transform: rotate(3deg);
            width: 80px;
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
   import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
   import {useRouter} from 'vue-router'
   const email = ref("");
   const password = ref("");
   const errMsg = ref();
   const router = useRouter();
   
   const login = () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth,email.value, password.value)
      .then((data) => {
         console.log("Successfully sign in");
         console.log(auth.currentUser)
         router.push('/')
         
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
.login {
   text-align: center;
   margin: auto;
}

body {
    background: white;
}

.background-login {
    width: 100%;
    background-size: cover;
    height: 100%;
    background-image: url("https://fireblogs-50850.web.app/img/Background.048d49ff.png");
}

.icon-email,
.icon-lock {
    position: absolute;
    line-height: 50px;
    margin: 0 8px;
}

.input-email,
.input-password {
    width: 100%;
    border: none;
    background-color: #e6eae9;
    padding: 4px 4px 4px 30px;
    height: 50px;
    
}

.input-login {
    position: relative;
    color: black;
}

.btn-signin:hover {
    opacity:0.8;
}

.register-link {
    color: black;
    text-decoration:underline;
}

.register-link:hover {
    text-decoration:underline;
    opacity: 0.8;
    color: black;
}

@media (max-width:1023px) {
    .btn-signin {
        width: 100%;
    }
}
</style>