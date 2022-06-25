
let sum = 0;
for (let i = 100; i <= 350; i++) {
    // console.log(i);
    
    // Զույգ և կենտ
    // if (i % 2 == 0) {
    //     console.log(i);
    // }else{
    //     console.log(i);
    // }

    // 7-ի բաժանվող
    // if(i % 7 == 0){
    //   console.log(i);
    // } 

    // Զույգ և կենտ թվերի գումարը
    if (i % 2 == 0) {
        sum += i; 
    }
    console.log(sum);

}