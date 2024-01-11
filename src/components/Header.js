import { LOGO_UGL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  console.log("header rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_UGL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About Us </li>
          <li> Contact Us </li>
          <li> Cart </li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
