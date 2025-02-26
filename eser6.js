const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8];






//1) filtrare tutti i numeri minori o uguali a zero (FILTER)
// const numberSmallerThenZero = array1.filter(nbr => nbr <= 0);
// console.log('sumeri minori di 0', numberSmallerThenZero);

// function filterNumbersNegative(number){
//     if(number <= 0){
//         return true
//     }else{
//         return false
//     }
// }

// const numberSmallerThenZero1 = array1.filter(filterNumbersNegative);
// console.log('sumeri minori di 0', numberSmallerThenZero1);
//2) convertire in gradi fahrenheit ipotizando che l'unita di partenza sia celsius (MAP)

// const convertToFahrenheit = array1.map(nbr => (nbr*(9/5))+32)
// console.log('gradi in far', convertToFahrenheit);

// function ToFahrenheitFun(nbr){
//     nbrConvertito= (nbr*(9/5))+32;
//     return nbrConvertito;
// }

// const convertToFahrenheit1 = array1.map(ToFahrenheitFun)
// console.log('gradi in far', convertToFahrenheit1);



//3) fare la media dei valori (REDUCE)


//4) restituire il valore più basso e il più alto (REDUCE)





const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];





//5) filtrare tutti i nomi piu grandi di 4 caratteri (FILTER)
// const namesSmallerThen4Char = array2.filter(str => str.length < 4)
// console.log('nomi più pic', namesSmallerThen4Char)

// function isSmallerThen4Chara(str){
//     if (str.length < 4) {
//         return true
        
//     }else{
//         return false
//     }
// }
// const namesSmallerThen4Char1 = array2.filter(isSmallerThen4Chara)
// console.log('nomi più pic', namesSmallerThen4Char1)


//6) traformare tutte le stringe in maiuscolo (MAP)
// const upperCase = array2.map(str => str.toUpperCase())
// console.log('stringhe mai', upperCase )

// function upperCaseFun(str){
//     strMai = str.toUpperCase();
//     return strMai

// }
// const upperCase1 = array2.map(upperCaseFun)
// console.log('stringhe mai', upperCase1 )


//7) mettere SOLO le iniziali maiuscole (MAP)
// const capitalizeStr = array2.map(str => str[0].toUpperCase() + str.slice(1))
// console.log('solo iniziali', capitalizeStr)

// function capitalizeStrFun(str) {
//     strCap = str[0].toUpperCase() + str.slice(1)
//     return strCap
// }

// const capitalizeStr1 = array2.map(capitalizeStrFun)
// console.log('solo iniziali', capitalizeStr1)

//8) restiture una stringa composta dalle iniziale delle parole (REDUCE)


//9) sommare tutti i caratteri di tutte le stringhe (REDUCE)


//10) eliminare le vocali dalle stringhe (MAP)
const strWithoutVowels = array2.map((str, i) =>)


function strWithoutVowels


//11) restituire un array di numeri che sono le lunghezze delle singole parole (MAP)








const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]];





//12) restituire un array di numeri che sono le lunghezze dei sigoli array (MAP)


//13) sommare tutti i numeri in tutti gli array (REDUCE)


//14) sommare tutte le lunghezze degli array (REDUCE)


//15) sommare tutti i numeri con indice uguale e restituire un array di risultati (REDUCE)