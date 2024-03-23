

import React from "react";
import User from "./User-CBC";



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
                <User name="First" location="Bharat"></User>
                <User name="Second" location="Bharat"></User>
            </div>
        )
    }
}

export default AllUsers;