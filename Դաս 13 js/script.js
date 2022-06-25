
function argument(arr) {
    let sum = arr;
    for (let i = 0; i < arr.length; i++) {
        arr = arr[i]**2;
    }
    return sum;
}

console.log(argument([5,4,9,7,2,31]));