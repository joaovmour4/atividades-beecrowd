var input = prompt();
var lines = input.split(' ');

var cardapio = {
    1:4.0,
    2:4.5,
    3:5.0,
    4:2.0,
    5:1.5
};

console.log(`Total: R$ ${(lines[1]*cardapio[lines[0]]).toFixed(2)}`);
