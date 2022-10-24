import { useEffect, useState } from "react";

export function useBookSearch(query, pageNumber, subject, title) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&printType=books&startIndex=${pageNumber}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setBooks((prevBooks) => {
          return [...prevBooks, data];
        });
        setHasMore(data.items.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, [query, pageNumber, subject]);

  return { loading, error, books, hasMore };
}
