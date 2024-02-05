
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
    "h1",
    null,
    "Hello From ReactJS using Core React"
);

const heading2 = <h1>Hello From ReactJS But Using JSX.</h1>;

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root1.render(heading1);
root2.render(heading2);