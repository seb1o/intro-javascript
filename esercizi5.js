// const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8]

// // 1-filtrare tutti i numeri uguali o minori a zero
//  function minorOrSmallerThan0(arrayOfNumbers){
//      const newArray = []
//      for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];
//          if(element <= 0){
//             newArray.push(element)

//         }
       
    
        
//      }
//      return newArray
//  }

//  const array5000 = minorOrSmallerThan0(array1)
//  console.log('minori o uguali a 0', array5000)


 



// // 2-convertire in gradi fahrenheit ipotizando che l'unita di partenza celcius

// function convertToFahrenheit(arrayOfNumbers){
//     const newArray = []
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//        let element = arrayOfNumbers[i];
//        element = ((element* 1.8) +32)
//            newArray.push(element)

//        }
      
   
       
   
//     return newArray
// }

// const array5001 = convertToFahrenheit(array1)
// console.log('valori in fahrenheit', array5001)
// // 3-fare la media dei valori

// function mediumValeu(arrayOfNumbers){
//   let accumulator = 0
//    let media = 0
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//        let element = arrayOfNumbers[i];
//        accumulator = element+accumulator 
         
//        }
      
//        media = accumulator/arrayOfNumbers.length
         
   
//     return media
// }

// const array5002 = mediumValeu(array1)
// console.log('media valori', array5002)

// // 4-restituire il valore piu basso e il piu alto 

// function minValueAndMaxValueArray(arrayOfNumbers){
      
//    let minim = arrayOfNumbers[0];  // si puo usare anche - e +infinite
//    let maxi = arrayOfNumbers[0]   
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//        let element = arrayOfNumbers[i];
       
//      if (element< minim ) {
//         minim = element
         
   
//      } if(element > maxi){
//         maxi = element

//      }
     
//        }
      
//        return [minim, maxi]
// }

// const array5003 = minValueAndMaxValueArray(array1)
// console.log('valori min e max', array5003)


// const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', ]
//5-filtrare tutti i nomi piu grandi di 4 caratteri


// const filtraNomi = [];

// for (let i = 0; i < array2.length; i++) {
//   if (array2[i].length > 4) {
//     filtraNomi.push(array2[i]);
//   }
// }

// console.log(filtraNomi);
//6-trasformare tutte le stringe in maiuscolo

// const arrayMaiuscolo = [];

// for (let i = 0; i < array2.length; i++) {
//   arrayMaiuscolo.push(array2[i].toUpperCase());
// }

// console.log
//7-mettere solo le iniziali maiuscole

// const arrayInizialiMaiuscole = [];

// for (let i = 0; i < array2.length; i++) {
//   let nome = array2[i];
//   let primaLettera = nome[0].toUpperCase();
//   let restoNome = nome.slice(1).toLowerCase();
//   let nomeInizialiMaiuscole = primaLettera + restoNome;
//   arrayInizialiMaiuscole.push(nomeInizialiMaiuscole);
// }

// console.log
//8-restituire una stringa composta dalle iniziale delle parole
// let iniziali = '';

// for (let i = 0; i < array2.length; i++) {
//   let parola = array2[i];
//   iniziali += parola[0];
// }

// console.log
//9-contare tutti i carateri di tutte le stringhe

// let contaCaratteri = 0;

// for (let i = 0; i < array2.length; i++) {
//   contaCaratteri += array2[i].length;
// }

// console.log('Il numero totale di caratteri è:'), 
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


const lorenzo = {
  name: 'lorenzo',
  surname: 'puppo',
  marks: [7, 8 ,4],
  yob: 1995,
  nationality: 'italy',
  gender: 'm',
}

const Jan = {
  name: 'jan',
  surname: 'stigliani',
  marks:  [7, 9 ,9],
  yob: 2000,
  nationality: 'italy',
  gender: 'm'
}

const giovanni = {
  name: 'giovanni',
  surname: 'sussarellu',
  marks:  [5, 8 ,3],
  yob: 1981,
  nationality: 'italy',
  gender: 'm'
}

const sara =  {
  name: 'sara',
  surname: 'de prà',
  marks:  [9, 4 ,7],
  yob: 1989,
  nationality: 'italy',
  gender: 'fluid'
}

const jeremias = {
  name: 'jeremias',
  surname: 'cedeno',
  marks:  [7, 9 ,9],
  yob:2003,
  nationality: 'ecuador',
  gender: 'm'
}

const laura = {
  name: 'laura',
  surname: 'mazza',
  marks:  [3, 8 ,9],
  yob: 1984,
  nationality: 'italy',
  gender: 'f'
}

const eusebio = {
  name: 'eusebio',
  surname: 'veizi',
  marks:  [8, 8 ,8],
  yob: 1993,
  nationality: 'albanese',
  gender: 'peanut'
}

const hugo = {
  name: 'hugo',
  surname: 'martinez',
  marks:  [5, 8 ,8],
  yob: 1994,
  nationality: 'elSalvador',
  gender: 'f'
}

const hugo2 = {
  name: 'hugo',
  surname: 'evil',
  marks:  [5, 8 ,8],
  yob: 1994,
  nationality: 'elSalvador',
  gender: 'f'
}

const laura2 = {
  name: 'laura',
  surname: 'old',
  marks:  [3, 8 ,9],
  yob: 1920,
  nationality: 'italy',
  gender: 'f'
}
const arrayStudents = [lorenzo, jeremias, giovanni, Jan, laura, sara, hugo, eusebio, hugo2, laura2];

// console.log(arrayStudents);


// function sortByAge(student1, student2) {
//     const yob1 = student1.yob;
//     const yob2 = student2.yob;

//     if (yob1 === yob2) {
//         const surname1 = student1.surname
//         const surname2 = student2.surname
//         return surname1.localeCompare(surname2)
//     }

//     return yob1 - yob2;
// }
// arrayStudents.sort(sortByAge);
// console.log(arrayStudents);


//1)mettere in ordine gli studenti per nome in caso di omonimia usarer come ordine aggiuntivo l'eta crescente

// function sortByNameAndAge(student1, student2) {
//     const name1 = student1.name;
//     const name2 = student2.name;

//     if (name1 === name2) {
//         const yob1 = student1.yob;
//         const yob2 = student2.yob;
//         return yob2 - yob1;
//     }

//     return name1.localeCompare(name2);
// }
// arrayStudents.sort(sortByNameAndAge);
// console.log(arrayStudents);



//2)mettere in ordine gli studenti per media dei voti
function averageMarks(marks) {
  let sum = 0;

  for (let i = 0; i < marks.length; i++) {


      sum += marks[i];

  }
  let avarage = sum / marks.length
  return avarage;
}


function sortByAverage(student1, student2) {
  const averageMarks1 = averageMarks(student1.marks);
  const averageMarks2 = averageMarks(student2.marks);
  return averageMarks1 - averageMarks2;
}

arrayStudents.sort(sortByAverage);
console.log(arrayStudents);