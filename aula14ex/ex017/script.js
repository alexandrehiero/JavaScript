function gerar() {
    var num = document.getElementById('inum')
    var res = document.getElementById('itabuada')
    
    if (num.value.length == 0) {
        window.alert('Escreva algum número!')

    } else {
        var num = Number(num.value)
        var c = 0
        res.innerHTML = ''

        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${c * num}`
            item.value = `tab${c}`
            
            res.appendChild(item)
            c++
        }
    }



}


  