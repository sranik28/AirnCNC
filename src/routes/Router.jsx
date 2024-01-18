import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../pages/authentication/Login";
import SignUP from "../pages/authentication/Signup";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signUp",
                element: <SignUP/>
            },
        ]
    }
]);

export default Router