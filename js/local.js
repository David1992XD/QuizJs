const localdata = () => {
    console.log("Estoy pendiente")
    const button = document.getElementById("btnLocalStorage")
    button.addEventListener("click", function(e) {
        const text = document.getElementById("localStorage").value
        localStorage.setItem('texto_Local', text)
        alert("Dato guardado")
    }, false)

}

localdata()