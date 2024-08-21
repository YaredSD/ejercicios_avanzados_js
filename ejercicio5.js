function rollDice(number) {
    let Numero = Math.ceil(Math.random()*number);
return Numero;
}
// Dejamos tres ejemplos distintos por consola
console.log(rollDice(6));
console.log(rollDice(10));
console.log(rollDice(1000));