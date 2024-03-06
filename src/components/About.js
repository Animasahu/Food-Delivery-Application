import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


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
                <div>
                    LoggedIn User : 
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <UserClass name={"First "} location={"West Bengal(class)"}/>
            </div>
        )
    }
}


export default About ;