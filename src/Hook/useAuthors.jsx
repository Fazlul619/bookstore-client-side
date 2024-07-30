import { useEffect, useState } from "react";

const useAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/allAuthors-get-api")
      .then((res) => res.json())
      .then((data) => {
        setAuthors(data);

        setLoading(false);
      });
  }, []);

  return [authors, loading];
};

export default useAuthors;
