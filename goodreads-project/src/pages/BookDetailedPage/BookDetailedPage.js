import { useEffect, useState } from "react";
import BookDetailedCard from "../../Components/BookDetailedCard/BookDetailedCard";
import {DetailedBookSearch} from "./DetailedBookSearch";

// 'zyTCAlFPjgYC'
function BookDetailedPage() {
const [currentBook,setCurrentBook] = useState([])
const {bookInfo} = DetailedBookSearch()
// console.log(bookInfo)
// useEffect(()=>{
// setCurrentBook(bookInfo)
// },[bookInfo])

  return (
    <>
    {console.log(bookInfo)}
    {bookInfo.length > 0?(
      <div>
            <BookDetailedCard title={bookInfo[0].volumeInfo.title} />
            <br />
            <br />
            <br /> 
      </div>

    ):(
      <div>Thingy not found</div>
    )}

  
    </>
  );
}
export default BookDetailedPage;
