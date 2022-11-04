        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use

        import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
        import {  getFirestore, collection, addDoc, getDocs, onSnapshot, getDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyDqalphcMpInvqLU6hFILCpD9lxb2-25Ic",
          authDomain: "balles-stock.firebaseapp.com",
          projectId: "balles-stock",
          storageBucket: "balles-stock.appspot.com",
          messagingSenderId: "36331488445",
          appId: "1:36331488445:web:018f296e4594912dd6a3d4",
          measurementId: "G-WH5PXC6WP3"
        };
      
        // Initialize Firebase
        export const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        export const auth = getAuth(app);
        export  const db = getFirestore(app);

        
        
        export const saveIngresos = (ingreso, cantidad, operacion, date) => {
          addDoc(collection(db, "movimientos"), {
            nombre: ingreso,
            cantidad: cantidad,
            operacion: operacion,
            fecha: date
          })
        }

        export const saveStock = (ingreso, cantidad, operacion, date) => {
          addDoc(collection(db, "movimientos"), {
            nombre: ingreso,
            cantidad: cantidad,
            operacion: operacion,
            fecha: date
          })
        }


        export const getData = () => getDocs(collection(db, "ingresos"))
        export const getDatas = (id) => getDoc(doc(db, "ingresos", id))
        export const actualizarData = (id, datos) => 
        updateDoc(doc(db, "ingresos", id), datos)

        export const getDataStock = () => getDocs(collection(db, "stock"))
        export const getDatasStock = (id) => getDoc(doc(db, "stock", id))
        export const actualizarDataStock = (id, datos) =>
        updateDoc(doc(db, "stock", id), datos)

        export const getDataMovimientos = () => getDocs(collection(db, "movimientos"))

