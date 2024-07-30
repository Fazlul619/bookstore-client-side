import { Link } from "react-router-dom";
import Books from "./Books";

const Home = () => {
  return (
    <div>
      <Books></Books>
      <div className="w-40 mx-auto my-5">
        <Link to="/allBook" className="w-full grid place-items-center mb-5">
          <button className="btn btn-outline btn-success">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
