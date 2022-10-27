import { useEffect } from "react";
import BookDetailedCard from "../../Components/BookDetailedCard/BookDetailedCard";
import DetailedBookSearch from "./DetailedBookSearch";

// 'zyTCAlFPjgYC'
function BookDetailedPage() {

 

  return (
    <>
      <BookDetailedCard title={bookInfo.volumeInfo.title} />
      <br />
      <br />
      <br />
    </>
  );
}
export default BookDetailedPage;
