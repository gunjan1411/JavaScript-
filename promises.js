const promiseone = new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log('Async task is comleted');
        resolve();
    },1000)
})

promiseone.then(function(){
    console.log("promies consume");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("async task 2 removed");
})