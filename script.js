let puntajeLocal = localStorage.getItem("puntaje")
let puntajeEscudo = localStorage.getItem("escudo")
let puntaje
let escudo 

// FUNCIONES
function display() {
    document.getElementById('puntos').innerText = puntaje
}

function displayEscudo() {
    document.getElementById('puntos-escudo').innerText = escudo
}

function maxPuntaje() {
    if (puntaje > 100) {
        puntaje = 100
        display()
    } else {
        display()
    }
}

function maxEscudo() {
    if (escudo > 20) {
        escudo = 20
        displayEscudo()
    } else {
        displayEscudo()
    }
}

function escudoEliminado() {
    if (escudo == 0) {
        alert("Tu escudo ha sido destruido.")
        document.getElementById('sec-escudo').style.visibility = 'hidden'
        document.getElementById('tomar-escudo').style.display = 'block'
        puntajeEscudo = 0
    } else displayEscudo()
}
function hasMorido(){
    if (puntaje < 1){
        alert ("Has muerto ☠")
        puntaje = 0
        puntajeLocal = puntaje
        display();
    }
}
function bootCheckPuntos() {
    if (puntajeLocal == null) {
        resetUtility()
        maxPuntaje()
    } else {
        puntaje = puntajeLocal
        maxPuntaje()
        display()
    }
}
function bootCheckEscudo() {
    if (puntajeEscudo > 0) {
        escudo = puntajeEscudo
        displayEscudo()
        document.getElementById('sec-escudo').style.visibility = 'visible'
    } else{
        document.getElementById('sec-escudo').style.visibility = 'hidden'
    }
}
function resetUtility() {
    puntaje = 100;
    escudo = 0;
    localStorage.setItem("escudo", escudo)
    localStorage.setItem("puntaje", puntaje)
    display()
    document.getElementById('sec-escudo').style.visibility = 'hidden'
    document.getElementById('tomar-escudo').style.display = 'block'
    alert("⭐Puntos reiniciados⭐")
}
// SETUP
bootCheckPuntos()
bootCheckEscudo()

// Botones
document.getElementById('sumar').addEventListener('click', function () {
    puntaje++
    localStorage.setItem("puntaje", puntaje)
    maxPuntaje()
})

document.getElementById('restar').addEventListener('click', function () {
    puntaje--
    localStorage.setItem("puntaje", puntaje)
    hasMorido()
    maxPuntaje()
})

document.getElementById('tomar-escudo').addEventListener('click', function () {
    escudo = 20
    localStorage.setItem("escudo", escudo)
    maxEscudo()
    document.getElementById('sec-escudo').style.visibility = 'visible'
    document.getElementById('tomar-escudo').style.display = 'none'
})

document.getElementById('restar-escudo').addEventListener('click', function () {
    escudo--
    localStorage.setItem("escudo", escudo)
    maxEscudo()
    escudoEliminado()
})

document.getElementById('sumar-escudo').addEventListener('click', function () {
    escudo++
    localStorage.setItem("escudo", escudo)
    maxEscudo()
    escudoEliminado()
})

document.getElementById('reset').addEventListener('click', resetUtility)