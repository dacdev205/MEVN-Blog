import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM80k3hKN7m39x2XlikYbvFHP_z_73M0U",
  authDomain: "frontend-c4081.firebaseapp.com",
  projectId: "frontend-c4081",
  storageBucket: "frontend-c4081.appspot.com",
  messagingSenderId: "735910352076",
  appId: "1:735910352076:web:3a3beb0545f98a037ede69"
};

// Initialize Firebase
initializeApp(firebaseConfig);



createApp(App).use(router).mount("#app");
