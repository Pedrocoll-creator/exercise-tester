
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
};

function fromDollarToYen(dollar) {
    let valueInYen = dollar * (156.5 / 1.07); 
    return valueInYen;
}


function fromYenToPound(yen) {
    let valueInPound = yen * (0.87 / 156.5); 
    return valueInPound;
}


const sum = (a, b) => {
    return a + b;
};

console.log(sum(7, 3));

let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87   // British pound
};


function fromEuroToDollar(euro) {
    let valueInDollar = euro * oneEuroIs["USD"];
    return valueInDollar;
}

console.log(fromEuroToDollar(1));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
