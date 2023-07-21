while(true){
    var input = prompt();
    var senha = Number(input);
    
    if(senha !== 2002){
        alert('Senha Invalida');
    }else{
        alert('Acesso Permitido');
        break;
    }
}