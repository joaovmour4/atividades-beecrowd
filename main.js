var lines = prompt()

lines = Number(lines);
const oriValue = lines;

notas = {
    100:0,
    50:0,
    20:0,
    10:0,
    5:0,
    2:0,
    1:0
};


while(lines > 0){
    if(lines >= 100){
        notas[100]++;
        lines -= 100;
    }else if(lines >= 50){
        notas[50]++;
        lines -= 50;
    }else if(lines >= 20){
        notas[20]++;
        lines -= 20;
    }else if(lines >= 10){
        notas[10]++;
        lines -= 10;
    }else if(lines >= 5){
        notas[5]++;
        lines -= 5;
    }else if(lines >= 2){
        notas[2]++;
        lines -= 2;
    }else if(lines >= 1){
        notas[1]++;
        lines -= 1;
    }
}
console.log(oriValue);
const keys = Object.keys(notas);

for(let i=keys.length-1; i>=0; i--){
    console.log(`${notas[keys[i]]} nota(s) de R$ ${keys[i]},00`);
}
