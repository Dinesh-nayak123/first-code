/*
syntax of switch statement
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
// shift + alt + downarrow = duplicate
const month = 3;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("defult case match");
        break;
}