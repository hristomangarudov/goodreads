import BookDetailedCard from "../../components/BookDetailedCard/BookDetailedCard";
import LoadingSpinner from "../../components/Spinner/Spinner";
import { useDetailedBookSearch } from "./DetailedBookSearch";
import { useParams } from "react-router-dom";
function BookDetailedPage() {
  const params = useParams();
  const { bookInfo } = useDetailedBookSearch(params.id);
  return params ? (
    <>
      {bookInfo.length > 0 ? (
        <div>
          <BookDetailedCard
            title={bookInfo[0].volumeInfo.title}
            author={
              bookInfo[0].volumeInfo.authors
                ? bookInfo[0].volumeInfo.authors
                : [""]
            }
            description={
              bookInfo[0].volumeInfo.description
                ? bookInfo[0].volumeInfo.description.replace(
                    /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
                    ""
                  )
                : "No available description"
            }
            ratingsCount={bookInfo[0].volumeInfo.ratingsCount}
            image={
              bookInfo[0].volumeInfo.imageLinks === undefined
                ? "https://books.google.bg/googlebooks/images/no_cover_thumb.gif"
                : `${bookInfo[0].volumeInfo.imageLinks.thumbnail}`
            }
            averageRating={bookInfo[0].volumeInfo.averageRating}
            categories={bookInfo[0].volumeInfo.categories}
            pageCount={bookInfo[0].volumeInfo.pageCount}
            publishedDate={bookInfo[0].volumeInfo.publishedDate}
            publisher={bookInfo[0].volumeInfo.publisher}
            printType={bookInfo[0].volumeInfo.printType}
            id={params.id}
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
  ) : (
    <div>adss</div>
  );
}
export default BookDetailedPage;
