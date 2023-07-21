import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count:0,
        }
    }

    render(){
        const {name,location,contact} = this.props;
        const {count} = this.state;

        return <div className="user-card">
            <h1>Count: {count}</h1>
            <button 
                onClick={()=>{
                    //  NEVER UPDATE STATE VARIABLE DIRECTLY
                    this.setState({
                        count: this.state.count+1
                    });
                }}
            >Increase</button>
            <h1>Name: {name}</h1> 
            <h2>Location: {location}</h2>
            <h3>Contact: {contact}</h3>

        </div> 
    }
}

export default UserClass;