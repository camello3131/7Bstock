import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { actualizarData, auth, db, getData, getDatas, getDataStock, actualizarDataStock, getDatasStock } from "../firebase/firebase.js"
import {  getDocs, collection } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
import { loginCheck } from "./loginCheck.js"
import { setUpData } from "./data.js"
import { saveIngresos } from "../firebase/firebase.js"

import "./table.js"
import "./signin.js"
import "./signup.js"
import "./logout.js"
import "../firebase/firebase.js"

const dataContainer = document.querySelector("#inventario")

/*---------------------------------------TRAER DATA------------------------------- */
/*---------------------------------------TRAER DATA------------------------------- */
/*---------------------------------------TRAER DATA------------------------------- */

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const ingresos = await getDocs(collection(db, "ingresos"))
        const stock = await getDocs(collection(db, "stock"))
        setUpData(ingresos.docs, stock.docs)
        let i = 0
        let html = ""
        const querySnapshot = await getData()

        querySnapshot.forEach(doc => {

            const data = doc.data()
            html+= `
            <tr>
                <td>${i + 1}</td>
                <td>${data.nombre}</td>
                <td>${data.cantidad}</td>
            </tr>
            `;
            i++
        })

        dataContainer.innerHTML+=html

        const stockData = async() => {
            let html = ""
            const querySnapshot = await getDataStock()
    
            querySnapshot.forEach(doc => {
    
                const data = doc.data()
                html+= `
                <tr>
                    <td>${i + 1}</td>
                    <td>${data.nombre}</td>
                    <td>${data.stock}</td>
                </tr>
                `;
                i++
            })
    
            dataContainer.innerHTML +=html
        }
        stockData()
        
    } else {
    }
    loginCheck(user)
})


/*---------------------------------------ACTUALIZAR DATA------------------------------- */
/*---------------------------------------ACTUALIZAR DATA------------------------------- */
/*---------------------------------------ACTUALIZAR DATA------------------------------- */
let today = new Date();
let now = today.toLocaleDateString('en-US');

const btnCarga = document.querySelector("#cargaIngresos")
btnCarga.addEventListener("click", async e => {
    e.preventDefault()

    const idHilados = "2tbQCS2v4Zr02J0Zq9aS"
    const idCajas = "EFYZsIroihvZdfCyFe2S"
    const select = document.querySelector("#etiquetaSelect").value
    const nuevoIngreso = Number(document.querySelector("#cantidadIngreso").value)
    const form = document.querySelector("#formIngreso")

    if(select === "Hilados") {
        const doc = await getDatas(idHilados)
        const elemento = doc.data()
        const cantidadActual = elemento.cantidad
        const cantidadTotal = cantidadActual + nuevoIngreso

        saveIngresos("Hilados", nuevoIngreso, "Agregar", now)
        await actualizarData(idHilados, {nombre: "Hilados", cantidad: cantidadTotal})
        form.reset()
        location.reload()
    }
    if(select === "Cajas") {
        const doc = await getDatas(idCajas)
        const elemento = doc.data()
        const cantidadActual = elemento.cantidad
        const cantidadTotal = cantidadActual + nuevoIngreso

        saveIngresos("Cajas", nuevoIngreso, "Agregar", now)
        await actualizarData(idCajas, {nombre: "Cajas", cantidad: cantidadTotal})
        form.reset()
        location.reload()
    }
})

