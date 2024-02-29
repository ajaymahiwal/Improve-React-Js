console.log("hello i am working with index.html");

// const React = require("react");
// const ReactDOM = require("react-dom/client");
// const App = require("./app.js");


// const HeadingUsingCoreReact = React.createElement("h1",{},"Hello using core react js");
// console.log(HeadingUsingCoreReact);
// console.log(<App/>);  


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
import {Heading,Title} from './app.js';
// const a = require("./app.js");
// const {sum,mul} = require("./app.js");

import { useState } from 'react';

const MainLayout = ()=>{
    const[value,setValue] = useState(0);

    let increaseCount = ()=>{
        setValue((value)=>value+1);
    }
    return(
        <>
            {/* <App></App> */}
            {/* <Title/>
            <Heading></Heading> */}

            <h1 style={{fontSize:"20vw", textAlign:"center"}}>{value}</h1>
            <button onClick={increaseCount} style={{textAlign:"center",display:"block",margin:"0 auto", padding:".7rem 2rem",fontSize:"1.5rem"}} >Increase Count</button>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainLayout></MainLayout>);

console.log(MainLayout);
console.log(root);