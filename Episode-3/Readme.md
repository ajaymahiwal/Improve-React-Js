
```javascript
console.log(heading1);
console.log(heading2);
```

`heading1` and `heading2` both are same, React elements or objects and heading1 is created with the core react method and heading2 is created using JSX which is more easy and efficient way to create React elements.

# JSX

**JSX stands for JavaScript XML**. It is a JavaScript extension that allows developers to write HTML in JavaScript. `JSX is not required to use React`, but it is highly recommended as it makes the development process easier and the code more readable.
JSX has a few advantages over writing ReactElement using core react:
- It makes it easier to write and add HTML in React.
- It allows developers to use JavaScript expressions in HTML.
- It makes the code more readable and maintainable.


`{}` curly braces is kind of open window in jsx in which we can write javascript.

```javascript
let head = <h1>Hello Jiii</h1>; 
//it is React Element created using jsx.JSX is converted into ReactElements or JS with the help of Babel.
```

## Functional Components
It is a simple javascript functions which returns ReactElement or JSX which later converted into ReactElement or js by Babel(javascript compiler).