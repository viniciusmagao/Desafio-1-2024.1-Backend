/*
ENGNET - PROCESSO TRAINEE
BACKEND - DESAFIO 1
Vinicius Magao - VVAGA [SQUAD-4]
*/

/*
VALIDADOR DE NUMERO DE TELEFONE
Retorna true se a string fornecida se parece com um número telefônico dos Estados Unidos válido.
O usuário pode preencher o campo do formulário de qualquer maneira que escolher contanto que tenha o formato de um número válido dos EUA. Os seguintes são exemplos de formatos válidos para números nos EUA (consulte os testes abaixo para outras variantes):
Para este desafio, você vai receber uma string como 800-692-7753 ou 8oo-six427676;laskdjf. Seu trabalho é validar ou rejeitar o número de telefone dos EUA com base em qualquer combinação dos formatos fornecidos acima. O código de área é obrigatório. Se o código do país é fornecido, você deve confirmar que o código do país é 1. Retorne true se a seqüência de caracteres for um número válido de telefone dos EUA; caso contrário, retorne false.
*/

function telephoneCheck(str) {

//verifica se a str pode ser um numero valido
let strRegex1 = /^(1)* *\((\d{3})\) *(\d{3})( |-)*(\d{4})|^(1)* *(\d{3})-(\d{3})-(\d{4})|^(1)* *(\d{3}) (\d{3}) (\d{4})|^\d{10}$/;

if(strRegex1.test(str)){
    //verifica se o numero tem mais de 10 digitos e se o primeiro e igual a 1
    let strRegex2 = /\d/g;
    let strNum = str.match(strRegex2);
    
    if (strNum.length == 11) {
        if(strNum[0] == 1){
            return true;
        } else {
            return false;
        }
    //Numero maior que 11 digitos    
    } else if (strNum.length > 11){
        return false;
    //Numero menor que 10 digitos
    } else if (strNum.length < 10){
        return false;
    } else {
        return true;
    }
} else {
    return false;
}
}
console.log(telephoneCheck("7376227382)"));
