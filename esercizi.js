
// let startingString = '';
//  while(startingString.length <=6 )
//  {startingString = startingString + '#';
    

//  }
//  console.log(startingString)

//  stampare le 7



// for (let i = 0; i <= 100; i++) {
    
    
// }

// let i = 1
// while (i<=100) {
//     if(i%3 ===0 && i%5===0){
//         console.log("fizzbuzz")
//     }
//     else if(i%3 ===0){
//         console.log("fizz")
//     }
//     else if(i%5 ===0){
//         console.log("buzz")
//     }
//     else{
//         console.log(i)
//     }
//     i++
// }

let size= 8
for (let y =1; y<=size; y++){
    startingString = "";
    for(let x=1; x<=size;x++){
        if(x+y%2===0){
            startingString=startingString+" "

        }
        else{startingString=startingString+"#"}
        

    }
    console.log(startingString + \n)
}

