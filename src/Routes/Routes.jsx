import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllAuthor from "../Pages/All Author/AllAuthor";
import AllBook from "../Pages/All Book/AllBook";
import AddBook from "../Pages/Add Book/AddBook";
import AddAuthor from "../Pages/Add Author/AddAuthor";
import BookDetails from "../Pages/Book Details/BookDetails";
import AuthorDetails from "../Pages/Author Details/AuthorDetails";
import ManageMyBooksList from "../Pages/Manage My Books List/ManageMyBooksList";
import UpdateABook from "../Pages/Manage My Books List/UpdateABook";

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
        loader: () => fetch("http://localhost:5000/allAuthors-get-api"),
      },
      {
        path: "/allBook",
        element: <AllBook></AllBook>,
        loader: () => fetch("http://localhost:5000/allBooks-get-api"),
      },
      {
        path: "/addBook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/addAuthor",
        element: <AddAuthor></AddAuthor>,
      },
      {
        path: "bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allBooks-get-api/${params.id}`),
      },
      {
        path: "authorDetails/:id",
        element: <AuthorDetails></AuthorDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allAuthors-get-api/${params.id}`),
      },
      {
        path: "/manageMyBooksList",
        element: <ManageMyBooksList></ManageMyBooksList>,
      },
      {
        path: "/updateABook/:id",
        element: <UpdateABook></UpdateABook>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allBooks-get-api/${params.id}`),
      },
    ],
  },
]);
