import { signOut } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "../firebase/firebase.js"

const logout = document.querySelector("#log-out")

logout.addEventListener("click", async e => {
    await signOut(auth)
})