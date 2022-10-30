import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { auth } from "../firebase/firebase.js";


const signInForm = document.querySelector("#login-form")

signInForm.addEventListener("submit", async e => {
    e.preventDefault()

    const email = document.querySelector("#loggin-email").value;
    const pass = document.querySelector("#loggin-pass").value;

    
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, pass)
        console.log(credentials)
        const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
        modal.hide()
    } catch (error) {
        if (error.code === "auth/wrong-password") {
            const span = document.createElement("span")
            span.textContent = "Contraseña incorrecta"
            const loginForm = document.getElementById("errorLogin")
            loginForm.appendChild(span)
        } else if(error.code === "auth/user-not-found") {
            const span = document.createElement("span")
            span.textContent = "Usuario incorrecto"
            const loginForm = document.getElementById("errorLogin")
            loginForm.appendChild(span)
        } else {
            const span = document.createElement("span")
            span.textContent = error
            const loginForm = document.getElementById("errorLogin")
            loginForm.appendChild(span)
        }
    }
})