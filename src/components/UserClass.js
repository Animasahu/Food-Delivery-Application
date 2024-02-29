import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            userInfo : {
            name :  "Dummy",
            location : "Default",
            },
        };
    
        console.log(this.props.name + "Child Constructor");
    };

   async componentDidMount(){
        console.log(this.props.name + "Child compnent did mount");
        //API CALL

        const data = await fetch("https://api.github.com/users/animasahu");
        const json = await data.json();

        this.setState({
            userInfo : json,
        });

        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render (){

         console.log(this.props.name + "Child Render");

        const {name , location, avatar_url } = this.state.userInfo;
    
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Gmail : anima@97</h4>
            </div>
        )
    }
}

export default UserClass;


/**
 * ------MOUTING------
 * constructor (dummy data)
 * render (dummy data)
 *      <HTML Dummy />
 * Component Did Mount  
 *   <API Call>
 *   <this.setState> -> state variable is upadated
 * 
 * 
 * ----UPDATE-------
 * 
 *     render(Api data)
 *     <HTML (new API data) />
 * componentDid update
 */