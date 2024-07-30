import { Link } from "react-router-dom";

const ManageMyBooksTable = ({ Books, handleDelete }) => {
  const { _id, bookName, name, email, bookImage, publishedDate, authorName } =
    Books;

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded-xl w-24 h-24">
              <img
                src={
                  bookImage
                    ? bookImage
                    : "https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                }
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">
              {email ? email : "Don't Have Email"}
            </div>
          </div>
        </div>
      </td>
      <td>{bookName}</td>
      <td>{authorName}</td>
      <td>{publishedDate}</td>
      <th>
        <Link to={`/updateABook/${_id}`}>
          <button className="btn btn-outline btn-success">Update</button>
        </Link>
      </th>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-outline btn-error"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default ManageMyBooksTable;
