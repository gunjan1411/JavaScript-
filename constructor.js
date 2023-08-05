function person(name,cpi){
    this.name = name;
    this.cpi = cpi;
    
    this.work = function(){
        console.log("new functionnn..");
    }
}

let student1 = new person('gunjan',9.9);
student1.cpi = 10;
console.log(student1);
student1.work();


let student2 = new person('dev',8.9);
console.log(student2);

