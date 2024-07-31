import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import ManageMyBooksTable from "./ManageMyBooksTable";

const ManageMyBooksList = () => {
  const { user } = useContext(AuthContext);

  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allBooks-get-api?email=${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setBookData(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/book-delete-api/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const updatedBookData = bookData.filter((book) => book._id !== id);
            setBookData(updatedBookData);
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>User</th>
              <th>Book Name</th>
              <th>Writer Name</th>
              <th>published Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookData.map((Books) => (
              <ManageMyBooksTable
                key={Books._id}
                Books={Books}
                handleDelete={handleDelete}
              ></ManageMyBooksTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyBooksList;
