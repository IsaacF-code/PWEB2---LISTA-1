let numero = parseInt(prompt("Digite um número para ser feito a soma dos anteriores"));
soma = 0;
for(var i = 1; i <= numero; i++){
    document.write(soma += i);
    document.write(" ");
}