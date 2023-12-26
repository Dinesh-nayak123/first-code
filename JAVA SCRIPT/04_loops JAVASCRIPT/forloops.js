// for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
}

for (let i = 1; i < 11; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j < 11; j++) {
        // console.log(`inner loop value:${j} and inner loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
    
}

let myArr = ["flase", "batman", "superman"];
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}

// break and continue
// break mane hauchi jouthi break lagila mane kama khtm au seita continue habani
for (let i = 1; i <= 20; i++) {
    if(i == 5) {
        console.log(`detected ${5}`);
        break;
    }
    // console.log(i);
    
}
// example of continue 
// continue ra kama hauchi jou jagare condition match haba taku skip kariki next loop bhitare kama kariba
for (let i = 1; i <= 20; i++) {
    if(i == 5) {
        console.log(`detected ${5}`);
        continue;
    }
    // console.log(i);  
}