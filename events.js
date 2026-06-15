
/*
Events in js
the change in the state of an oject is known as an event.
Evenets are fired to notify code of "interesting changes" that may affect code execution

. Mouse events
Keyboard events
 form events
 print events  and many more

 Event Object ->
 It is a special obect that has deteails about the event.

 All events have access to the event object's properties and methods .

*/ 
let btn = document.querySelector(".btn");

// btn.onclick = () => {
// console.log("button was clicked");
// let a = 25;
// `${a}`
// a++;
// btn.onclick  = (e) =>{//e specifies event object 
//     console.log(e);
  
// }

//event listener
//node.addEventListener(event, callback)=> btn.addEventListener(event,callback)
//node.removeEventlistener(event, callback)
//Note: Callback reference should be same if removing the event.
// whereas -> Events can be of any kind like click onmouse etc and callback is what deals with the event.
btn.addEventListener("click", ()  =>{
    console.log("button was clicked");alert('Hi bro');
})