

import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector("#root"));

const TitleCompo = ()=>{
    return <h1>Hello ajay bahii</h1>
}

const Main = ()=>{
    return <>
        {React.createElement("h1",null,"heli")}
    </>
}


root.render(<Main/>);