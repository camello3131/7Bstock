import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "../firebase/firebase.js"
import "../firebase/firebase.js"
import "./signup.js"
import "./logout.js"
import { loginCheck } from "./loginCheck.js"
import "./signin.js"

onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
})