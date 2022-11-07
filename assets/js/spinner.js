

export function quitarSpinner() {
    const spinnerContainer = document.querySelector("#container-spinner")
    const spinner = document.querySelector("#spinner")
    const body = document.querySelector("body")
    spinner.classList.add("none")
    spinnerContainer.classList.add("none")
    body.classList.remove("hiden")
}

export function agregarSpinner() {
    const spinnerContainer = document.querySelector("#container-spinner")
    const spinner = document.querySelector("#spinner")
    const body = document.querySelector("body")
    spinner.classList.remove("none")
    spinnerContainer.classList.remove("none")
    body.classList.add("hiden")
}

export function sweetAlert() {
    Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'Datos cargados correctamente',
        showConfirmButton: false,
        timer: 1500
    })
    setTimeout(() => {
        location.reload()
    }, 2000);
}

export function sweetAlertError() {
    Swal.fire({
        position: 'center-center',
        icon: 'error',
        title: 'Ocurrió un error',
        showConfirmButton: false,
        timer: 1500
    })
    setTimeout(() => {
        location.reload()
    }, 2000);
}
