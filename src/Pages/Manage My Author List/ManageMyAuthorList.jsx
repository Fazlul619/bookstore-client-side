import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import ManageMyAuthorsTable from "./ManageMyAuthorsTable";

const ManageMyAuthorList = () => {
  const { user } = useContext(AuthContext);

  const [authorData, setAuthorData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allAuthors-get-api?email=${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setAuthorData(data));
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
        fetch(`http://localhost:5000/author-delete-api/${id}`, {
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
            const updatedAuthorData = authorData.filter(
              (author) => author._id !== id
            );
            setAuthorData(updatedAuthorData);
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
              <th>Author Name</th>
              <th>Birth Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {authorData.map((Author) => (
              <ManageMyAuthorsTable
                key={Author._id}
                Author={Author}
                handleDelete={handleDelete}
              ></ManageMyAuthorsTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyAuthorList;
