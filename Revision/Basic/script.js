
import React from 'react';
import ReactDOM from 'react-dom/client';

console.log("hello is file is toally conneted !");

const root = ReactDOM.createRoot(document.getElementById("root"));

const msg = React.createElement("h1",{},"I Love Coding and Raadha Rani!");

root.render(msg);