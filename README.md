# Namaste React

**.jsx and .js exxtension doesn't matter, because end of the day everything is JS so don't think too much about extension you can use extension .js or .jsx**

You're absolutely right! The choice between `.js` and `.jsx` extensions doesn't fundamentally change how the JavaScript code behaves. Both extensions ultimately represent JavaScript code. The difference lies more in convention and tooling.

Here's why it doesn't matter much:

1. **JSX is a syntax extension**: JSX is a syntax extension for JavaScript often used with React. JSX allows you to write HTML-like code directly within your JavaScript. However, JSX gets transpiled into regular JavaScript code before execution. This means that whether your file has a `.jsx` or `.js` extension, it still gets transformed into JavaScript understood by browsers or Node.js.

2. **Tooling support**: Some development environments or build tools may expect JSX files to have a `.jsx` extension to apply specific transformations or linting rules. However, most modern tools can be configured to handle either extension seamlessly.

3. **Consistency and readability**: Using a `.jsx` extension can provide a visual cue to other developers that the file contains JSX syntax, which might be helpful for readability and maintainability. But again, this is just a convention and not a strict rule.

Ultimately, the choice between `.js` and `.jsx` is often a matter of personal preference or team convention. As long as you and your team are consistent in your choice and your tooling supports it, either extension will work just fine.
----


# Understanding JavaScript Function Overloading and Overriding

## Overview
JavaScript does not support constructor overloading or method overloading. This means that you cannot create multiple constructors with the same name, or multiple methods with the same name but different parameters.
There are a few reasons why JavaScript does not support overloading. One reason is that it would make the language more complex. Overloading can be difficult to understand and use, especially for beginners. Another reason is that overloading can lead to errors. If you have two methods with the same name, it can be easy to accidentally call the wrong one.


## Reasons for Lack of Overloading Support
There are several reasons why JavaScript does not support overloading:
1. **Complexity:** Overloading can make the language more complex and harder to understand, particularly for beginners.
2. **Error-Prone:** Overloading can lead to errors, as having multiple methods with the same name can cause confusion and make it easy to accidentally call the wrong one.


**Note:** 
JavaScript does not support overloading. JavaScript supports overriding, so if you define two functions with the same name, the last one defined will override the previously defined version and every time a call will be made to the function, the last defined one will get executed.
## Function Hoisting
Remember: Function Hoisting In JavaScript ! 
It's essential to note that JavaScript functions are hoisted, meaning they are moved to the top of their containing scope during the compilation phase. This behavior can affect the way functions are defined and called within a JavaScript program.
----



# Mounting

Mounting in React refers to the process of creating a React component instance and inserting it into the Document Object Model (DOM). It is the first phase in the lifecycle of a React component.
During the mounting phase, React performs the following steps:
1. It creates a new instance of the component class.
2. It calls the constructor method of the component class.
3. It calls the render method of the component class to generate the component's HTML output.
4. It inserts the component's HTML output into the DOM.
Once the component is mounted, it is considered to be "live" and can respond to user interactions and state changes.