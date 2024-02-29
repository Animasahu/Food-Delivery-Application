import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component {
    constructor(props){
        super(props);
        
        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent did mount");
    }

    render() {

        // console.log("Parent render");
        return (
            <div>
                <h1>About us page</h1>
                <UserClass name={"First "} location={"West Bengal(class)"}/>
            </div>
        )
    }
}


export default About ;