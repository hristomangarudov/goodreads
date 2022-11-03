import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate } from "react-router-dom";
import WantToRead from "../assets/logo/want_to_read.svg";
import CurrentlyReading from "../assets/logo/currently_reading.svg";
import { getActiveUser } from "../server/users";
import { useState } from "react";
import { useDetailedBookSearch } from "../pages/bookDetailedPage/DetailedBookSearch";
import { useDispatch} from "react-redux";

function ListGroupHome() {
  const [active, setActive] = useState(getActiveUser());
  const { bookInfo } = useDetailedBookSearch(
    active.bookshelf.currentlyReading[0]
  );
  const { bookInfoWantToRead } = useDetailedBookSearch(
    active.bookshelf.wantToRead[0]
  );
  const navigate = useNavigate();

  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <h5>CURRENTLY READING</h5>
        {bookInfo.length > 0 ? (
          <div className="fake-link-container">
            <div
              key={bookInfo[0].id}
              className="fake-link "
              onClick={() => navigate(`/detailed-info/${bookInfo[0].id}`)}
            >
              <img
                src={
                  bookInfo[0].volumeInfo.imageLinks === undefined
                    ? "https://books.google.bg/googlebooks/images/no_cover_thumb.gif"
                    : `${bookInfo[0].volumeInfo.imageLinks.thumbnail}`
                }
                alt="Currently Reading"
              />
              <p className="fake-link-text">{bookInfo[0].volumeInfo.title}</p>
            </div>
          </div>
        ) : (
          <div>
            <img src={CurrentlyReading} alt="Currently Reading" />
            <p>What are you reading?</p>
          </div>
        )}
      </ListGroup.Item>
      <ListGroup.Item>
        <h5>WANT TO READ</h5>
        {bookInfoWantToRead.length > 0 ? (
          <div
            className="fake-link-container"
            onClick={() =>
              navigate(`/detailed-info/${bookInfoWantToRead[0].id}`)
            }
          >
            <div key={bookInfoWantToRead[0].id} className="fake-link">
              <img
                src={bookInfoWantToRead[0].volumeInfo.imageLinks.thumbnail}
                alt="Currently Reading"
              />
              <p className="fake-link-text">
                {bookInfoWantToRead[0].volumeInfo.title}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <img src={WantToRead} alt="Want To Read" />
            <p>What are you reading?</p>
          </div>
        )}
      </ListGroup.Item>
      <ListGroup.Item>
        <h5>BOOKSHELVES</h5>
        <div className="list-links-container">
          <Link
            className="link-decoration underline"
            to="/mybooks/currently-reading"
          >
            <span>Currenty reading</span>
          </Link>
          <Link
            className="link-decoration underline"
            to="/mybooks/want-to-read"
          >
            <span>Want to read</span>
          </Link>
          <Link className="link-decoration underline" to="/mybooks/read-books">
            <span>Read</span>
          </Link>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ListGroupHome;
