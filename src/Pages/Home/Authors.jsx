import useBooks from "../../Hook/useBooks";

const Authors = () => {
  const [authors] = useBooks();
  return (
    <div className="grid grid-cols-3 gap-5 place-items-center">
      {authors.slice(0, 6).map((author) => {
        return (
          <div
            key={author._id}
            className="card w-96 border-2  border-[#13131326]"
          >
            <div className=" w-80  p-6 bg-[#F3F3F3] rounded-xl mx-auto mt-7">
              <img
                className="rounded-xl w-32 h-40 mx-auto"
                src={author.authorImage}
                alt=""
              />
            </div>

            <div className="card-body">
              <h2 className="card-title">{author.authorName}</h2>
              <p className="border-dashed border mt-2  "></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Authors;
