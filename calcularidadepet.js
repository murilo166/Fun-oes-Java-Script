

function calculo(){

    var nome=prompt("qual e o nome do seu cachorro");
    var idadecachorro=parseInt(prompt("qual idade do seu pet em anos caninos?"));

while(isNaN(idadecachorro)){
    alert("so aceitamos numeros inteiros, tente novamente");
    var idadecachorro=parseInt(prompt("qual idade do seu pet em anos caninos?"));

}
    var especie=prompt("qual è a especie do seu pet");


    var conversao=idadecachorro*7;

    alert("seu pet tem"+" "+conversao+" "+"anos em anos humanos");

    alert(nome +" "+"tem"+"  "+conversao+"  "+" anos de verdade! Um(a) "+" " + especie+" " +"tem uma relação de 7 anos de cachorro para cada 1 ano humano");
    

    


}

calculo();
calculo();
calculo();