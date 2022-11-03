import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/Spinner/Spinner";
import WriteAReview from "../../components/WriteAReview/WriteAReview";
import { useDetailedBookSearch } from "../bookDetailedPage/DetailedBookSearch";
function WriteAReviewPage() {
  const params = useParams();
  const { bookInfo } = useDetailedBookSearch(params.id);
  return params ? (
    <>
      {bookInfo.length > 0 ? (
        <div>
          <WriteAReview
            title={bookInfo[0].volumeInfo.title}
            author={
              bookInfo[0].volumeInfo.authors
                ? bookInfo[0].volumeInfo.authors
                : [""]
            }
            image={
              bookInfo[0].volumeInfo.imageLinks === undefined
                ? "https://books.google.bg/googlebooks/images/no_cover_thumb.gif"
                : `${bookInfo[0].volumeInfo.imageLinks.thumbnail}`
            }
            id={params.id}
          />
        </div>
      ) : ( 
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoadingSpinner />
          <div>Loading...</div>
        </div>
      )}
    </>
  ) : (
    <div>Check</div>
  );
}
export default WriteAReviewPage;
