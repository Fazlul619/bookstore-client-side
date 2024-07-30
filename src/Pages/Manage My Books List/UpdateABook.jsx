import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useLoaderData } from "react-router-dom";

const UpdateABook = () => {
  const axiosPublic = useAxiosPublic();
  const book = useLoaderData();
  const {
    _id,

    bookName,

    bookImage,
    description,

    publishedDate,

    authorName,
  } = book;

  const handleAddBook = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookName = form.bookName.value;
    const bookImage = form.bookImage.value;
    const description = form.description.value;
    const publishedDate = form.publishedDate.value;
    const authorName = form.authorName.value;

    const updateBookData = {
      bookName,
      bookImage,
      description,
      publishedDate,
      authorName,
    };
    form.bookName.value = "";
    form.bookImage.value = "";
    form.description.value = "";
    form.publishedDate.value = "";
    form.authorName.value = "";
    console.log(updateBookData);

    axiosPublic
      .put(`http://localhost:5000/book-update-api/${_id}`, updateBookData)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          console.log("Book add");

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Book Update Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })

      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] p-24 my-5 rounded-xl">
        <h2 className="text-3xl font-extrabold">Update Your Book</h2>
        <form onSubmit={handleAddBook}>
          {/* form row book name and book image */}
          <div className="md:flex">
            <div className="md: w-1/2">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Book Name</span>
                </div>
                <input
                  type="text"
                  name="bookName"
                  required
                  defaultValue={bookName}
                  placeholder="Book Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="md: w-1/2 ml-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Book Image</span>
                </div>
                <input
                  type="text"
                  name="bookImage"
                  defaultValue={bookImage}
                  placeholder="Book Image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form row Published date and description */}
          <div className="md:flex">
            <div className="md: w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  defaultValue={description}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="md: w-1/2 ml-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Published Date</span>
                </div>
                <input
                  type="date"
                  name="publishedDate"
                  required
                  defaultValue={publishedDate}
                  placeholder="Published Date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8 justify-center  items-center">
            <div className="md: w-1/2">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Author Name</span>
                </div>
                <input
                  type="text"
                  name="authorName"
                  required
                  defaultValue={authorName}
                  placeholder="Author Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mt-10">
            <input
              type="submit"
              value="Update"
              className="btn btn-block btn-outline btn-success"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateABook;
