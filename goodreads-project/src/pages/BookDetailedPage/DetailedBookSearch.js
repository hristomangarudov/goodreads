import { useEffect, useState } from "react";

export function useDetailedBookSearch(id) {
  const [error, setError] = useState(false);
  const [bookInfo, setBookInfo] = useState([]);
  const [bookInfoWantToRead, setBookInfoWantToRead] = useState([]);

  useEffect(() => {
      if(id){
        setError(false);
    fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }else{
          return []
        }
      })
      .then((data) => {
       setBookInfo([data])
       setBookInfoWantToRead([data])
      })
      .catch((e) => {
        setError(true);
      });
      }else{
       setBookInfo([])
       setBookInfoWantToRead([])
      }
    
  }, []);
  return { bookInfo ,bookInfoWantToRead };
}
