import { db, getDataMovimientos } from "../firebase/firebase.js"
import {  getDocs, collection } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
import { quitarSpinner } from "./spinner.js";


let dataTable;
let dataTableIsInitialized = false;

const dataTableOptions = {
    scrollX: true,
    destroy: true,
    language:{
        lengthMenu : "Mostrar _MENU_ registros por página",
        zeroRecords: "Ninguna coincidencia encontrada",
        info: "Mostrando _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ninguna coincidencia encontrada",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar",
        loadingRecords: "Cargando...",
        paginate: {
            firts: "Primero",
            last: "Ultimo",
            next: "Siguiente",
            previous: "Anterior"
        }
    }
}

const initDataTable = async () => {
    if(dataTableIsInitialized) {
        dataTable.destroy();
    }
    
    await listData();
    dataTable = $("#data-table-movimientos").DataTable(dataTableOptions);
    
    dataTableIsInitialized = true
}

const listData = async () => {
    try{
        const data = await getDataMovimientos(collection(db, "movimientos"))
        let content = ``
        let i = 0
        data.forEach((doc) => {
            const datos = doc.data()
            content += `
            <tr>
            <td>${i + 1}</td>
            <td>${datos.fecha}</td>
            <td>${datos.nombre}</td>
            <td>${datos.cantidad}</td>
            <td>${datos.operacion}</td>
            </tr>
            `;
            i++
            const tablaMovimientos = document.getElementById("table-movimientos")
            tablaMovimientos.innerHTML = content
        })
        quitarSpinner()
    }
    catch (err) {
        alert (err)
    }
}

window.addEventListener("load", async e => {
    await initDataTable()
})

