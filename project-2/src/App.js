
import React,{useContext, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import UserClass from "./components/UserClass";
import { Outlet, RouterProvider, createBrowserRouter,Link } from "react-router-dom";
// console.log("script file is connected")

import AllUsers from "./components/AllUsers-CBC";
import UserContext from "./utils/UserContext";

const App = ()=>{
    // console.log(useContext(UserContext));

    let[username,setUserName] = useState("null");
    useEffect(()=>{
        const data = {
            name:"AjayRaj Mahiwal",
        }
        setUserName(data.name);
    },[]);

    return(
    <>
        <UserContext.Provider value={{currUser:username,setUserName}}>
            <Header/>
        </UserContext.Provider>
        <AllUsers></AllUsers>
        {/* <UserClass name={"ajay"} location={"jind"}/> */}
        {/* <Outlet/> */}
    </>
    )
};


const routers = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            
        ]
    },
    {
        path:"/about",
        element:<About/>,
        children:[
            {
                path:"2021",
                element:(
                    <div>
                        <Link to="test-1">Test-1</Link>
                        <Link to="test-2">Test-2</Link>
                        <Outlet></Outlet>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis
                         voluptates consequuntur, eos officia labore ea accusamus officiis qui 
                         aperiam ducimus molestiae praesentium nam architecto. Explicabo commodi 
                         vel consequuntur fugit excepturi quas saepe ea ut mollitia voluptatibus
                          quam quis ipsum laborum nostrum quaerat, ratione, modi nobis nam 
                         consectetur doloribus perferendis similique. Expedita nobis unde nulla 
                         animi et amet ad laboriosam sit exercitationem neque fugiat dolorem, nihil
                          eaque, deleniti quaerat obcaecati omnis consectetur blanditiis illum odit
                          numquam aperiam veritatis maxime. Blanditiis accusantium, provident quasi
                          beatae omnis fugiat odio numquam, minus assumenda officiis libero, earum
                          neque dolores nemo corporis. Ab, voluptatum consectetur!</p>

                    </div>
                ),
                children:[
                    {
                        path:"test-1",
                        element:(
                            <h1>Hello Thi is test-1</h1>
                        )
                    },
                    {
                        path:"test-2",
                        element:(
                            <h1>Hello Thi is test-2</h1>
                        )
                    },
                ]
            },
            {
                path:"2022",
                element:(
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis
                         voluptates consequuntur, eos off</p>
                )
            },
            {
                path:"2023",
                element:(
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis
                         voluptates consequuntur, eos officia labore ea accusamus officiis qui 
                         aperiam ducimus molestiae praesentium nam architecto. Explicabo commodi 
                         vel consequuntur fugit excepturi quas saepe ea ut mollitia voluptatibus
                          quam quis ipsum laborum nostrum quaerat, ratione, modi </p>
                )
            },
            {
                path:"2024",
                element:(
                    <p>Lorem ipsum dolor sit amet </p>
                )
            },
        ]
    },
    {
        path:"/contact",
        element:<App/>,
        children:[

        ]
    },
    {
        path:"/newsletter",
        element:<App/>,
        children:[

        ]
    },
    {
        path:"/get-started",
        element:<App/>,
        children:[

        ]
    },

])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={routers}></RouterProvider>
    // <App/>
);