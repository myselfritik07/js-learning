//for dom manipulation
//used for editing and all and make responsive file
let para = document.getElementById("p");

// Check if the element was found before logging
if (para) {
    console.log("Success!", para.innerText);
} else {
    console.log("Element not found. Check the ID.");
}   

let heading = document.getElementsByClassName("heading");

if(heading){
    console.log("This is working ")
}else{
    console.log("Some kind of error is not letting it display");
}

console.dir(heading);//The console.dir() static method displays a list of the properties of the specified JavaScript object.
//  In browser consoles,  the output is presented as a 
// hierarchical listing with disclosure triangles that let you see the contents of child objects.

let allheading = document.querySelectorAll("h");
console.log(allheading);
//tagName - returns tag for the element nodes
//innerText - returns the text contnet of the node and it's all children
//innerHtml - returns the plain text or HTML content in the element
//textContent - returns textual content even for hidden elements

let body = document.querySelectorAll("body");
if (body){
    console.log("body is here");
}

console.dir(document.body.firstChild);
/*
While .children selects only element nodes, .childNodes includes all three types, including whitespace text nodes and comments.

Element Node: Represents an HTML tag (e.g., <h1>); nodeType is 1. 
Text Node: Represents textual content inside an element; nodeType is 3. 
Comment Node: Represents <!-- comment --> markup; nodeType is 8. 
Example usage:

const element = document.querySelector('h1');
const text = element.childNodes[0]; // Text node
const comment = element.childNodes[1]; // Comment node

console.log(element.nodeType); // 1
console.log(text.nodeType); // 3
console.log(comment.nodeType); // 8
*/

//console.dir(document.body.innerHTML); provide whole html
console.dir(document.body.innerText);