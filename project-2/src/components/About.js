
// import './css/AboutStyles.css';
// import Header from './Header';
import TempComponent from "./TempComponent";
import {Link, Outlet} from "react-router-dom";

export default function About() {
    return (
        <>
            {/* <Header></Header> */}
            <div className='about'>
                <h1>About us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consectetur in voluptatibus perspiciatis eum molestias quae veritatis tenetur vel ut rem iusto, aut molestiae ea possimus, cum veniam illo. Porro in ea labore officiis, enim obcaecati quo excepturi vitae error delectus totam aliquam hic esse soluta vel modi nulla illo.
                </p>

                <h2>Yearly Achivements</h2>
                <div>
                {/* <nav>
                    <Link to="2021">2021</Link>
                    <Link to="2022">2022</Link>
                    <Link to="2023">2023</Link>
                    <Link to="2024">2024</Link>
                </nav> */}
                {/* <Outlet></Outlet> */}
                </div>
                

                
            </div>
        </>
    )
}