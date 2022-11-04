export const setUpData = (ingresos, stock) => {

    if(ingresos.length) {
        const select = document.querySelector("#etiquetaSelect")
        ingresos.forEach( doc => {
                const dato = doc.data()
                const option = document.createElement("option")
                option.textContent = dato.nombre
                select.appendChild(option)
            })

            const selectStockAlta = document.querySelector("#etiquetaSelect-altas")
            const selectStockBajas = document.querySelector("#etiquetaSelect-retiros")
                stock.forEach(doc => {
                    const dato = doc.data()
                    const option = document.createElement("option")
                    option.textContent = dato.nombre
                    selectStockAlta.appendChild(option)
                })
                stock.forEach(doc => {
                    const dato = doc.data()
                    const option = document.createElement("option")
                    option.textContent = dato.nombre
                    selectStockBajas.appendChild(option)
                })

            const $main = document.querySelector(".main")
            $main.classList.add("is-active")
    } else {
    }
}