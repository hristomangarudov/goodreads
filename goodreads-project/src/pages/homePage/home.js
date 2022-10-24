import BookCard from "../../Components/BookCard/BookCard";
import ListGroupHome from "../../Components/ListGroupHome";
import { useState,useEffect,useCallback,useRef } from "react";
import {useBookSearch} from "./useBookSearch"
import LoadingSpinner from "../../Components/Spinner/Spinner";
import CheckboxBtn from "../../Components/CheckboxButton/CheckboxButton";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
function HomePage(props) {
  const [query,setQuery] = useState("")
  const [pageNumber,setPageNumber] = useState(1)
  const{
    books,
    hasMore,
    loading,
    error
  }=useBookSearch(query,pageNumber)
  const observer = useRef()
  const lastBookRef=useCallback(node=>{
    // console.log(node)
    // if(loading){
    //   return
    // }
    // if(observer.current){
    //   observer.current.disconnect()
    // }
    //   observer.current = new IntersectionObserver(entries=>{
    //     if(entries[0].isIntersecting && hasMore){
    //       setPageNumber(prevPageNumber =>prevPageNumber + 10)
    //     }
    //   })
    //   if(node){
    //     observer.current.observe(node)
    //   }
  },[loading,hasMore])
  
  function debounce(func, timeout = 1300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  const debounceHandler=useCallback(
    debounce(handleSearch, 1300)
  , [])
  function handleSearch(e){
    setQuery(e.target.value)
    setPageNumber(1)
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
          {books.length>0? books[0].items.map((book,index)=>{
            // console.log(book)
            if(books[0].items.length === index + 1){
              return <div ref={lastBookRef} key={book.id}><BookCard
              key={book.id}
              cover={book.volumeInfo.imageLinks.thumbnail?book.volumeInfo.imageLinks.thumbnail:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651426717i/60784641._SX300_.jpg"}
              author={book.volumeInfo.authors?book.volumeInfo.authors:["unknown"]}
              title={book.volumeInfo.title}
              averageRating={book.volumeInfo.averageRating}
              ratingsCount={book.volumeInfo.ratingsCount}
              /></div>
            }else{
              return <div key={book.id}><BookCard
              key={book.id}
              cover={book.volumeInfo.imageLinks.thumbnail?book.volumeInfo.imageLinks.thumbnail:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651426717i/60784641._SX300_.jpg"}
              author={book.volumeInfo.authors?book.volumeInfo.authors:["unknown"]}
              title={book.volumeInfo.title}
              averageRating={book.volumeInfo.averageRating}
              ratingsCount={book.volumeInfo.ratingsCount}
              /></div> 
            }
          }):<div><LoadingSpinner/><div>Loading...</div></div>}
        </div>
      </div>
      <div className="general-container input-container">
      <h5>What are you looking for?</h5>
        <div className='input-field'>
          <input style={{display:"block"}} placeholder='search books' onChange={debounceHandler}/>
          <span></span>
        </div>

        <div className="checkbox-container">
        <h6>Categories:</h6>
          <CheckboxBtn/>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
