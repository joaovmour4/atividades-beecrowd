var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = parseFloat(input);

function calculoSalario(salario){
    var percentual = 0;
    if(salario >= 0 && salario <= 400){
        percentual = 0.15;
    }else if(salario > 400 && salario <= 800){
        percentual = 0.12;
    }else if(salario > 800 && salario <= 1200){
        percentual = 0.10;
    }else if(salario > 1200 && salario <= 2000){
        percentual = 0.07;
    }else if(salario > 2000){
        percentual = 0.04;
    }
    console.log(`Novo salario: ${(salario*percentual + salario).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(salario*percentual).toFixed(2)}`);
    console.log(`Em percentual: ${(percentual*100).toFixed(0)} %`);
}

calculoSalario(lines);