

import React from "react";
import User from "./User-CBC";
import UserContext from "../utils/UserContext";


class AllUsers extends React.Component{
    constructor(props){
        super(props);

        console.log("parent constructor is called.");
    }
    
    componentDidMount(){
        console.log("parent component did mount is called.");
    }

    render(){
        console.log("parent render() is called.");

        return(
            <div className="all-users">
                    {/* <UserContext.Consumer>
                        {value=>(
                            <div>
                            <label>Change Username</label>
                            <input className="m-5 border" value={value.currUser} name="username" onChange={(e)=>{
                                console.log(e.target.value);
                                value.setUserName(e.target.value);
                            }}></input>
                            </div>
                        )}
                    </UserContext.Consumer> */}
                <User name="First" location="Bharat"></User>
                <User name="Second" location="Bharat"></User>
            </div>
        )
    }
}

export default AllUsers;