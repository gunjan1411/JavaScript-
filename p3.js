function fetchdata(){
    return new Promise(function(resolve,reject){
        fetch('http://localhost:3000/posts')
        .then(responce => responce.json())
        .then(data => resolve(data.id));
    })
}
function displayData(weather){
    console.log(weather);
}
function onError(err){
    console.log("ERROR : ",err);
}
fetchdata().then(displayData).catch(onError)