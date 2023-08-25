function getweather(){
    return new Promise(function(resolve,reject){
        setTimeout(()=> {
            resolve('sunny');
        },100)
    })
}
function getweatherIcon(weather){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            switch(weather){
                case 'sunny':
                    resolve('🌞')
                    break
                case 'cloudy':
                    resolve('🌤')
                    break
                case 'rainy':
                    resolve('🌨')
                    break
                default:
                    reject("Sorry we can't find Data")
            }
        },100)
    })
}
function onsuccess(data){
    console.log('success', data);
}
function onerror(error){
    console.log('error', error);
}
function onfinally(){
    console.log('USE YOUR TIME WELL , TIME IS LIMITED');
}
getweather().then(getweatherIcon).then(onsuccess).catch(onerror).finally()