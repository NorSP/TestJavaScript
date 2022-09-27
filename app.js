const fromEuroToDollar = function(valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 127.9 / 1.2;
    // retornamos el valor
    return parseFloat(valueInYen.toFixed(2));
}
const fromYenToPound = function(valueInYen) {
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.8 / 127.9;
    // retornamos el valor
    return valueInPound;
}




const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))

module.exports = {
    sum,
    fromEuroToDollar,
    fromYenToPound,
    fromDollarToYen
}