function calcular() {
    var inicio = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    
    var quadrado = document.getElementById('total')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Digite todos os campos')

    } else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        
        if (passo <= 0) {
            window.alert('Não é possível fazer esse cálculo, portanto, assumiremos o passo igual a 1')
            passo = 1
        }  

        if (inicio.lenght !== 0 && fim.lenght !== 0 && passo.lenght !== 0) {
            if (passo > 0 && fim > inicio) {
                res.innerHTML = `<p>Contando...</p>`
                for (var c = inicio; c <= fim; c += passo) {
                    res.innerHTML += `${c} 👉`
                }
                res.innerHTML += `🏁`

            } else if (passo > 0 && inicio > fim) {
                res.innerHTML = `<p>Contando...</p>`
                for (var d = inicio; d >= fim; d -= passo) {
                    res.innerHTML += `${d} 👉`
                }
                res.innerHTML += `🏁`
            }   
        }
    }
}   
