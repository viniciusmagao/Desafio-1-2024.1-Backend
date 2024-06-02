/*
ENGNET - PROCESSO TRAINEE
BACKEND - DESAFIO 1
Vinicius Magao - VVAGA [SQUAD-4]
*/

/*
VERIFICADOR DE PALINDROMO
Retorne true se a string fornecida for um palíndromo. Caso contrário, retorne false.
Um palíndromo é uma palavra ou frase que é dita da mesma maneira na ordem natural que na ordem inversa, ignorando pontuação, capitalização e espaçamento.
Observação: 
1. ok - você precisará remover todos os caracteres não alfanuméricos (pontuação, espaços e símbolos) e 
2. ok - transforme tudo na mesma capitalização (letra em minúsculo ou maiúsculo) para verificar se determinada palavra ou frase é um palíndromo.
Vamos passar strings em diferentes formatos, como racecar, RaceCarar e race CAR entre outros.
Nós também passaremos strings com símbolos especiais, como 2A3*3a2, 2A3 3a2 e 2_A3*3#A2.
*/

function palindrome(str){

    let strInversa = "";
    let limpaStr = /[^A-Za-z0-9]+\s*/g;
    let strLimpa = str.replace(limpaStr,"").toUpperCase(); //remover todos os caracteres não alfanumEricos

    for (let i=1;i<=strLimpa.length;i++){
        strInversa += strLimpa[strLimpa.length-i];//inverte a string original
    }
    
    if (strLimpa == strInversa){
        return true;
    } else {
        return false;
    }
    console.log(strLimpa);
    console.log(strInversa);
}

let str = "_15eye"
console.log(palindrome(str));