function calcular() {
    var agora = new Date()
    var anoatual = agora.getFullYear()

    var anodigitado = window.document.getElementById('anoi')
    var anodigitado = Number(anodigitado.value)
    var idade = anoatual - anodigitado
    
    var sexo = window.document.getElementsByName('sexo')[0]

    res.innerHTML = `Sua idade é de ${idade} anos.`


    if (idade < 18) { 
        img.src = 'imagens/homem_adolescente.jpg' 
    } else if (idade <= 59) {
        img.src = 'imagens/homem_adulto.jpg'
    } else if (idade >= 60 && idade <= 110) {
        img.src = 'imagens/homem_senhor.jpg'
    } else {
        res.innerHTML = `Sua idade é inválida!`
    }


}


  