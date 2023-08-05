(function chai(){                               //()() -->> for global scope ke polution se problem hoti hay kahi bar wo hatane ke liye hamne use kiya
    console.log('db connected');
})();  //if you remove ; then following fuction is give error(for sepration we give ;)

(function aurcode()  {console.log('db connected two');})();  //name IIFE  -->> means simple name given to the function

(()=> {console.log('heyyy');})();  //non name IIFE -->> using arrorw function

((name)=> {console.log('heyyy ',name);})('gunjan'); 

