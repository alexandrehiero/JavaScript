function fatorial(n) {
    var fat = 1

    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

let factory = fatorial(5)
console.log(factory)