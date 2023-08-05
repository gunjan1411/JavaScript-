let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

let date = new Date(2023,0,23);
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());

let gf_date = new Date("11-14-2002");
console.log(gf_date.toLocaleString());

let myTimeStemp = Date.now();
console.log(myTimeStemp);
console.log(gf_date.getTime());

let ndate = new Date()
console.log(ndate);
console.log(ndate.getMonth());
console.log(ndate.getDay());
console.log(Math.floor(Date.now()/1000));