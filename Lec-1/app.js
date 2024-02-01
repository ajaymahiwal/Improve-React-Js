
// Date 01-02-2024

// Example - 1


// create elements is a core thing of react so we used React object 
const heading = React.createElement(
    "h1",
    {id:"hello",className:"heading"},
    "Hello World from React.js"
);
console.log(heading); //it is a object not a html element, created by React.createElement

// creating or updating the dom is work of react dom file so we used react-dom file code obj
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render() it will take the heading object(React h1 element) and create h1 element which browser can understand and put inside that root element which is targeted via JS (document.getElementById("root"))
root.render(heading);




// Example - 2 Creating Nested Element Using React


let nestedHeading = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{},"I am a h1 tag.")
    )
);
console.log(nestedHeading); //Object
root.render(nestedHeading);

// Note: React elements are objects. While rendering on dom, it converts into html element which browser can understand.
/**
 <div id="root">
    <div id="parent">
        <div id="child">
            <h1>I am a h1 tag.</h1>
        </div>
    </div>
</div>
 */


nestedHeading = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"Child One."),React.createElement("h1",{},"Child Two.")]
    )
);
root.render(nestedHeading);
/**
 <div id="root">
    <div id="parent">
        <div id="child">
            <h1>Child One.</h1>
            <h1>Child Two.</h1>
        </div>
    </div>
</div>
 */




// Practice : Create this structure using react
/**
 <div id="root">
    <div id="parent">
        <div id="child-1">
            <h1>Child One.</h1>
            <h1>Child Two.</h1>
        </div>
        <div id="child-2">
            <h1>Child One.</h1>
            <h1>Child Two.</h1>
        </div>
    </div>
</div>
 */

nestedHeading = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child-1"},
            [React.createElement("h1",{},"Child One."), React.createElement("h1",{},"Child Two.")]
        ),
        React.createElement(
            "div",
            {id:"child-2"},
            [React.createElement("h1",{},"Child One."), React.createElement("h1",{},"Child Two.")]
        )
    ]
);
root.render(nestedHeading);