const tinder = new Object();  //single term object
const tinder2 = {};  //non single term object

console.log(tinder);

tinder.user="gunjan";
tinder.id=201290107067;

console.log(tinder);

const regularUser = {
    email:"gunjan02@gmail.com",
    specialUser:{
        vipuser:{
        name:"dev",
        sem:"7th"
        }
    }
}
console.log(regularUser);
console.log(regularUser.specialUser);
console.log(regularUser.specialUser.vipuser);
console.log(regularUser.specialUser.vipuser.name);

const o1 = {1:"a" , 2: "b"};
const o2 = {3:"a" , 4: "b"};

const o3 = {o1,o2};
console.log(o3);

const o4 = Object.assign({},o1,o2);   //here {} is target and o1,o2 are source (see syntax to understanding)
console.log(o4);

const o5 = {...o1,...o2};
console.log(o5);

const user2 = [
    {
        id:1,
        name:"gunjan"
    },
    {
        id:2,
        name:"gunj"
    },
    {
        id:3,
        name:"gunja"
    }
]

console.log(user2[1].name);

console.log(tinder);
console.log(Object.keys(tinder));  //IMP NOTE ::-> tinder is object type but when we call Object.keys(tinder) then the return type is array
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('id'));
console.log(tinder.hasOwnProperty('id2'));