import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home isLoggedIn={false}/>
    },
    {
        path: '/login',
        element: <Login isLoggedIn={false}/>
    }
])
export default router;