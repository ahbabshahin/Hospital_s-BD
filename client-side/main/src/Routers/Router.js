import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/HOme/Home";
import Login from "../Pages/Shared/Login/Login";
import AllHospital from "../Pages/Hospital/AllHospital";
import SignUp from "../Pages/Shared/SignUp/SignUp";




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
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;