const arr = [1,2,3,4,5,6,7,8];

for(const num of arr)
{
    console.log(num);
}
const a = "hello"

for(const abc of a )
{
    console.log('each char is ',abc);
}

//following is demosration of Map(datatype)

const map = new Map()
map.set('IN',"India")
map.set('IN',"India")
map.set('FN',"France")
map.set('UK',"United Mingdom")
console.log(map);

console.log('-------------------------------');

for(const ke of map)    //we can not use for_in loop in Map()
{
    console.log(ke);
}
// let's do destructuring of above for loop
for(const [ke,value] of map)
{
    console.log(ke  , ':-' , value);
}

//IMP NOTE :--> we can use MAP on Object but in diffrent syntax(see following)

const myO = {
    js:'javascript',
    ts:'text script',
    rb:'ruby'
}

for(const ke in myO)   //for_in loop
{
    console.log(ke);
}
console.log('------------------------------------');
for(const ke in myO)
{
    console.log(myO[ke]);
}
console.log('------------------------------------');

const codoing = ['js','java','python','c#']

codoing.forEach(function (val){       //forEach function
    console.log(val);
})
console.log('------------------------------------');

codoing.forEach((item)=>{        //forEach aerrow function
    console.log(item);
})
console.log('------------------------------------');

codoing.forEach((item , index , arr)=>{
    console.log(item, index, arr);
})
console.log('------------------------------------');

//following is ittration (multiple object in array)

const mycoding = [
{
    language_name:"js",
    file_name:"js"
},
{
    language_name:"java",
    file_name:"java"
},
{
    language_name:"python",
    file_name:"py"
}
]

mycoding.forEach( (item) => {
    console.log(item.language_name);
})