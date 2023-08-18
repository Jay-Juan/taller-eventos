document.addEventListener("DOMContentLoaded", () => {
    var botones = document.getElementsByTagName("div");

    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", verAlerta);
    }
});


function verAlerta() {
    alert("Hola! Soy el div");
}