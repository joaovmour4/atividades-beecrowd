const input = prompt();
var lines = input.split('\\n');

const animal = {
    vertebrado: {
        ave:{
            carnivoro: 'aguia',
            onivoro: 'pomba'
        },
        mamifero:{
            onivoro: 'homem',
            herbivoro: 'vaca'
        }
    },
    invertebrado: {
        inseto:{
            hematofago: 'pulga',
            herbivoro: 'lagarta'
        },
        anelideo:{
            hematofago: 'sanguessuga',
            onivoro: 'minhoca'
        }
    }
    
};

console.log(animal[lines[0]][lines[1]][lines[2]]);