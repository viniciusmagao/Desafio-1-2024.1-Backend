/*
ENGNET - PROCESSO TRAINEE
BACKEND - DESAFIO 1
Vinicius Magao - VVAGA [SQUAD-4]
*/

/*
CONVERSOR DE NUMERAIS ROMAMOS
Converta o número dado em um número romano.
Todos os números romanos devem ser em maiúsculas.
*/

function convertToRoman(num){

    let numRoman = "";
    let numStr = num.toString();
    let digitosNum = num.toString().length;
    let listRoman = ["I","V","X","L","C","D","M"]
    let nivel = 0;

    //Funcao insere letra
    function insertI(nivel,count){
        let numRomanTemp="";
        numRomanTemp += listRoman[nivel].repeat(count);
        return numRomanTemp;
    }

    if(Number(digitosNum) == 1) nivel = 0;
    if(Number(digitosNum) == 2) nivel = 2;
    if(Number(digitosNum) == 3) nivel = 4;
    if(Number(digitosNum) == 4) nivel = 6;
    
    for(let i =0;i<numStr.length;i++){

        //Numero entre 1 e 3
        if(Number(numStr[i]) <4){
            numRoman += insertI(nivel,Number(numStr[i]));
        }
        //Numero igual a 4
        else if(Number(numStr[i]) == 4){
            numRoman += insertI(nivel,1) + insertI(nivel+1,1);
        }
        //Numero entre 5 e 8
        else if (Number(numStr[i]) > 4 && Number(numStr[i]) < 9){
            numRoman += insertI(nivel+1,1) + insertI(nivel,Number(numStr[i])-5);
        }
        //Numero igual a 9
        else if(Number(numStr[i]) == 9){
            numRoman += insertI(nivel,1) + insertI(nivel+2,1);
        }
        nivel-=2;
    }
    return numRoman;
}
console.log(convertToRoman(68));