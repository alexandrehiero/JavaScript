    var hora = new Date()
var horas = hora.getHours()

var texto = window.document.getElementById('texto')
texto.innerHTML = `<p>Agora são ${horas} horas.</p>`

if (horas < 12) {
    window.document.body.style.backgroundColor = 'gold'
} else if (horas <= 18) {
    window.document.body.style.backgroundColor = 'chocolate'
} else {
    window.document.body.style.backgroundColor = 'gray'
}


  