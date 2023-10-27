import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/HOme/Home";
import Login from "../Pages/Shared/Login/Login";
import AllHospital from "../Pages/Hospital/AllHospital";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import Appointment from "../Pages/Home/Appointment/Appointment";
import Inventory from "../Pages/Inventory/Inventory";
import Services from "../Pages/Services/Services";
import Doctor from "../Pages/Doctor/Doctor";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/allhospital',
                element: <AllHospital></AllHospital>
            }
            ,
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
            ,
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
            ,
            {
                path: '/inventory',
                element: <Inventory></Inventory>
            }
            ,
            {
                path: '/service',
                element: <Services></Services>
            }
            ,
            {
                path: '/doctor',
                element: <Doctor></Doctor>
            }
        ]
    }
])

export default router;