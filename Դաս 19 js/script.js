let user = 4562;

function Rekursive(user) {
    let sum = 1
    let y;
    let x = 0;
    let z = 0;
    // for (let i = 0; i < user.length; i++) {
        y = user % 10 
        x = user / 1000
        z = (((user / 10) / 10) % 10)
        sum = y + x + z
    // }
    return x
}

console.log(Rekursive(user));