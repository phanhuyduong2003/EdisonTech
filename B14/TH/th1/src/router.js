import { Link, Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about"></Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <Layout/>,
    children: [
      {
        path: "/about",
        element: <div>About Us</div>,
      },
      {
        path: "/about/us",
        element: <div>US</div>,
      },
      {
        path: "/about/me",
        element: <div>Me</div>,
      },
    ],
  },
  {
    path: "/404",
    element: <div>404 Not Found</div>,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
]);
export default router;
