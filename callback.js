globalThis.print = console.log.bind(console);//to avoid writing whole console.log for js

// print("Hello");

//async await are better than promise chain and hence forth promise chains are better than callback hell.
//Callback 

/*
Sync in JS
Synchronous means the code runs in a particular sequence of instrctios given in the program.
Each instrction waits for the previous instruction to complete its execution.

Asynchronous 
Due to synchronous programming, sometimes imp instructions gete vlocked due to some previous instructions, which 
causes delay in the UI. Asynchronous code execution allows to execuete next instructions immediately and 
doesn't block
the flow.
*/
//ex of synchronous progrmaming
// print("1");
// print("2");
// print("3");

//output prints 
//1
//2
//3
// hence it is synchronous

//API - Application Programming Interface
//A set of rules and protocols that allows different software programs to communicate with each other.
//Acts as an intermediary bridge to help servers fetch any data and share functionality from each other.

setTimeout//-> It is used to generate a time for a function to work on or in how many seconds(any time unit)
//the function is to be working.


// function hello(){
//     print("Hello");
// }

// setTimeout(hello, 2000);//Hello will print after 2 seconds. As 2000ms = 2 seconds
//Example of Asynchronous programming

// print("1");
// print("2");

// setTimeout(() =>{
//     print("hello");
// },4000);

// print("3");
// print("4");
//in this 1,2,3,4 will be printed directly but for hello they wonn't have to wait for 4 seconds to get 
//printed and can run simulataneously.


//Callback - A callback is a function passed as an arguement to another function.

// function sum(a, b){//this is for adding the digits
//     print(a + b);
// }
// function calculator(a , b, sumCallback){
//     sumCallback(a, b);//sumCallback stores a and b
// }

// calculator(1,2,sum);//calling sum function as an arguement

// const hello =() =>{
//     print("Hello");
// }

// setTimeout(hello, 4000);

//Callback Hell
//Callback hell-> Nested callbacks stacked below one another forming a pyramid structure.
//this style of programming becomes difficult to understand and manage.


// example of callback pyramid
// function getData(dataId, getNext){
//     setTimeout(() =>{//states the timeout to fetch the data
        
//         print("data", dataId);
//         getData();
//     }, 2000);
// }

// getData(1, () =>{//lambda function is being used as parameter because functions can't be used as an arguement.to make recall possible it is used
//     getData(2, () =>{

       
//         })
//         getData(3, () =>{

//         })
//     })


//Promises ->
/*
Promises is for "eventual" completion of task. It is an object in JS. Either it will be rejected or resolved
but the task is going to be completed
it is a solution to callback hell
*/

// let promise = new Promise((resoleve, reject) => {
//     print("This is a promise");
//     resoleve("it got accepted");
// /**
//  result can be 
//  Pending 
//  Resolved
//  Rejected 
//  */

//If promise fullfilled and rejected.
//.then() is used for resolving statements (res) is used as a parameter
//.catch() is used for catching errors. (err) is used as a parameter

// getPromise = () =>{
//     return new Promise((resoleve, reject) =>{
//         resoleve("Resolved on time");
//         print("on the way to get resolved")
//     });
// };

// let promise = getPromise();

// promise.then((res) =>{
//     print("promise fulfilled")
// })
//promise chaining can be used as well. when we have to run them one by one.

/*
Use callnacls for simple stuff and event listeners
use promises when chaining multiple async calls or need better error handling
use async/await for most real code as it is cleaner and easier to maintain
 */


//Async/ Await

/*
Async function always returns a promise

async function myFunc(){}

await pauses the execution of its surrounding async function untill the promise is settled


Async - Await
async function always returns a promise.

// */
// async function api(resolve, reject) {
//     return new Promise(() =>{
//         setTimeout(() =>{
//         print("hello");
//         resolve(200);
//     }, 2000);
    
// });
// }
// async function getName() {
//     await api();
    
// }

// //in usual async and await things we have   to revoke our function normally but to prevent from that we use IIFE - immediately invoked  function expression
// //IIFE is a function that is called immediately as soon as it is defined.

// (async() => {
//     //-
// }) ();//this invokes the function by itself and it can even be used in common functions

//(function (){
//-
//}) ();

(function prints(){
    print("Hello js")
}) ();