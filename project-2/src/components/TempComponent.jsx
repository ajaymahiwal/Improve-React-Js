
import { Link,Outlet } from "react-router-dom"
export default function Temp() {
    return (
        <div>
            <nav>
                <Link to="1">A</Link>
                <Link to="2">B</Link>
                <Link to="3">C</Link>
            </nav>
            <Outlet></Outlet> 
        </div>
    )
}