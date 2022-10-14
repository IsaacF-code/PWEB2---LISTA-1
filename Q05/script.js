let a = 18; // Colocar para usuário digitar
let b = 12; // Colocar para usuário digitar
resto = 1;

if (a >= b){
    while(resto != 0) {
        resto = a % b;
        a = b;
        b = resto;
    }
}

// Há mais código para fazer