

// Importamos las funciones a probar
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(expected);
});

test("One dollar should be 146.26 yenes", function() {
    const yenes = fromDollarToYen(1);
    const expected = 1 * (156.5 / 1.07); 
});

test("One yen should be 0.00556 pounds", function() {
    const pounds = fromYenToPound(1);
    const expected = 1 * (0.87 / 156.5); 
    expect(pounds).toBeCloseTo(expected);
});









