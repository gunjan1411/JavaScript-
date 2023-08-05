const num = [1,2,3,4,5]


// reduce keyword using normal function

const totalPrice = num.reduce(function (acc,currval){
    console.log('acc is',acc, 'and currval is ',currval);
    return acc+currval;
},0)

console.log("---------------------------");

// reduce keyword using aerrow function

const totalPrice2 = num.reduce( (acc,currval)=>acc+currval,0)
console.log(totalPrice2);

console.log("---------------------------");

//real life example:------>

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetopay = shoppingCart.reduce( (acc,abc)=>acc+abc.price,0)
console.log("Your altimate cost at just ",pricetopay);