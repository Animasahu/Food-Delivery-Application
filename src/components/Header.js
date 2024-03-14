import { LOGO_UGL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  // console.log("header rendered");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  // useEffect(() => {
  //    console.log("useEffect called");
  // }, [btnNameReact]);

  //Subcribing to the store using selector

  const cartItems = useSelector((store)=> store.cart.items);

  return (
    <div className="flex justify-between bg-green-50 shadow-lg ">
      <div className="logo-container">
        <img className="w-24" src={LOGO_UGL} />
      </div>
      <div className=" item-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us </Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="px-4 font-bold"> Cart - ({cartItems.length} items) </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold"> {loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
