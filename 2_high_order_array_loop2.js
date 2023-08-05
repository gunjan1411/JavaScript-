coding = ["swift","textscript","javascript","java"]

const show = coding.forEach((item)=>{
    console.log(item);   //forEach never return value
})

console.log(show);  //undefined cause forEach never return value

console.log("-------forEach never return value thats why we intrduce Filter (following)------");

const mynum = [1,2,3,4,5,6,7,8,9,10]

const neww = mynum.filter((num)=>num > 6 )
console.log(neww);


const neww1 = mynum.filter((num)=>{
    num > 6 
})
console.log(neww1);


const neww2 = mynum.filter((num)=>{
    return num > 6 
})
console.log(neww2);
console.log("-----------------------------------------");

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const ubook = books.filter( (bk) => bk.genre ==='History')
  console.log(ubook);
  console.log("-----------------------------------------");
  const year = books.filter( (yt)=> yt.publish>2000)
  console.log(year);
  console.log("-----------------------------------------");
  const year2 = books.filter( (yt)=> { return yt.publish>1995 && yt.genre==='History'}) //IMP note : when we use two conditions then must be write in {} with return keyword
  console.log(year2);