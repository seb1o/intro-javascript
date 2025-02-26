const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8]

// 1-filtrare tutti i numeri uguali o minori a zero
 function minorOrSmallerThan0(arrayOfNumbers){
     const newArray = []
     for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
         if(element <= 0){
            newArray.push(element)

        }
       
    
        
     }
     return newArray
 }

 const array5000 = minorOrSmallerThan0(array1)
 console.log('minori o uguali a 0', array5000)


 



// 2-convertire in gradi fahrenheit ipotizando che l'unita di partenza celcius

function convertToFahrenheit(arrayOfNumbers){
    const newArray = []
    for (let i = 0; i < arrayOfNumbers.length; i++) {
       let element = arrayOfNumbers[i];
       element = ((element* 1.8) +32)
           newArray.push(element)

       }
      
   
       
   
    return newArray
}

const array5001 = convertToFahrenheit(array1)
console.log('valori in fahrenheit', array5001)
// 3-fare la media dei valori

function mediumValeu(arrayOfNumbers){
  let accumulator = 0
   let media = 0
    for (let i = 0; i < arrayOfNumbers.length; i++) {
       let element = arrayOfNumbers[i];
       accumulator = element+accumulator 
         
       }
      
       media = accumulator/arrayOfNumbers.length
         
   
    return media
}

const array5002 = mediumValeu(array1)
console.log('media valori', array5002)

// 4-restituire il valore piu basso e il piu alto 

function minValueAndMaxValueArray(arrayOfNumbers){
      
   let minim = arrayOfNumbers[0];  // si puo usare anche - e +infinite
   let maxi = arrayOfNumbers[0]   
    for (let i = 0; i < arrayOfNumbers.length; i++) {
       let element = arrayOfNumbers[i];
       
     if (element< minim ) {
        minim = element
         
   
     } if(element > maxi){
        maxi = element

     }
     
       }
      
       return [minim, maxi]
}

const array5003 = minValueAndMaxValueArray(array1)
console.log('valori min e max', array5003)


const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', ]
//5-filtrare tutti i nomi piu grandi di 4 caratteri


const filtraNomi = [];

for (let i = 0; i < array2.length; i++) {
  if (array2[i].length > 4) {
    filtraNomi.push(array2[i]);
  }
}

console.log(filtraNomi);
//6-trasformare tutte le stringe in maiuscolo

const arrayMaiuscolo = [];

for (let i = 0; i < array2.length; i++) {
  arrayMaiuscolo.push(array2[i].toUpperCase());
}

console.log
//7-mettere solo le iniziali maiuscole

const arrayInizialiMaiuscole = [];

for (let i = 0; i < array2.length; i++) {
  let nome = array2[i];
  let primaLettera = nome[0].toUpperCase();
  let restoNome = nome.slice(1).toLowerCase();
  let nomeInizialiMaiuscole = primaLettera + restoNome;
  arrayInizialiMaiuscole.push(nomeInizialiMaiuscole);
}

console.log
//8-restituire una stringa composta dalle iniziale delle parole
let iniziali = '';

for (let i = 0; i < array2.length; i++) {
  let parola = array2[i];
  iniziali += parola[0];
}

console.log
//9-contare tutti i carateri di tutte le stringhe

let contaCaratteri = 0;

for (let i = 0; i < array2.length; i++) {
  contaCaratteri += array2[i].length;
}

console.log('Il numero totale di caratteri è:'), 
//10-eliminare le vocali dalle stringhe

// let vowel = [a, e, i, o, u]

// function removeVowel(arrayOfCaracters){

// const noVowel = []

// for (let i = 0; i < arrayOfCaracters.length; i++) {
//            const element = arrayOfCaracters[i];

//            if (element=) {
            
//            }
// }


// }