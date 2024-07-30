import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";

const AllAuthor = () => {
  const authorData = useLoaderData();
  const [layoutStatus, setLayoutStatus] = useState(false);
  const [searchedWords, setSearchedWords] = useState("");

  let searchedItems = authorData.filter((author) =>
    author.authorName.toLowerCase().includes(searchedWords.toLowerCase())
  );

  return (
    <>
      <div className="mb-5 w-full relative">
        <div className="relative">
          <input
            type="text"
            value={searchedWords}
            onChange={(e) => setSearchedWords(e.target.value)}
            className="bg-gray-100 outline-none border-none w-full px-2 py-3"
          />
          <span
            className="absolute top-[50%] right-4 translate-y-[-50%] cursor-pointer z-10"
            onClick={() => setSearchedWords("")}
          >
            <AiFillCloseCircle className="text-2xl" />
          </span>
        </div>
        {searchedWords && searchedItems.length > 0 ? (
          <div className="absolute w-full max-h-96 overflow-auto p-2 bg-gray-300 z-20">
            {searchedItems.map((item) => (
              <Link
                to={`/authorDetails/${item._id}`}
                key={item._id}
                className="flex items-start justify-between mb-4"
              >
                <div className="flex gap-4">
                  <div>
                    <img
                      src={item.authorImage}
                      alt={item.authorName}
                      className="w-40 object-cover rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold">{item.authorName}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
      <div
        className={`grid w-full ${
          layoutStatus
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {authorData.map((author) => {
          const { authorName, authorImage, birthDate, _id } = author;

          return (
            <div
              key={author._id}
              className="card w-96 border-2  border-[#13131326] my-3"
            >
              <div className=" w-80  p-6 bg-[#F3F3F3] rounded-xl mx-auto mt-7">
                <img
                  className="rounded-xl w-32 h-40 mx-auto"
                  src={authorImage}
                  alt=""
                />
              </div>

              <div className="card-body">
                <h2 className="card-title">{authorName}</h2>
                <p className="text-[#131313CC] font-medium ">
                  Birth Date : {birthDate}
                </p>
                <p className="border-dashed border mt-2  "></p>
              </div>
              <div className="card-body">
                <Link to={`/authorDetails/${_id}`}>
                  <button className="btn btn-outline btn-success">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="btn btn-outline btn-success my-5"
        onClick={() => setLayoutStatus(!layoutStatus)}
      >
        Change layout
      </button>
    </>
  );
};

export default AllAuthor;
