let array = []

function inlista(n, a) {
    if (a.indexOf(Number(n.value)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    var num = document.getElementById('inum') 

    if (num.value.length == 0 || num.value > 100 || num.value < 1) {
        window.alert('Digite um número válido!')
    
    } else if (inlista(num, array)) {
        window.alert('Digite um número que ainda não foi digitado!')

    } else {
        num = Number(num.value)
        let lista = document.getElementById('iarray') 
        foto.innerHTML = ''

        array.push(num)

        var item = document.createElement('option')
        item.text = `Valor ${num} selecionado!`

        lista.appendChild(item)
    }
}



function finalizar() {

    if (array.length == 0) {
        window.alert('Adicione valores antes de finalizar')

    } else {
        let soma = 0
        let media = 0

        for (let a = 0; a < array.length; a++) {
            soma += array[a]      
        }

        media = soma / array.length
        let menornum = Math.min(...array)
        let maiornum = Math.max(...array)

        let foto = document.getElementById('foto')
        foto.innerHTML = `<p>Ao todo, temos ${array.length} números cadastrados.</p>`
        foto.innerHTML += `<p>O maior valor informado foi ${maiornum}.</p>`
        foto.innerHTML += `<p>O menor valor informado foi ${menornum}.</p>`
        foto.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        foto.innerHTML += `<p>A média de todos os valores digitados é ${media}.</p>`
    }
}

  