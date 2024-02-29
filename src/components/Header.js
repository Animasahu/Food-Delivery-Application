import { LOGO_UGL } from "../utils/constants";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  // console.log("header rendered");


  useEffect ( () => {
    // console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_UGL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to= "/"> Home </Link>  </li>
          <li> <Link to= "/about"> About Us </Link> </li>
          <li> <Link to= "/contact"> Contact Us </Link> </li>
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
