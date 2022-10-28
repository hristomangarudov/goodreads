import { useEffect, useState } from "react";
import BookDetailedCard from "../../Components/BookDetailedCard/BookDetailedCard";
import LoadingSpinner from "../../Components/Spinner/Spinner";
import { useDetailedBookSearch } from "./DetailedBookSearch";
import { useParams } from 'react-router-dom' 

function BookDetailedPage() {
  const [currentBook, setCurrentBook] = useState([]);
  const params = useParams()
  const { bookInfo } = useDetailedBookSearch(params.id);
  return params?(
    <>
      {bookInfo.length > 0 ? (
        <div>
          {console.log(bookInfo[0])}
          <BookDetailedCard
            title={bookInfo[0].volumeInfo.title}
            author={
              bookInfo[0].volumeInfo.authors
                ? bookInfo[0].volumeInfo.authors
                : [""]
            }
            description={bookInfo[0].volumeInfo.description.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,'')}
            ratingsCount={bookInfo[0].volumeInfo.ratingsCount}
            image={
              bookInfo[0].volumeInfo.imageLinks.large === undefined
                ? "https://books.google.bg/googlebooks/images/no_cover_thumb.gif"
                : `${bookInfo[0].volumeInfo.imageLinks.large}`
            }
            averageRating={bookInfo[0].volumeInfo.averageRating}
          />
          <br />
          <br />
          <br />
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoadingSpinner />
          <div>Loading...</div>
        </div>
      )}
    </>
  ):(<div>adss</div>);
}
export default BookDetailedPage;
