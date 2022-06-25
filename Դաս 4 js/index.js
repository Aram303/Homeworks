let user1 = prompt("Choose a country - ARMENIA , RUSSIA , ANGLIA");
let ARMENIA;
let RUSSIA;
let ANGLIA;
let user;

if(isNaN(user1)){
    user = 'There is no such option';
}else {
    if(ARMENIA > RUSSIA && ARMENIA > ANGLIA){
        ARMENIA = "YEREVAN";
        if(RUSSIA > ANGLIA){
            RUSSIA = "MOSCOW"
        }else{
            ANGLIA = "LONDON"
        }
    }
}

console.log(ARMENIA || RUSSIA || ANGLIA);