import { useState, useEffect } from "react"

export default Contact = () => {
    let [data, setData] = useState({fact:"Hello ji"});

    useEffect(() => {
        getData();
        
    }, []);
    
    let getData = async () => {
        let response = await fetch("https://catfact.ninja/fact");
        let resData = await response.json();
        console.log(resData);
        setData(resData);
    }


    return (
        <div>
            <h1>Contact page</h1>
            <p>hello ji kse ho</p>
            <button>hii</button>
            <h1>Fact:{data.fact}</h1>

            <form>
                <input placeholder="enter info-1" />
                <input placeholder="enter info-2" />
            </form>
        </div>
    )
}