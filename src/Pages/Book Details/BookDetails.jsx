import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const bookData = useLoaderData();
  const { bookName, bookImage, description, publishedDate, authorName } =
    bookData;
  return (
    <div>
      <div className="card  lg:card-side shadow-xl max-w-6xl mx-auto mt-28">
        <div className="md:w-96 h-[460px]">
          <img
            className="w-full h-full bg-[#F3F3F3] rounded-xl mx-auto p-4"
            src={bookImage}
            alt="Album"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p className="font-medium">By : {authorName}</p>
          <div>
            <p className="border w-2/3"></p>
          </div>
          <div>
            <p className="font-medium w-80">{description}</p>
          </div>
          <div>
            <p className="border w-2/3"></p>
          </div>

          <div>
            <p>
              <span className="text-[#131313B3] font-medium">Publisher:</span>
              <span className="font-semibold mx-20">{authorName}</span>
            </p>
            <p>
              <span className="text-[#131313B3] font-medium">
                Year of Publishing:
              </span>
              <span className="font-semibold mx-4">{publishedDate}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
