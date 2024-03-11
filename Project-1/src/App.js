

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';



import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

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
        ]
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);



