var n1 = prompt("Digite o primeiro numero")
var s = prompt("Digite o sinal")
while(s!= "+" && s!="-" && s!="*" && s!="/"){
   alert("digite um sinal certo macaco + ou - ou * ou /")
    var s = prompt("Digite o sinal")  
}
var n = prompt("Digite o segundo nomero")
  n = parseInt(n)
  n1 = parseInt(n1)

 var resultado= 0
if(s=="+"){
    resultado=n1+n
}
else if(s=="-"){
    resultado=n1-n
}
else if(s="*"){
    resultado=n1*n
}
else if(s="/"){
    resultado=n1/n
}
alert("O resultado é: " + resultado)
