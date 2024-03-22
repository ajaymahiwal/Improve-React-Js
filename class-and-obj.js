

class A{
    constructor(props){
        console.log("I'm class A.")
        console.log("Class A Props ",props);
    }
}

class B extends A{
    constructor(){
        super();
        console.log("I'm class B.")
    }
}

let obj = new B();


/*

Yes, in JavaScript, the super() keyword is not called by default. This is because JavaScript uses prototypical inheritance, which means that objects inherit properties and methods from other objects, rather than from classes. When you create a new object, it inherits the properties and methods of its prototype object. The prototype object is the object that is specified when the new object is created.
If you want to call a method on the parent class, you can use the super() keyword. The super() keyword refers to the parent class of the current class. You can use it to call methods on the parent class, or to access properties on the parent class.

*/

/*



*/