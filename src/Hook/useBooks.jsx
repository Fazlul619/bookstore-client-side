import { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/allBooks-get-api")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);

        setLoading(false);
      });
  }, []);

  return [books, loading];
};

export default useBooks;
