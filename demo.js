// CLOSURE

// function Outer() {
//   let count = 1;
//   console.log("outer ", count);

//   return function Inner() {
//     count++;
//     console.log("inner ", count);
//   }

// }
// const FunCall = Outer();
// FunCall();
// FunCall();
// FunCall();


// CallBack

// function Main(name, calback){
//     console.log(`name is ${name}`)
//     calback()  
// }

// function Sub(){
//     fetch("https://jsonplaceholder.typicode.com/todos/2")
//     .then(res => res.json())
//     .then(ans => {
//         console.log(ans)
//     })
    
// }

// Main('Hello', Sub)


// Promises

// const PromiseOne = new Promise((resolve,reject)=>{
//     let answer = false

//     if(answer){
//         console.log();
//         resolve('Answer...')
//     }
//     else{
//         console.log()
//         reject("Wrong...")
//     }
// })
// PromiseOne.then((response)=>{
//     console.log(response)
// }).catch((err) =>{
//     console.log(err)
// })


// const PromiseOne = new Promise((resolve, reject) => {
//   let answer = false;

//   console.log("Start...");

//   if (answer) {
//     console.log("Answer...");
//     resolve("You got it right!");
//   } else {
//     console.log("Wrong...");
//     reject("You failed!");
//   }

//   console.log("End...");
// });

// PromiseOne.then((res) => {
//   console.log("THEN:", res);
// }).catch((err) => {
//   console.log("CATCH:", err);
// });

// const PromiseThree = new Promise((resolve, reject)=>{
//     let api = fetch("https://jsonplaceholder.typicode.com/todos/1")
//     resolve(api)
// })
// PromiseThree.then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log("Error occuresed")
// })

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res =>  {return (res.json())})
// .then(data => console.log(data))


// async function GetData(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const data = await response.json()
//     console.log(data);
    
// }
// GetData()

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "Ayodhya",
//     body: "Learning Fetch POST",
//     userId: 1
//   })
// })
// .then(res => res.json())
// .then(data => console.log("POST:", data))
// .catch(err => console.error(err));


// console.log("start");

// setTimeout(() => {
//   console.log("after 3 sec")
// }, 3000);

// console.log("end")

// console.log("First");
// setTimeout(() => console.log("Second (delayed)"));
// console.log("Third");

// const timer = setTimeout(() => console.log("Run later"), 5000);
// clearTimeout(timer); // stops it before running



// let count = 1;
// const timer = setInterval(() => {
//   console.log(count);
  
//   if (count ===4) {
//     clearInterval(timer)
//   }
//   count ++
// }, 2000);

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero"); // आपला स्वतःचा error
//   }
//   return a / b;
// }

// try {
//   console.log(divide(10, 0));
// } catch (err) {
//   console.log("Error:", err.message);
// }


// try {
//   JSON.parse({invalid :7});
// } 
// catch (err) {
//   // इथे built-in error आला, पण आपण custom error फेकतोय
//   throw new Error("Custom: JSON data is corrupted");
// }


// const user ={name:"Hi", age:12}
// console.log(user.age);

// const data =JSON.stringify(user)
// console.log(data.age);

// const con = JSON.parse(data)
// console.log(con.age)


// const user ={name:"Hi", age:12}
// console.log(user);

// const map = new Map()
// map.set(1,1)
// map.set(2,1)
// console.log(map);

// const map2 = new Map()
// map2.set(1,1)
// map2.set("name","hey")
// console.log(map2);
// const demo= map2.clear('name')
// console.log(map2);



// const user ={name:"Hi", age:12}
// user.city ="jalna"
// console.log(user)
// user.city ="jalna"
// console.log(user)


// Objects

// const a = {
//     nam :"Ayodhya",
//     age :22,
//     1:100

// }

// console.log(a[1])
// console.log(a.age)













// Promise.all()

// const p1 = Promise.resolve("✅ Task 1 done");
// const p3 = Promise.resolve("✅ Task 3 done");
// const p2 = Promise.resolve("Task 2 failed");

// Promise.all([p1, p2, p3])
//   .then((res) => console.log("Results:", res))
//   .catch((err) => console.log("Error:", err));


// Promise.allSettled()

// const p1 = Promise.resolve("✅ Task 1 done");
// const p2 = Promise.reject("❌ Task 2 failed");
// const p3 = Promise.resolve("✅ Task 3 done");

// Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log("Results:", res))
//   .catch((err) => console.log("Error:", err));


// const p2 = Promise.reject("❌ Task 2 failed");
//  const p1 = Promise.reject("✅ Task 1 done");
// const p3 = Promise.reject("✅ Task 3 done");

// Promise.any([p1, p2, p3])
//   .then((res) => console.log("Results:", res))
//   .catch((err) => console.log("Error:", err));


