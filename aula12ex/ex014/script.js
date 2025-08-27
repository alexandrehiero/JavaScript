function carregar() {
    var hora = new Date()
    var horas = hora.getHours()

    var texto = window.document.getElementById('texto')
    var img = window.document.getElementById('imagem')

    texto.innerHTML = `<p>Agora são ${horas} horas.</p>`


    if (horas < 12) {
        window.document.body.style.backgroundColor = 'gold'
        img.src = 'imagens/maanha.jpg'
    } else if (horas < 18) {
        window.document.body.style.backgroundColor = 'chocolate'
        img.src = 'imagens/tarde.jpg'
    } else {
        window.document.body.style.backgroundColor = 'gray'
        img.src = 'imagens/noite.jpg'
    }

}



  