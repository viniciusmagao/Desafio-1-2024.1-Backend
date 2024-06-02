/*
ENGNET - PROCESSO TRAINEE
BACKEND - DESAFIO 1
Vinicius Magao - VVAGA [SQUAD-4]
*/

/*
CIFRA DE CESAR
Uma das cifras mais simples e mais conhecidas é a cifra de César, também conhecida como uma cifra de mudança. Em uma cifra de transferência, os significados das letras são deslocados de acordo com a quantidade definida.
Um uso moderno comum é a cifra ROT13, onde os valores das letras são deslocados em 13 lugares. Da seguinte forma: A ↔ N, B ↔ O e assim por diante.
Escreva uma função que recebe uma string codificada de ROT13 como entrada e retorna uma string decodificada.
Todas as letras serão maiúsculas. Não transforme nenhum caractere não-alfabético (ou seja, espaços, pontuação), mas passe por eles.
*/

function rot13(str){

    let alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let naoAlfabetico = /[^a-z]/i;
    let strIndex = 0;
    let strTemp = [];

    //Transforma a 'str' num array temporario para manipular cada letra com um indice do array
    for (let j = 0; j < str.length; j++){
        strTemp.push(str[j]);
    }
    for (let i = 0; i < str.length; i++){
        //Se não for uma letra, ele passa para o próximo caracter
        if (naoAlfabetico.test(str[i])){
            continue;
        }
        //Se é uma letra que está a menos de 13 letras de 'distância' do inicio do alfabeto, soma 26
        else if ((alfabeto.indexOf(str[i].toLowerCase())-13) < 0) {
            strIndex = (alfabeto.indexOf(str[i].toLowerCase())-13) + 26;
        }
        else {
            strIndex = alfabeto.indexOf(str[i].toLowerCase())-13;
        }
            //Substituo a letra decodificada no array temporario
            let strDecod = alfabeto[strIndex].toUpperCase();
            strTemp[i] = strDecod;
    }
    str = "";
    //Devolvo a string decodificada para str
    for (let k = 0; k < strTemp.length; k++){
        str += strTemp[k];
    }
    return str;
}
console.log(rot13("SERR PBQR PNZC"));
