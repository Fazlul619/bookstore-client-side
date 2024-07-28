const AddAuthor = () => {
  const handleAuthor = (event) => {
    event.preventDefault();
    const form = event.target;

    const authorName = form.authorName.value;
    const authorImage = form.authorImage.value;
    const bio = form.bio.value;
    const birthDate = form.birthDate.value;

    const authorInfo = {
      authorName,
      authorImage,
      bio,
      birthDate,
    };
    form.authorName.value = "";
    form.authorImage.value = "";
    form.bio.value = "";
    form.birthDate.value = "";
    console.log(authorInfo);
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] p-24 my-5 rounded-xl">
        <h2 className="text-3xl font-extrabold">Add Author</h2>
        <form onSubmit={handleAuthor}>
          {/* form row author name and author image */}
          <div className="md:flex">
            <div className="md: w-1/2">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Author Name</span>
                </div>
                <input
                  type="text"
                  name="authorName"
                  placeholder="Author Name"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="md: w-1/2 ml-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Author Image</span>
                </div>
                <input
                  type="text"
                  name="authorImage"
                  placeholder="Author Image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form row birth date and bio*/}
          <div className="md:flex">
            <div className="md: w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Bio</span>
                </div>
                <input
                  type="text"
                  name="bio"
                  placeholder="Bio"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="md: w-1/2 ml-4">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Birth Date</span>
                </div>
                <input
                  type="date"
                  name="birthDate"
                  required
                  placeholder="Birth Date"
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

export default AddAuthor;
