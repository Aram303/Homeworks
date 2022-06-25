function SumArr(num) {
    let sum;
    let result = [];
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num[i].length; j++) {
            sum = num[i][j];
            result.push(sum);
        }
    }
    return result;
}

console.log(SumArr([[8,35,2],[8],[5,6,-5,-6],[1,3,-9,0,-1]]));