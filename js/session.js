const sesiondata = () => {
    console.log("Estoy pendiente")
    const button2 = document.getElementById("btnsesionStorage")
    button2.addEventListener("click", function(e) {
        const text = document.getElementById("sesionStorage").value
        sessionStorage.setItem('texto_Local', text)
        alert("Dato guardado")
    }, false)

}


sesiondata()