/*
ENGNET - PROCESSO TRAINEE
BACKEND - DESAFIO 1
Vinicius Magao - VVAGA [SQUAD-4]
*/

/*
CAIXA REGISTRADORA
Implemente uma função de caixa registradora checkCashRegister() que aceita 

1. o preço de compra como o primeiro argumento (price), 
2. pagamento como o segundo argumento (cash) e 
3. dinheiro na registradora (cid) como o terceiro argumento.

cid é um array de duas dimensões listando a moeda disponível e a quantidade.
A função checkCashRegister() deve sempre retornar um objeto com a chave status e uma chave change.
Retorne {status: "INSUFFICIENT_FUNDS", change: []} se o dinheiro no caixa for menor que o troco devido, ou se você não pode retornar o troco exato.
Retorne {status: "CLOSED", change: [...]} com dinheiro no caixa como o valor para a chave change se for igual ao troco devido.
Caso contrário, retorne {status: "OPEN", change: [...]}, com o troco devido em moedas e notas, ordenado do maior para o menor, como o valor da chave change.
*/


/*
let cid = [
    ["PENNY", 1.01],// x/0,01
    ["NICKEL", 2.05],// x/0,05
    ["DIME", 3.1],// x/0,1
    ["QUARTER", 4.25],// x/0,25
    ["ONE", 90],// x/1
    ["FIVE", 55],// x/5
    ["TEN", 20],// x/10
    ["TWENTY", 60],// x/20
    ["ONE HUNDRED", 100]// x/100
  ]
  */

  function checkCashRegister(price, cash, cid) {
    
    let dinheiroNoCaixa = 0;
    let multiplicador = [
    ["PENNY", 0.01],// x/0,01
    ["NICKEL", 0.05],// x/0,05
    ["DIME", 0.1],// x/0,1
    ["QUARTER", 0.25],// x/0,25
    ["ONE", 1],// x/1
    ["FIVE", 5],// x/5
    ["TEN", 10],// x/10
    ["TWENTY", 20],// x/20
    ["ONE HUNDRED", 100]// x/100
    ]
    let trocoDevido = [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
    ];
    //Declara o objeto a ser retornado        
    let retornoDoCaixa = [];

    //Calcula o troco
    let change = cash - price;
    
    //Soma todo o dinheiro que tem no caixa
    for (let i =0; i < cid.length; i++){
        dinheiroNoCaixa += cid[i][1];
    }

    //Verifica se tem dinheiro suficiente para o troco
    if (dinheiroNoCaixa < change){
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    //Verifica se o dinheiro no caixa é igual ao valor do troco
    else if (dinheiroNoCaixa == change){
        return { status: "CLOSED", change: cid };
    } 
    //Verifica se tem troco no caixa
    else {
        let vlr = change;
        for (let i = 8; i >= 0; i--){
            //VerifIca se tem troco no caixa e se o valor é divisivel pelo valor da moeda
            if((vlr/multiplicador[i][1]) >= 1 && cid[i][1] >= vlr){
               while (vlr >= multiplicador[i][1]){
                    trocoDevido[i][1] += 1;
                    vlr -= multiplicador[i][1];
                }
            }
            if (vlr == 0){
                break;
            }
        }
        //Retira as notas e moedas que não serão usadas para o troco
        for(let i=8;i>=0;i--){
            if(trocoDevido[i][1]!=0){
                let unidade = trocoDevido[i][0];
                let qtdNotaMoeda = trocoDevido[i][1];
                retornoDoCaixa.push([unidade,qtdNotaMoeda]);
                //console.log(trocoDevido[i]);
                
            }
        }
    }
    return { status: "OPEN", change: retornoDoCaixa };
  }
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
