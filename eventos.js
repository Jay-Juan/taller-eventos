document.addEventListener("DOMContentLoaded", () => {
    var div = document.getElementsByTagName("div");
    var boton = document.getElementsByTagName("button")
    
    for (var i = 0; i < div.length; i++) {
        div[i].addEventListener("click", verAlerta);
    }

    

    for (var i = 0; i < boton.length; i++) {
        boton[i].addEventListener("click", Alerta);
    }

});


function verAlerta() {
    alert("Hola! Soy el div");
}

function Alerta() {
    alert("Hola!");
    event.stopPropagation();
}