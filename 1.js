// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apna college";
// let divs = document.querySelectorAll(".box");
// //use .inside the method area to use boxes as a class in js.

// // divs[0].innerText = "This is div 1"
// // divs[1].innerText = "This is div 2"
// // divs[2].innerText = "This is div 3"
// // or we could
// let idx = 1;
// for(div of divs){
//     div.innerText = `new unique text is ${idx}`//this `` is used to write dynamic string lieterals which will change
//     //later on/ 
//     idx++;
// }

// let box = document.querySelector(".box");

// let class1 = box.getAttribute("class");
// console.log(class1);
// box.compu

let btn = document.createElement("button");
btn.innerText = "click me bruh";

btn.style.color = "white";
btn.style.backgroundColor = "black";



document.querySelector("body").prepend(btn);