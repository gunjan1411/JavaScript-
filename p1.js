function getweather(){
    return new Promise(function(resolve,reject)
    {
        reject('Sunny');
    })
}
function onsuccess(data){
    console.log('success', data);
}
function onerror(error){
    console.log('error', error);
}
getweather().then(onsuccess).catch(onerror);