const btnQuitar = document.querySelector("#quitarIngreso")
btnQuitar.addEventListener("click", async e => {
    e.preventDefault()

    const idHilados = "2tbQCS2v4Zr02J0Zq9aS"
    const idCajas = "EFYZsIroihvZdfCyFe2S"
    const select = document.querySelector("#etiquetaSelect").value
    const nuevoIngreso = Number(document.querySelector("#cantidadIngreso").value)
    const form = document.querySelector("#formIngreso")

    if(select === "Hilados") {
        const doc = await getDatas(idHilados)
        const elemento = doc.data()
        const cantidadActual = elemento.cantidad
        const cantidadTotal = cantidadActual - nuevoIngreso

        saveIngresos("Hilados", nuevoIngreso, "Eliminado", now)
        await actualizarData(idHilados, {nombre: "Hilados", cantidad: cantidadTotal})
        form.reset()
        location.reload()
    }
    if(select === "Cajas") {
        const doc = await getDatas(idCajas)
        const elemento = doc.data()
        const cantidadActual = elemento.cantidad
        const cantidadTotal = cantidadActual - nuevoIngreso

        saveIngresos("Cajas", nuevoIngreso, "Eliminado", now)
        await actualizarData(idCajas, {nombre: "Cajas", cantidad: cantidadTotal})
        form.reset()
        location.reload()
    }
})



const btnCargaStock = document.querySelectorAll(".carga")
const btnBajaStock = document.querySelectorAll(".bajaBtn")

btnBajaStock.forEach(btn => {
    btn.addEventListener("click", async (e) => {
        e.preventDefault()
        let select = ""
        let id = ""
        let nuevoIngreso = 0

        if(e.target.id === "bajaStock"){
            select = document.querySelector("#etiquetaSelect-altas").value
            nuevoIngreso = Number(document.querySelector("#cantidadStock").value)
        } else if(e.target.id === "cargaRetiro"){
            select = document.querySelector("#etiquetaSelect-retiros").value
            nuevoIngreso = Number(document.querySelector("#cantidadRetiro").value)
        }
    
        if(select === "7mm sin alma") {
            id="ypG0DC7prhIO6QjphijG"
        } else if (select === "7mm con alma"){
            id="LfEY81RzpFxyLtXY3MR9"
        } else if (select === "5mm sin alma"){
            id="rwJROAAkrCcpa5oOQhjJ"
        } else if (select === "5mm con alma"){
            id="mm4YwbE9PvjmcQtYIJQT"
        } else if (select === "7.5mm"){
            id="b4HkefubTJT8ZXbcBDvS"
        } else if (select === "7mm chicote"){
            id = "CZHGjN0sJcIUuVfk3AUK"
        }
    
        let doc = await getDatasStock(id)
        const elemento = doc.data()
        const cantidadActual = elemento.stock
        const cantidadTotal = cantidadActual - nuevoIngreso
    
        saveIngresos(select, nuevoIngreso, "Retiro", now)
        await actualizarDataStock(id, {nombre: select, stock: cantidadTotal})
        location.reload()
    })
})


btnCargaStock.forEach(btn => {
    btn.addEventListener("click", async (e) => {
        e.preventDefault()
        let select = ""
        let id = ""
        let nuevoIngreso = 0

        if(e.target.id === "cargaStock"){
            select = document.querySelector("#etiquetaSelect-altas").value
            nuevoIngreso = Number(document.querySelector("#cantidadStock").value)
        } else if(e.target.id === "cancelarRetiro"){
            select = document.querySelector("#etiquetaSelect-retiros").value
            nuevoIngreso = Number(document.querySelector("#cantidadRetiro").value)
        }
    
        if(select === "7mm sin alma") {
            id="ypG0DC7prhIO6QjphijG"
        } else if (select === "7mm con alma"){
            id="LfEY81RzpFxyLtXY3MR9"
        } else if (select === "5mm sin alma"){
            id="rwJROAAkrCcpa5oOQhjJ"
        } else if (select === "5mm con alma"){
            id="mm4YwbE9PvjmcQtYIJQT"
        } else if (select === "7.5mm"){
            id="b4HkefubTJT8ZXbcBDvS"
        } else if (select === "7mm chicote"){
            id = "CZHGjN0sJcIUuVfk3AUK"
        }
    
        let doc = await getDatasStock(id)
        const elemento = doc.data()
        const cantidadActual = elemento.stock
        const cantidadTotal = cantidadActual + nuevoIngreso
    
        saveIngresos(select, nuevoIngreso, "Carga", now)
        await actualizarDataStock(id, {nombre: select, stock: cantidadTotal})
        location.reload()
    })
})




