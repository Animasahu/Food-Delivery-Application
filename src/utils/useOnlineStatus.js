import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    
    const [onlineStatus, setUseOnlineStatus] = useState(true);
    //Check if Online
    useEffect ( () => {
        window.addEventListener("offline", () => {
            setUseOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setUseOnlineStatus(true);
        });
    }, []);


    //boolean value
    return onlineStatus;
}

export default useOnlineStatus;