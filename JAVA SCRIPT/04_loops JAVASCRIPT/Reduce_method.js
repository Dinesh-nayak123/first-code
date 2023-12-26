const myNums = [1, 2, 3, 4, 5];
const myTotal = myNums.reduce((acc, currentval) => {
    console.log(`acc; ${acc} and currentval ${currentval}`);
    return acc + currentval;
}, 0);
console.log(myTotal);
// acc = accumulator

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "app dev course",
        price: 1999
    },
    {
        itemName: "python course",
        price: 2999
    },
    {
        itemName: "data science course",
        price: 3999
    },
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 );
console.log(priceToPay);