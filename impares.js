const input = prompt();
var lines = Number(input);

var nums = [];

if(lines%2 === 0){
    lines++;
}
for(let i=0; i<6; i++){
    console.log(lines);
    lines+=2;
}