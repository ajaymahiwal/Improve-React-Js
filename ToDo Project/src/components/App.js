
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Features from "./Features";
import About from "./About";
import NewNote from "./NewNote";
import Footer from "./Footer";
import "../stylesheets/App.css"


const App = ()=>{
    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
            {/* <h1>Main</h1> */}
            {/* <Footer></Footer> */}
        </>
    )
}

export default App;

export {
    Home,
    Features,
    About,
    NewNote,
}
