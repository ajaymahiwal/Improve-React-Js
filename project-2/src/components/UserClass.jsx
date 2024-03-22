
import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);

        console.log(props);

        this.state = {
            count:0,
            count2:0,
        }
    }

    render(){

        let{name,location} = this.props;
        let{count,count2} = this.state;
        return(
            <>
                <div>
                    <h1>Name:{name}</h1>
                    <h1>Location:{location}</h1>
                    <h1>Count-1:{count} And Count-2:{count2}</h1>
                    <button onClick={()=>{
                        this.setState({
                            count:this.state.count + 1,
                        })
                    }}>Increase Count-1</button>

                    <button onClick={()=>{
                        this.setState({
                            count2:this.state.count2 + 1,
                        })
                    }}>Increase Count-2</button>

                    <button onClick={()=>{
                        this.setState({
                            count:this.state.count + 1,
                            count2:this.state.count2 + 1,
                        })
                    }}>Increase Count-1 And Count-2</button>
                </div>
            </>
        )
    }
}

export default UserClass;