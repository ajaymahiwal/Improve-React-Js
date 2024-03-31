import React from 'react';
import ReactDOM from 'react-dom/client';
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Header from './Header';
import AllRestaurants from './AllRestaurants';
import ErrorPage from './ErrorPage';
import RestaurantMenuPage from './RestaurantMenuPage';



const App = ()=>{
    return(
        <>
            {/* <h1 className='text-center'>Project is started.</h1> */}
            <Header/>
            <Outlet/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:(
                <main className='px-[10%] @xl:px-[4%]'>
                    <AllRestaurants/>
                </main>
                ),
            },
            {
                path:"/restaurants/:id/menu",
                element:<RestaurantMenuPage/>,
            }
        ]
    },
    {
        path:"/test",
        element:<h1>Hello bete its working fine.</h1>
    },
    
])




ReactDOM.createRoot(
    document.getElementById("root")
).render(
    <RouterProvider router={router}></RouterProvider>
);