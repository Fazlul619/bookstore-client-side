import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
const AddBook = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const email = user.email;

  const handleAddBook = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookName = form.bookName.value;
    const bookImage = form.bookImage.value;
    const description = form.description.value;
    const publishedDate = form.publishedDate.value;

    const bookData = {
      bookName,
      bookImage,
      description,
      publishedDate,
      email,
    };
    form.bookName.value = "";
    form.bookImage.value = "";
    form.description.value = "";
    form.publishedDate.value = "";
    console.log(bookData);

    axiosPublic
      .post("/book-collection-post-api", bookData)
      .then((res) => {
        if (res.data.insertedId) {
          console.log("Book add");

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Book Added Successfully",
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
        <h2 className="text-3xl font-extrabold">Add Your Book</h2>
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
                  placeholder="Published Date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mt-10">
            <input
              type="submit"
              value="Add"
              className="btn btn-block btn-outline btn-success"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
