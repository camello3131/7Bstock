import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth, db } from "../firebase/firebase.js"
import {  getDocs, collection } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
import { loginCheck } from "./loginCheck.js"
import { setUpData } from "./data.js"

import "./signin.js"
import "./signup.js"
import "./logout.js"
import "../firebase/firebase.js"

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const lista = await getDocs(collection(db, "data"))
        setUpData(lista.docs)
    } else {
        
    }
    loginCheck(user)
})