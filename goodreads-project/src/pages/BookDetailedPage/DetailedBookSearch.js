import { useEffect, useState } from "react";

export default function DetailedBookSearch() {
  const [error, setError] = useState(false);
  const [bookInfo, setBookInfo] = useState([]);

  useEffect(() => {
      
    setError(false);
    fetch(
      `https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        // console.log(data);
       setBookInfo(data)
      })
      .catch((e) => {
        setError(true);
      });
  }, []);

  return { bookInfo };
}
