import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js"

const firebaseConfig = {
    apiKey: "AIzaSyDlt77P4ubqmwvArq_Avo_dRh9svOZ-WN0",
    authDomain: "laundry-and-coffe-shop.firebaseapp.com",
    projectId: "laundry-and-coffe-shop",
    storageBucket: "laundry-and-coffe-shop.appspot.com",
    messagingSenderId: "71813737229",
    appId: "1:71813737229:web:d5139a20276ea09c90de44",
    measurementId: "G-NVFLCKW950"
  }

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = firebase.auth()

window.addEventListener("load", () => {
    document.querySelector(".login-button button").addEventListener("click", (e) => {
        e.preventDefault()

        const username = document.querySelector("#username input")
        const password = document.querySelector("#password input")

        auth.signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            user = userCredential.user 
            console.log("Log in bem succedido:" + user)
        })
        .catch((error) => {
            const errorMessage = error.messaging
            const errorCode = error.code
            console.error("Erro de log in", errorMessage, errorCode)
            alert("Erro ao fazer Login" + errorMessage)
        })
    })


  } )