// js fundamentals

// let a = 5

// function add(){
//     let a=10
//     console.log(a)

// }
// add()
// console.log(a)

// var a = 5;

// function demo() {
//   var a = 10;
//   console.log("in function  ", a);

//   if (true) {
//     var a = 12;
//      console.log("if bloack", a);
//   }
//   console.log("if bloack", a);
// }
// demo();
// console.log("global ", a);


// const a = 5;

// function demo() {
//   const a = 10;
//   console.log("in function  ", a);

//   if (true) {
//     const a = 12;
//      console.log("if bloack", a);
//   }
//   console.log("if bloack", a);
// }
// demo();
// console.log("global ", a);


// Data  Types

// let a = {
//   a  : 10
// }
// console.log(typeof a)

// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)

// console.log(typeof true)


// 1] Number

// console.log(Number.isNaN("hi"))    //false
// console.log(Number.isNaN(2))       //false
// console.log(Number.isNaN(NaN))     //true

// console.log(Number.isFinite(2))

// let i = "78"
// console.log(Number.parseInt(i))  //78

// let i = "Hi"
// console.log(Number.parseInt(i))   //NaN

// let i = 45.997800
// console.log(Number.parseFloat(i))

// let i = 45.997800
// console.log(i.toFixed(2))
// console.log(i.toFixed(3))
// console.log(i.toFixed(4))

// let i = "hi"
// console.log(i.toString())

// String

// console.log("Line1\nLine2");
// console.log("Tab\tSpace");
// console.log("She said \"Hi\"" );


// let s = "Hello Javascript";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s[0].toLowerCase() + s.slice(1).toUpperCase() );

// console.log(s.includes('He'));
// console.log(s.indexOf('l'));
// console.log(s.lastIndexOf('l'));

// console.log(s.slice(1,-4));
// console.log(s);
// console.log(s.substring(1,-4));
// console.log(s);

// console.log(s.replace('Hello',"Kooo"));

// console.log(s.split('a'));
// console.log(s.split(" "));

// let s = "H"
// console.log(s.padEnd(1,'0'));


// Bigint
// let i = 32
// console.log(BigInt(i));


// let j = 329887677
// console.log(BigInt(j));

// let j = 329887677n
// console.log(Number(j));




// Loops

// for(let i = 1; i<=5; i++){
//     console.log(i);
    
// }


// let j = 2

// while (j<=10) {
//    console.log(j);
//    j+=2;
// }


// let arr = ["js", "react", "node"]

// for(let val of arr){
//     console.log(val);
    
// }



