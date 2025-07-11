//itteration also called loops 

//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
        
    }
    //console.log(element);
}
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner loop value : ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + '=' + i*j);   //table printed
        
    }
    
}