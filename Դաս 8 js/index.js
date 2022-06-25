let x = +prompt();
let y = +prompt();
let z = +prompt();
const arr = [];
const arr1 = [];

if((x % 2) !== 0){
    arr.push(x)
}else{
    arr1.push(x)
}
if((y % 2) !== 0){
    arr.push(y)
}else{
    arr1.push(y)
}
if((z % 2) !== 0){
    arr.push(z);
}else{
    arr1.push(z)
}
if(arr > arr1){
    console.log(`[${arr1}] Zuyg`)
    console.log(`[${arr}] Kent`)
}else{
    console.log(`[${arr1}] Zuyg`)
    console.log(`[${arr}] Kent`)
}