function verificar() {
    var agora = new Date()
    var anoatual = agora.getFullYear()
    var anodigitado = window.document.getElementById('anoi')
    var anodigitado = Number(anodigitado.value)
    var res = window.document.getElementById('res')
    var fundo = window.document.getElementById('tamanhodadiv')

    if (anodigitado == 0 || anodigitado > anoatual || anodigitado < 0 ) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sexo = window.document.getElementsByName('sexo')
        var idade = anoatual - anodigitado
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade <= 21) {
                // Jovem
                img.setAttribute('src', 'homem_adolescente.jpg')
            } else if (idade > 21 && idade <= 59) {
                // Adulto
                img.setAttribute('src', 'homem_adulto.jpg')
            } else if (idade > 60 && idade < 120) {
                // Senhor
                img.setAttribute('src', 'homem_senhor.jpg')
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade <= 21) {
                // Jovem
                img.setAttribute('src', 'mulher_jovem.jpg')
            } else if (idade > 21 && idade <= 59) {
                // Adulta
                img.setAttribute('src', 'mulher_adulta.jpg')
            } else if (idade > 60 && idade < 120) {
                // Senhora
                img.setAttribute('src', 'mulher_senhora.jpg')
            }
        }

        res.style.textAlign = 'center'        
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`      
        res.appendChild(img)

        fundo.style.height = '320px'
    }
}


  