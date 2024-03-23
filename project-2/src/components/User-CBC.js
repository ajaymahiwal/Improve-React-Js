

import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);

        console.log(this.props.name+" constructor called");
    }

    componentDidMount(){
        console.log(this.props.name + "component did mount called.")
    }

    render(){
        let{name,location} = this.props;
        console.log(name+" render() called.");

        return(
            <div className="user" style={
                {
                border:"2px solid black",
                padding:"2rem",
                }}>
                <h1>Name:{name}</h1>
                <h1>Location:{location}</h1>
            </div>
        )
    }
}

export default User;