const dataList = document.querySelector(".list-group")

export const setUpData = (data) => {
    if(data.length) {
            data.forEach( doc => {
                const dato = doc.data()
                console.log(dato)
            })
        console.log(dataList)
    } else {
        dataList.innerHTML=`<h1 class="center-align> Logearse para utilizar</h1>`
    }
}