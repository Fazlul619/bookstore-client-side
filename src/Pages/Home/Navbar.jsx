import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLink = (
    <>
      <li>
        <Link className="font-bold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/addBook">
          Add Book
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/addAuthor">
          Add Author
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/manageMyBooksList">
          Manage My Books List
        </Link>
      </li>
      <li>
        <Link className="font-bold" to="/manageMyAuthorsList">
          Manage My Authors List
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 h-24 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <img src="img" alt="" />
          <a className="text-xl font-bold ml-4 ">Book Store</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-success"
            >
              SIGN OUT
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-success">LOGIN</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
