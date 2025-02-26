const testArray =[2, 5, 7, 1 , 0, 100, 103]

// function add2toArray(arrayOfNumbers){
//     const parkingArray = []
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const number = arrayOfNumbers[i];
//         const newNumber = number + 2;
//         parkingArray.push(newNumber)

        
//     }
//     return parkingArray
// }

// const newArray = add2toArray(testArray)
// console.log('add2', newArray)






// function addIndextoArray(arrayOfNumbers){
//     const parkingArray = []
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const number = arrayOfNumbers[i];
//         const newNumber = number + i;
//         parkingArray.push(newNumber)

        
//     }
//     return parkingArray
// }

// const newArray2 = addIndextoArray(testArray)
// console.log('addIndex', newArray2)

// function map(array, mappingFunction){
//     const parkingArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         const newElement = mappingFunction(element, i, array)
//         parkingArray.push(newElement);
        
//     }
//     return parkingArray
// }


// function add2(number){
//     const newNumber = number + 2;
//     return newNumber;
// }

// const newArray3 = map(testArray, add2);
// console.log('newAdd2ToArray', newArray3)



// function addIndex(number, index){
//     const newNumber = number + index;
//     return newNumber;

// }

// const newArray4 = map(testArray, addIndex)
// console.log('newAddIndexArray', newArray4)


 const testArray2 = ['pippo', 'pluto', 'paperino', 'clarabella', 'minnie'];
// function toUpperCase(str){
//     const newString = str.toUpperCase();
//     return newString
// }

// const newArray5 = map(testArray2, toUpperCase)
// console.log('toUpper', newArray5);


// /////funzione che aumenta di 3 tutti gli elementi di testArray

// const newArray6 = testArray.map(numb => numb + 3)
// console.log('newAdd3', newArray6)


// /// funzione che a ogni numero di testArray sottrae il doppio del suo indice
// const newArray7 = testArray.map((nbr, i) => nbr - (2*i))
// console.log('subtractDoubleIndex', newArray7)

// ///funzione che restituisce un array con le lunghezze delle stringhe di testArray2
// const newArray8 = testArray2.map(str => str.length)
// console.log('srting length', newArray8)

// ///funzione che appende a tutte le stringhe di testArray2 la parola banana
// const newArray10 = testArray2.map(str => str + 'banana');
// console.log('string banana', newArray10)


///filter

function keepEven(arrayOfNumbers){
    const parkingArray = []
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const number = arrayOfNumbers[i];

        if(number % 2 ===0){
            parkingArray.push(number)

        }
        
    }
    return parkingArray

}

const newArray11 = keepEven(testArray);
console.log('even numbers', newArray11)






function filter(array, filteringFunction){
    
    const parkingArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (filteringFunction(element, i, array)) {
            parkingArray.push(element)
        }

    }

    return parkingArray;

}

function isEven(nbr){
    if(nbr % 2 === 0){
        return true
    }else{
        return false
    }
}

const  newArray12 = filter(testArray, isEven);
console.log('new keep evem', newArray12)


///funzione che tiene dentro testArray2 tutte le parole piu lunghe di 6 caratteri

const newArray13 = testArray2.filter(str => str.length > 6);
console.log('keep long', newArray13)


///funzione che rimuove da testArray2 tutte le stringhe con indice pari

const newArray14 = testArray2.filter((str, i)=> i % 2 === 1)
// notazione che non cambia perche il parametro str non serve
// const newArray14 = testArray2.filter((_, i)=> i % 2 === 1)
console.log('keep odd index', newArray14)


///reduce
function sumAll(arrayOfNumbers){
    let accoumulator = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        
        const number = arrayOfNumbers[i]
        accoumulator += number
    }
    return accoumulator

}

const sum11 = sumAll(testArray);
console.log('sum all', sum11)

function reduce(array, reducingFunction, stringAccumulator){
let accoumulator = stringAccumulator
for (let i = 0; i < array.length; i++) {
    const current = array[i];
    accoumulator = reducingFunction(accoumulator, current, i ,array)
    
}
return accoumulator
}

function sum2Numbers(accoumulator, current){
    const newAccumulator = accoumulator + current;
    return newAccumulator
}

const sum1 = reduce(testArray, sum2Numbers, 0);
// const sum1 = testArray.reduce(sum2numbers, 0)
console.log('sum all2', sum1)

const sumString = testArray2.reduce((a, c) => a +c, "");
console.log('sum of all strings', sumString)