import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllAuthor from "../Pages/All Author/AllAuthor";
import AllBook from "../Pages/All Book/AllBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allAuthor",
        element: <AllAuthor></AllAuthor>,
      },
      {
        path: "/allBook",
        element: <AllBook></AllBook>,
      },
    ],
  },
]);
