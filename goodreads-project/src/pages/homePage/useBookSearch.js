import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRadioValue } from "../../store/selectCategorySlice"

export function useBookSearch(query, pageNumber, subject, title) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const category = useSelector((state) =>state.category.radioValue)

  useEffect(() => {
    setBooks([]);
  }, [query,category]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${query? query:category}+subject:${category}&printType=books&startIndex=${pageNumber}&maxResults=9`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        if(data.items.length >0){
          setBooks((prevBooks) => {
            console.log(data)
            return [...new Set([...prevBooks,...data.items])];
          });
        }else{
          setBooks((prevBooks) => {
            setLoading(false);
            setError(true);
            return [];
          });
        }

        setHasMore(data.items.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, [query, pageNumber, category]);

  return { loading, error, books, hasMore };
}
