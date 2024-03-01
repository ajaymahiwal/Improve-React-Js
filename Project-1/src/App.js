

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';



const Main = ()=>(
    <>
        <Header/>
        <Body/>
    </>
);


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Main />);



