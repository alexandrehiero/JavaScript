function calcular() {
    var agora = new Date()
    var anoatual = agora.getFullYear()
    var anodigitado = window.document.getElementById('anoi')
    var anodigitado = Number(anodigitado.value)
    var idade = anoatual - anodigitado

    var res = window.document.getElementById('texto')
    res.innerHTML = `Você tem ${idade} anos.`

    var tamanhodadiv = window.document.getElementById('tamanhodadiv')
    tamanhodadiv.style.height = '350px'


    var foto = window.document.getElementById('foto')
    
    if (idade < 18 && idade > 0) {
        foto.src = 'imagens/homem_adolescente.jpg' 

    } else if (idade <= 59) {
        foto.src = 'imagens/homem_adulto.jpg'

    } else if (idade >= 60 && idade <= 110) {
        foto.src = 'imagens/homem_senhor.jpg'

    } else {
        res.innerHTML = `Sua idade é inválida!`
    }

}


  