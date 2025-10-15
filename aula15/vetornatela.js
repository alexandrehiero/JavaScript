let num = [5, 8, 2, 9, 3]

/*for (var c = 0; c <= num.length; c++) {
    console.log(num[c])
}*/

for (var c in num) {
    console.log(num[c])
}
var a = 27
let pos = num.indexOf(a)

if (pos == -1) {
    console.log('O valor não foi encontrado na array')
} else {
    console.log(`Na array, o valor ${a} está na posição ${pos}`)
}
