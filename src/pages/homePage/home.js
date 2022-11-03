import BookCard from "../../Components/BookCard/BookCard";
import ListGroupHome from "../../Components/ListGroupHome";
import { useState, useEffect, useCallback, useRef } from "react";
import { useBookSearch } from "./useBookSearch";
import LoadingSpinner from "../../Components/Spinner/Spinner";
import CheckboxBtn from "../../Components/CheckboxButton/CheckboxButton";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);
  const observer = useRef();
  const navigate = useNavigate()
  const lastBookRef = useCallback(
    (node) => {
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
          {books.length > 0 ? (
            books.map((book, index) => {
              if (books.length > 0) {
                if (books.length === index + 1) {
                  return (
                    <div ref={lastBookRef} key={book.id} onClick={()=>navigate(`/detailed-info/${book.id}`)} className="fake-link">
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
                    <div key={index} onClick={()=>navigate(`/detailed-info/${book.id}`)} className="fake-link">
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
