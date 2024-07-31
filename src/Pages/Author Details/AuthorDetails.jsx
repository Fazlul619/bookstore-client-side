import { useLoaderData } from "react-router-dom";

const AuthorDetails = () => {
  const authorData = useLoaderData();
  const { authorName, authorImage, bio, birthDate } = authorData;
  return (
    <div className="my-10">
      <div className="card  lg:card-side shadow-xl max-w-6xl mx-auto mt-28">
        <div className="md:w-96 h-[460px]">
          <img
            className="w-full h-full bg-[#F3F3F3] rounded-xl mx-auto p-4"
            src={authorImage}
            alt="Album"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{authorName}</h2>

          <div>
            <p className="border w-2/3"></p>
          </div>
          <div>
            <p className="font-medium w-80">{bio}</p>
          </div>
          <div>
            <p className="border w-2/3"></p>
          </div>

          <div>
            <p>
              <span className="text-[#131313B3] font-medium">Author:</span>
              <span className="font-semibold mx-20">{authorName}</span>
            </p>
            <p>
              <span className="text-[#131313B3] font-medium">
                Date of Birth:
              </span>
              <span className="font-semibold mx-4">{birthDate}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;
