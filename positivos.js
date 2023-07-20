var input = prompt();
var lines = input.split('\\n');

var soma=0.0;
var quant = 0.0;

for(let i=0; i<6; i++){
    let num = parseFloat(lines[i]);
    if(num > 0){
        soma += num;
        quant++;
    }
}

console.log(`${quant} valores positivos`);
console.log((soma/quant).toFixed(1));

// 7\n-5\n6\n-3.4\n4.6\n12