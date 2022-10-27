import BookCard from "../../Components/BookCard/BookCard";
import ListGroupHome from "../../Components/ListGroupHome";
import { useState, useEffect, useCallback, useRef } from "react";
import { useBookSearch } from "./useBookSearch";
import LoadingSpinner from "../../Components/Spinner/Spinner";
import CheckboxBtn from "../../Components/CheckboxButton/CheckboxButton";
import { useDispatch, useSelector } from "react-redux";
import { getRadioValue } from "../../store/selectCategorySlice"
function HomePage(props) {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);
  const observer = useRef();
  const lastBookRef = useCallback(
    (node) => {
      console.log(node)
      if(loading){
        return
      }
      if(observer.current){
        observer.current.disconnect()
      }
        observer.current = new IntersectionObserver(entries=>{
          if(entries[0].isIntersecting && hasMore){
            setPageNumber(prevPageNumber =>prevPageNumber + 9)
          }
        })
        if(node){
          observer.current.observe(node)
        }
    },
    [loading, hasMore]
  );

  function debounce(func, timeout) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  const debounceHandler = useCallback(debounce(handleSearch, 1300), []);
  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <div className="cards-wrapper">
      <div className="general-list-container">
        <ListGroupHome></ListGroupHome>
      </div>
      <div className="general-container">
        <h1>Discover</h1>
        <div className="cards-container">
          {console.log(books)}
          {books.length > 0 ? (
            books.map((book, index) => {
              // console.log(book)
              if (books.length > 0) {
                if (books.length === index + 1) {
                  return (
                    <div ref={lastBookRef} key={book.id}>
                      <BookCard
                        key={index}
                        cover={
                          book.volumeInfo.imageLinks === undefined
                            ? "https://books.google.bg/googlebooks/images/no_cover_thumb.gif"
                            : `${book.volumeInfo.imageLinks.thumbnail}`
                        }
                        author={
                          book.volumeInfo.authors
                            ? book.volumeInfo.authors
                            : [""]
                        }
                        title={book.volumeInfo.title}
                        averageRating={book.volumeInfo.averageRating}
                        ratingsCount={book.volumeInfo.ratingsCount}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div key={index}>
                      <BookCard
                        key={book.id}
                        cover={
                          book.volumeInfo.imageLinks === undefined
                            ? "https://books.google.bg/googlebooks/images/no_cover_thumb.gif"
                            : `${book.volumeInfo.imageLinks.thumbnail}`
                        }
                        author={
                          book.volumeInfo.authors
                            ? book.volumeInfo.authors
                            : [""]
                        }
                        title={book.volumeInfo.title}
                        averageRating={book.volumeInfo.averageRating}
                        ratingsCount={book.volumeInfo.ratingsCount}
                      />
                    </div>
                  );
                }
              } else {
                <div>
                <LoadingSpinner />
                <div>Loading...</div>
              </div>
            
              }
            })
          ) : (
            <div>
            {loading && !error &&<LoadingSpinner />}
            {loading  && !error &&<div>Loading...</div>}
            {error &&<div>No items found</div>}
          </div>
          )}
        </div>
      </div>
      <div className="general-container input-container">
        <h5>What are you looking for?</h5>
        <div className="input-field">
          <input
            style={{ display: "block" }}
            placeholder="search books"
            onChange={debounceHandler}
          />
          <span></span>
        </div>

        <div className="checkbox-container">
          <h6>Categories:</h6>
          <CheckboxBtn />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
