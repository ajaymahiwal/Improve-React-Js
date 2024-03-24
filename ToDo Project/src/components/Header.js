
import {Link} from 'react-router-dom';

function Header(){
    return (
        <header>
            <nav>
                <Link to="/">Icon</Link>
                <ul>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;