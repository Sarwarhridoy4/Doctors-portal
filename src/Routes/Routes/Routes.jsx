import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Appointment from "../../Pages/Appointment/Appointment";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import About from "../../Pages/About/About";
import Review from "../../Pages/Reviews/Reviews";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import Private from "../Private/Private";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/appointment',
                element:<Appointment></Appointment>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/dashboard',
                element: <Private><DashBoard></DashBoard></Private>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element:<DashBoard></DashBoard>
    }
])

export default router;