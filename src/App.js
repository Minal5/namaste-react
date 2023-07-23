import React, { Suspense, lazy } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import { Outlet,RouterProvider, createBrowserRouter } from "react-router-dom";

//  Chunking
//  Code Splitting
//  Dynamic Bundling
//  Lazy Loading
//  On demand loading
//  Dynamic import

const Grocery = lazy(()=> import ("./components/Grocery"));
const About = lazy(()=> import ("./components/About"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>     
        </div>
    )
}

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
        {
            path: "/",
            element: <Body />,
        },
        {
            path: "/about",
            element: 
                <Suspense fallback={<h1>Loading</h1>}>
                    <About />
                </Suspense>,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/grocery",
            element: 
                <Suspense fallback={<h1>Loading</h1>}>
                    <Grocery />
                </Suspense>,
        },
        {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />,
        }
    ],
        errorElement: <Error/>,
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute}/>);