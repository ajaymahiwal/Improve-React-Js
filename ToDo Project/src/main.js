
import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom';
import App, {Home,Features,About,NewNote} from './components/App';


const routes = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/features",
                element:<Features></Features>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/new-note",
                element:<NewNote></NewNote>
            }
        ]
    }
]);

// ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider router={routes}></RouterProvider>
);