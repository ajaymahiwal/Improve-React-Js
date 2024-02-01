
## What is Emmet ?
It is a toolkit which is used in HTML and CSS which helps programmer to write fast code by using some abbreviations, shortcuts and symbols. It will reduce the amount of typing and improving productivity.
example with emmet:
1. div.container>div.item*3
```html
    <div class="container">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
```
2. .items>div*3
```html
    <div class="items">
        <div></div>
        <div></div>
        <div></div>
    </div>
```

+ Follow this link for [Emmet Shortcuts](https://docs.emmet.io/cheat-sheet/)

## Difference between Library and Framework ?

**Library :** 
- Collection of pre-written code or functions that you can use in your program.
- Library provides specific functionalities that you can call when needed.
- Library are typically focused on specific tasks or utilities.
- Library can be used independently in your application.
- You have more control over the flow of your application. You decide when and where to use specific functions from the library.
- No strict inversion of control. Your code determines the flow od execution.
- More flexibility and control.
- Example: jQuery, Axios etc.

**Framework :**
- A framework is a comprehensive set of tools, libraries, and conventions(rules) designed to help you build an entire application.
- It dictates(तय़) the structure of your code and provides guidelines on how to solve problems.
- Framework often enforce a specific architecture and many include predefined patterns for interaction.
- The control flow is often inverted. Instead of calling your code from a framework, your code is called by the framework. The framework manages the flow of control.
- Often involves inversion of control. The framework controls the overall flow and your code is called as needed.
- More opinionated and presciptive.
- Example: Express.js, Django etc.


## What is CDN ? Why do we use it ?
CDN (Content Delivery Network), it is a network of distribuited server