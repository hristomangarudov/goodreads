import { useEffect, useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./MyBooksTable.scss";
import { Link, useNavigate } from "react-router-dom";
import { getActiveUser } from "../../server/users";
import CloseButtonComponent from "../CloseButton/CloseButton";
function MyBooksTable(props) {
  const [currentBooks, setCurrentBooks] = useState(props.books);
  const [newBooks, setNewBooks] = useState([]);
  const [isInPage, setIsInPage] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRemoveClick = (e, bookId) => {
    setShow(false);
    removeBook(e, bookId);
  };

  useEffect(() => {
    setCurrentBooks(props.books);
  }, [props]);
  useEffect(() => {
    if (currentBooks.length > 0) {
      let requests = currentBooks.map((id) => {
        return new Promise((resolve, reject) => {
          return fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then((res) => {
              resolve(res.json());
            })
            .catch((err) => {
              return [];
            });
        });
      });
      Promise.all(requests).then((values) => {
        setNewBooks(values);
      });
    } else {
      setNewBooks([]);
    }
  }, [currentBooks]);
  const handleSelect = (e, book) => {
    let status = e.target.value;
    let active = getActiveUser();
    let bookshelf = active.bookshelf;
    let bookId = book.id;
    let isInCurrently = bookshelf.currentlyReading.some((id) => id === bookId);
    let isInWantToRead = bookshelf.wantToRead.some((id) => id === bookId);
    let isInRead = bookshelf.read.some((id) => id === bookId);
    e.currentTarget.selectedIndex = 0;
    switch (status) {
      case "currentlyReading":
        if (isInCurrently) {
          setIsInPage(!isInPage);
        } else if (isInWantToRead) {
          setIsInPage(false);
          let bookIndex = bookshelf.wantToRead.findIndex((id) => id === bookId);
          bookshelf.wantToRead.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`);
        } else if (isInRead) {
          setIsInPage(false);
          let bookIndex = bookshelf.read.findIndex((id) => id === bookId);
          bookshelf.read.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`);
        } else {
          setIsInPage(false);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`);
        }
        break;
      case "wantToRead":
        if (isInWantToRead) {
          setIsInPage(!isInPage);
        } else if (isInCurrently) {
          setIsInPage(false);
          let bookIndex = bookshelf.currentlyReading.findIndex(
            (id) => id === bookId
          );

          bookshelf.currentlyReading.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`);
        } else if (isInRead) {
          setIsInPage(false);
          let bookIndex = bookshelf.read.findIndex((id) => id === bookId);
          bookshelf.read.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`);
        } else {
          setIsInPage(false);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`);
        }
        break;
      case "read":
        if (isInRead) {
          setIsInPage(!isInPage);
        } else if (isInWantToRead) {
          setIsInPage(false);
          let bookIndex = bookshelf.wantToRead.findIndex((id) => id === bookId);
          bookshelf.wantToRead.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`);
        } else if (isInCurrently) {
          setIsInPage(false);
          let bookIndex = bookshelf.currentlyReading.findIndex(
            (id) => id === bookId
          );
          bookshelf.currentlyReading.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`);
        } else {
          setIsInPage(false);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`);
        }
        break;
    }
  };
  const removeBook = (e, id) => {
    e.preventDefault();
    let active = getActiveUser();
    let bookshelf = active.bookshelf;
    let bookId = id;
    switch (props.currentShelf) {
      case "currently-reading":
        let bookIndexCurrent = bookshelf.currentlyReading.findIndex(
          (id) => id === bookId
        );
        bookshelf.currentlyReading.splice(bookIndexCurrent, 1);
        active.bookshelf = bookshelf;
        localStorage.setItem("activeUser", JSON.stringify(active));
        navigate(`/mybooks/${props.currentShelf}`);
        break;

      case "want-to-read":
        let bookIndexWant = bookshelf.wantToRead.findIndex(
          (id) => id === bookId
        );
        bookshelf.wantToRead.splice(bookIndexWant, 1);
        active.bookshelf = bookshelf;
        localStorage.setItem("activeUser", JSON.stringify(active));
        navigate(`/mybooks/${props.currentShelf}`);
        break;

      case "read-books":
        let bookIndexRead = bookshelf.read.findIndex((id) => id === bookId);
        bookshelf.read.splice(bookIndexRead, 1);
        active.bookshelf = bookshelf;
        localStorage.setItem("activeUser", JSON.stringify(active));
        navigate(`/mybooks/${props.currentShelf}`);
        break;
    }
  };

  let active = getActiveUser();
  const ratedBooks = active.ratedBooks;

  const checkRatedBooks = (book) => {
    if (ratedBooks.length > 0) {
      let isRated = ratedBooks.some((ratedBook) => ratedBook.id === book.id);
      if (isRated) {
        return (
          <div className="profile-review-container">
            <p>You have already rated this book</p>
            <button
              disabled
              onClick={() => navigate(`/detailed-info/write-review/${book.id}`)}
              className="write-review"
            >
              Write a review
            </button>
          </div>
        );
      }
    }
    return (
      <div className="profile-review-container">
        <p>What did you think?</p>
        <button
          onClick={() => navigate(`/detailed-info/write-review/${book.id}`)}
          className="write-review"
        >
          Write a review
        </button>
      </div>
    );
  };

  return (
    <div className="tabble-wrapper">
      <div>
        <p
          className={`errorShelf`}
          style={{ visibility: !isInPage ? "hidden" : "visible" }}
        >
          Book is already in shelf
        </p>
      </div>
      <Table striped hover>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Average Rating</th>
            <th>Personal Rating</th>
            <th>Shelves</th>
          </tr>
        </thead>
        <tbody>
          {newBooks.length > 0 ? (
            newBooks.map((book, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link to={`/detailed-info/${book.id}`}>
                      <img
                        width={50}
                        src={
                          book.volumeInfo.imageLinks === undefined
                            ? "https://books.google.bg/googlebooks/images/no_cover_thumb.gif"
                            : `${book.volumeInfo.imageLinks.thumbnail}`
                        }
                      />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/detailed-info/${book.id}`}>
                      {book.volumeInfo.title}
                    </Link>
                  </td>
                  <td>{book.volumeInfo.authors}</td>
                  <td>
                    <span>
                      {book.volumeInfo.averageRating
                        ? book.volumeInfo.averageRating
                        : "0"}
                      <span className="single-star">&#9733;</span>
                    </span>
                  </td>
                  <td>
                    <span>
                      {/* <StarRating /> */}
                      {checkRatedBooks(book)}
                    </span>
                  </td>
                  <td>
                    <div className="detailedCard-button">
                      <div className="select">
                        <select
                          className="select-dropdown"
                          onChange={(e) => handleSelect(e, book)}
                          name="slct"
                          id="slct"
                          defaultValue={"addToShelf"}
                        >
                          <option
                            disabled
                            hidden
                            value="addToShelf"
                            onSelect={(e) => e.stopPropagation()}
                          >
                            Add to shelf
                          </option>
                          <option value="currentlyReading">
                            Currently reading
                          </option>
                          <option value="read">Read</option>
                          <option value="wantToRead">Want to read</option>
                        </select>
                      </div>
                    </div>
                  </td>
                  <td>
                    <CloseButtonComponent
                      onClick={(e) => handleShow(e, book.id)}
                    />
                  </td>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Removal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Are you sure you want to remove {book.volumeInfo.title} from your
                      books?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="danger"
                        onClick={(e) => handleRemoveClick(e, book.id)}
                      >
                        Remove Book
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default MyBooksTable;
