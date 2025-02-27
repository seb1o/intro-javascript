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

const average = array1.reduce((acc, curr) => acc + curr, 0) / array1.length;
console.log('Average value:', average);


function calculateAverage(array) {
    const sum = array.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    const average = sum / array.length;
    return average;
  }
  
  const averageValue = calculateAverage(array1);
  
  console.log('Average value:', 

//4) restituire il valore più basso e il più alto (REDUCE)

const minMax = array1.reduce((acc, curr) => ({
    min: Math.min(acc.min, curr),
    max: Math.max(acc.max, curr)
  }), { min: array1[0], max: array1[0] });
  
  console.log('Minimum value:', minMax.min);
  console.log('Maximum value:', minMax.max);



function findMinMax(array) {
    const result = array.reduce(function(accumulator, currentValue) {
      return {
        min: Math.min(accumulator.min, currentValue),
        max: Math.max(accumulator.max, currentValue)
      };
    }, { min: array[0], max: array[0] });
  
    return result;
  }
  
  const minMaxValues = findMinMax(array1);
  
  console.log('Minimum value:', minMaxValues.min);
  console.log('Maximum value:', minMaxValues.max)

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
// const initialsString = array2.reduce((acc, word) => acc + word[0], '');
// console.log('Stringa delle iniziali:', initialsString);

// function getInitials(array) {
//     return array.reduce(function(accumulator, currentWord) {
//       return accumulator + currentWord[0];
//     }, '');
//   }
  
//   const initialsString = getInitials(array2);
  
//   console.log('Stringa delle iniziali:', initialsString);


//9) sommare tutti i caratteri di tutte le stringhe (REDUCE)
// const totalCharacters = array2.reduce((acc, word) => acc + word.length, 0);
// console.log('Totale caratteri:', totalCharacters);

// function countTotalCharacters(array) {
//     return array.reduce(function(accumulator, currentWord) {
//       return accumulator + currentWord.length;
//     }, 0);
//   }
  
//   const totalCharacters = countTotalCharacters(array2);
  
//   console.log('Totale caratteri:', totalCharacters);

//10) eliminare le vocali dalle stringhe (MAP)
// const strWithoutVowels = array2.map(word => word.replace(/[aeiouAEIOU]/g, ''));
// console.log('Stringhe senza vocali:', strWithoutVowels);


// function removeVowels(word) {
//     return word.replace(/[aeiouAEIOU]/g, '');
//   }
  
//   const strWithoutVowels = array2.map(function(word) {
//     return removeVowels(word);
//   });
  
//   console.log('Stringhe senza vocali:', strWithoutVowels);


//11) restituire un array di numeri che sono le lunghezze delle singole parole (MAP)

// const lengthsArray = array2.map(word => word.length);
// console.log('Array delle lunghezze:', lengthsArray);

// function getWordLength(word) {
//     return word.length;
//   }
  
//   const lengthsArray = array2.map(function(word) {
//     return getWordLength(word);
//   });
  
//   console.log('Array delle lunghezze:', lengthsArray);








// const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]];





//12) restituire un array di numeri che sono le lunghezze dei sigoli array (MAP)
// const lengthsArray = array3.map(arr => arr.length);
// console.log('Array delle lunghezze:', lengthsArray);

// function getArrayLengths(array) {
//     return array.map(function(innerArray) {
//       return innerArray.length;
//     });
//   }
  
//   const lengthsArray = getArrayLengths(array3);
  
//   console.log('Array delle lunghezze:', lengthsArray);

//13) sommare tutti i numeri in tutti gli array (REDUCE)


//14) sommare tutte le lunghezze degli array (REDUCE)


//15) sommare tutti i numeri con indice uguale e restituire un array di risultati (REDUCE)