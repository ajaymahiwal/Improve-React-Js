

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';


// const App = ()=>{
//     return(
//         <>
//         <Header/>
//         <Body/>
//         </>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>);



import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Outlet,
    useParams
} from "react-router-dom";

function MobilePhone(params) {
    let {id} = useParams();

    return(
        <div>
            <Link to="/products">products</Link>
            <br/>
            <Link to="../" relative='path'>mobiles</Link>
            <h1>Mobiles Phone ID: {id}</h1>

            <Link to="features">Features</Link>

            <h1>Other</h1>
            <Outlet></Outlet>
        </div >
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <div>
                    <h1>Hello World</h1>
                    <Link to="about">About Us</Link>
                </div>
                <div>
                    <Link to="a">a</Link>
                    <div></div>
                    <Link to="b">b</Link>
                </div>
                <Outlet />

            </>
        ),
        children: [
            {
                path: "a",
                element: (
                    <div>Hello jii i am a info.</div>
                )
            },
            {
                path: "b",
                element: (
                    <div>Hello jii i am b info.</div>
                )
            }
        ],
        // errorElement:(
        //     <div>
        //         <h1>Error aa gyii hai congraulations !</h1>
        //     </div>
        // ),
    },
    {
        path: "about",
        element: (
            <div>
                <h1>Hello World</h1>
                <Link to="/">Home</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores blanditiis iure tenetur possimus rerum voluptatum officia neque repudiandae cumque facere nam inventore, atque molestiae deleniti vel eius alias. Aliquid rem, ea unde inventore pariatur quis at reiciendis praesentium quam deserunt aspernatur omnis cum suscipit dolore error quibusdam cumque officiis eum eveniet. Laudantium officia esse corrupti sapiente quo repellendus enim facere, voluptate impedit deserunt ullam accusantium ipsa vel architecto quas! Est, tempora enim, libero veritatis quibusdam doloribus eos labore cum iusto veniam odio ullam quia deleniti quas repellendus hic aliquid delectus officiis. Possimus nulla minima soluta rerum laboriosam iste officiis dolore!</p>
            </div>
        ),
    },
    {
        path: "products",
        element: (
            <div>
                <h1>All products</h1>
            </div>
        )
    },
    {
        path: "products/electronics",
        element: (
            <div>
                <h1>All Electronics Items</h1>
            </div>
        )
    },
    {
        path: "products/electronics/mobiles",
        element: (
            <div>
                <h1>All Mobiles</h1>
            </div>
        )
    },
    {
        path: "products/electronics/mobiles/:id",
        element: (
                <MobilePhone/>
        ),
        children:[
            {
                path:"features",
                element:(
                    <div>
                        showing all feature of mobile 
                    </div>
                )
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);



