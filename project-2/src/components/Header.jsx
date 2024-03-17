
import "./css/HeaderStyles.css";
import {Link} from "react-router-dom"

const Header = ()=>{
    return (
        <header>
            <h1>Icon</h1>
            <nav>
                <ul>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/newsletter">NewsLetter</Link></li>
                    <li><Link to="/get-started">Get Started</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;