/* 
let condicao1 = true;
if (condicao1){
    // Como o valor da condição é true,o código desse bloco é executado
    console.log("Entrei no if 1!")
};

let condicao2 = false;
if (condicao2){
    // Como o valor da condição é false, o código desse bloco NÃO é executado
    console.log("Entrei no if 2!")
}; 
*/

// 1.
/* 
function numeros(num1, num2){
    if (num1 === num2){
        return("são iguais")
    };
};
console.log(numeros(Number(prompt("1° numero")), Number(prompt("2° número"))));
 */

// 2.
/*  
function coisa(nome, idade){
    if (idade >= 18){
        return nome + ", você pode dirigir";
    } //else {return nome + ", você NÃO pode dirigir";}
};
console.log(coisa(
    prompt("seu nome"), Number(prompt("sua idade"))));
     

// 3.

let condicao = false
if (condicao){
    console.log("entrei no if!")
} else{
    //Como o valor da condição é false, o código do bloco else será executado
    console.log("entrei no else")
};
 */

// 4.
/* 
function numeros(num1, num2){
    if (num1 === num2){
        return("são iguais")
    } else {return("são diferentes")}
};
console.log(numeros(Number(prompt("1° numero")), Number(prompt("2° número"))));
 */

// 5.
/* 
let condicao1 = false
let condicao2 = true

if (condicao1){
    console.log("entrei no if 1!")
} else {
    // Como o valor da condicao1 é false, o código do else será executado
    if (condicao2) {
        // Como o valor da condicao2 é true, o código do if será executado
        console.log("entrei no if 2!")
    }
};
 */

// 6.
/* 
function numeros(num1, num2){
    if (num1 === num2){
        return [(`${num1} é igual a ${num2}`)];
    } else if (num1 > num2){
        return [(`o primeiro (${num1}) é maior que o segundo (${num2})`)];
    }
        else {return [(`o segundo (${num2}) é maior que o primeiro (${num1})`)];
    }
};
console.log(numeros(Number(prompt("1° numero")), Number(prompt("2° número"))));
 */

// 7.
/*  
let paisDeOrigem
switch (paisDeOrigem){
    case "Brasil": //para caso seja
        console.log("brasileiro")
        break //parar para o próximo
    case "EUA":
        console.log("norte americano")
        break
    case "Inglaterra":
        console.log("inglês")
        break
    default: //para caso não seja nenhum deles
        console.log("Nacionalidade não encontrada")
        break
};
 */

// 8.
/* 
let pokemon = prompt("Escolha um Pokémon inicial para ver qual seu tipo. Sendo eles Bulbassauro, Charmander, Squirtle")
switch (pokemon){
    case "Bulbassauro": //para caso seja
        console.log("Bulbassauro é do tipo (Planta e veneno)")
        break //parar para o próximo
    case "Charmander":
        console.log("Charmander é do tipo fogo")
        break
    case "Squirtle":
        console.log("Squirtle é do tipo Água")
        break
    default:
        console.log("Eu te dei 3  opções, essa não é uma delas")
        break
};
 */

// 9.
/* 
function faculdade(idade, deveteridade, EM, outra ){
    if (idade >= deveteridade && EM == ("sim") && outra == ("não")){
        return (`Você pode estudar nessa faculdade`);
    } else {return (`Desculpe, mas você não pode estudar nessa faculdade`);}
};
console.log(faculdade(Number(prompt("idade")), Number(18), prompt("terminou o ensino médio?"), prompt("cursa outra faculdade?")));
 */
