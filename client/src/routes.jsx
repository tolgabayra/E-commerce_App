import { Navigate, useRoutes } from "react-router-dom";

//layouts
import HomeLayout from "./layouts/home/index"
import About from "./pages/About";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import Women from "./pages/Women";
import Login from "./pages/Login"
import Register from "./pages/Register"

export default function Router(){
    return useRoutes([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {path: "/", element: <Navigate to="/home" replace={true}/>},
                {path: "/home", element: <Home />},
                {path: "/about", element: <About />},
                {path: "/categories/women", element: <Women />},
                {path: "/categories/shoes", element: <Shoes />}

            ]

        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
     
    ])
}