import { useEffect, useState } from "react";

export function GetSpecificBook(bookId) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState([]);

  useEffect(() => {
      
    setError(false);
    fetch(
      `https://www.googleapis.com/books/v1/volumes/${bookId}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
       setBook(data)
      })
      .catch((e) => {
        setError(true);
      });
  }, [bookId]);
  return { book };
}

