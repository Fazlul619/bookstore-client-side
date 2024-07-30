import { Link } from "react-router-dom";
import Books from "./Books";
import Authors from "./Authors";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-full">
        <div className="my-6">
          <h1 className="text-3xl font-semibold md:text-5xl text-center">
            Featured Books
          </h1>
          <p className="text-center m-2">
            Uncover the magic within our featured book, a journey that
            transcends time and imagination. Dive deep into a world where every
            page promises adventure, mystery, and unforgettable memories.
          </p>
        </div>
      </div>
      <Books></Books>
      <div className="w-40 mx-auto my-5">
        <Link to="/allBook" className="w-full grid place-items-center mb-5">
          <button className="btn btn-outline btn-success">Show All</button>
        </Link>
      </div>
      <div className="w-full">
        <div className="my-6">
          <h1 className="text-3xl font-semibold md:text-5xl text-center">
            Authors
          </h1>
          <p className="text-center m-2">
            Meet the brilliant mind behind our featured book, a storyteller
            whose words captivate and inspire. Discover the authors journey,
            insights, and the passion that brings their stories to life.
          </p>
        </div>
      </div>
      <Authors></Authors>
      <div className="w-40 mx-auto my-5">
        <Link to="/allAuthor" className="w-full grid place-items-center mb-5">
          <button className="btn btn-outline btn-success">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
