//in js object is an entity having state and behavior (properties and methods).

//js have a special property called prototype. It states the type of object.
// type of prototype will be null or reference to an object
//__proto__ syntax and it lets other characterstics or methods of one class into others. for ex
//karanArjun1 __proto__ = Student. So karanArjun aquires prototype or abilities of student.


// const Student = {

// printName = () =>  {
// console.log("the name is ritik");
// }

// }


//classes in js
// Class is a program-code termplate for creating objects/
//those objects will have some state (variables ) & some behaviour (functions) inside it.

class myClass {

   
        name() {
            console.log("My name is Name");
        }
}

let class1 = new myClass();