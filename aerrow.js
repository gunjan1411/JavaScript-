    const user = {
        username:"gunjan",
        salary:100000,

        welcomemessage: function(){
            console.log(this.username , ' welcome to website');
            console.log(this);     //1 )
        }
    }

    user.welcomemessage()
    user.username = "dev";            
    user.welcomemessage()
    console.log(this);         // 2 )output will be  {}
   

function chai()
{
    console.log(this);
}
chai();

function cha()
{
    let username = "gunj"
    console.log(this.username);       // output will be "undefined" cause we can use "this" in objects but not in functions
}

cha();

const add = (num1,num2) => (num1 + num2) //if we use {} then we must use return keyword
const add3 = (num1,num2) => ({username:"guunjuu"})
console.log(add(2,3))
console.log(add3(2,3));

