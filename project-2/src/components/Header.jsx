
import "./css/HeaderStyles.css";
import {Link} from "react-router-dom"
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import User from "./User-CBC";

const Header = ()=>{
    console.log(useContext(UserContext));
    // console.log("UserContext =>",UserContext);
    const {currUser,setUserName} = useContext(UserContext);
    return (
        <header className="p-4">
            <Link to="/"><h1 className="text-3xl">Icon</h1></Link>
            <nav>
                <ul>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/newsletter">NewsLetter</Link></li>
                    <li><Link to="/get-started">Get Started</Link></li>
                    <li>{currUser}</li>
                </ul>
            </nav>
            <div>
                        <label>Change Username</label>
                        <input className="m-5 border" value={currUser} name="username" onChange={(e)=>{
                            console.log(e.target.value);
                            setUserName(e.target.value);
                        }}></input>
            </div>
        </header>
    )
}

export default Header;