import { useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
             <h1>count: {count}</h1>
             <h1>count2: {count2}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : West Bengal</h3>
            <h4>Gmail : anima@97</h4>
        </div>
    )
}

export default User;