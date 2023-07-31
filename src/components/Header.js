import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const onlineStatus = useOnlineStatus();

    let [btnNameReact,setBtnNameReact] = useState("Login");

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50">
            <div className="logo-container">
                <img className="w-20"src= {LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="flex px-4">Online:{ onlineStatus ?"🟢": "🔴"}</li>
                    <li className="flex px-4"><Link to="/">Home</Link></li>
                    <li className="flex px-4"><Link to="/about">About Us</Link></li>
                    <li className="flex px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="flex px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="flex px-4">Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                    <li className="flex px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>

    );
};

export default Header;