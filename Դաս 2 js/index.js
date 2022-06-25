// let x = prompt('Aram');
// let x = prompt('Gevorgyan');


// let n = +prompt('Write any number');

// if(isNaN(Number(n))){
//     console.log('invalid input')
// }else{
//     if(n < 0){
//         console.log('is negative')
//     }else if(n > 0){
//         console.log('is positive')
//     }else if(n == 0){
//         console.log('is equal to 0')
//     }
// }


let century = +prompt('Write ');

if(isNaN(Number(century))){
    console.log('invalid input')
}else{
    if(century <= 99){
        console.log('դար 1')
    }else if(99 <= 199){
        console.log('դար 2')
    }else if(199 <= 299){
        console.log('դար 3')
    }else if(299 <= 399){
        console.log('դար 4')
    }else if(399 <= 499){
        console.log('դար 5')
    }else if(499 <= 599){
        console.log('դար 6')
    }
}