

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';



const App = () => {

    let [arr, setArr] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    // let arr = [1,2,3,4,5,6,7,8,9,10];

    function deleteItem(e) {

        if (e.target.nodeName === "BUTTON") {
            console.log(e.target);
            let temp = arr.filter((el) => {
                console.log(e.currentTarget)
                return el != e.currentTarget.getAttribute("id");
            })
            // e.target.parentElement.remove();

            setArr(temp);
            console.log(arr);
        }
    }
    return (
        <div>
            {arr.map((element, idx) => {
                return <div key={idx} id={idx} onClick={deleteItem}>
                    <h1>{element}</h1>
                    <button>Delete</button>
                </div>
            })}
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);