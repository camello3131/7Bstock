import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {auth} from "../firebase/firebase.js"

const d = document;

const signUpForm = d.getElementById("signUp-form")

signUpForm.addEventListener("submit", async e => {
    e.preventDefault()
    const pass = d.getElementById("login-pass").value;
    const email = d.getElementById("login-email").value;

    console.log(pass, email)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, pass)
        console.log(userCredentials)

        const modalS = d.querySelector("#exampleModalR")
        const modal = bootstrap.Modal.getInstance(modalS)
        modal.hide()
    } catch (error) {
        console.log(error)
    }
})