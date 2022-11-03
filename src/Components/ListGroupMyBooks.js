import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
function ListGroupMyBooks(props) {
  const params = props.params.shelf;
  const [current, setCurrent] = useState("");
  const [want, setWant] = useState("");
  const [read, setRead] = useState("");
  useEffect(() => {
    switch (params) {
      case "want-to-read":
        setWant("bookshelf-active  bookshelf-underline");
        setCurrent("");
        setRead("");

        break;
      case "read-books":
        setWant("");
        setCurrent("");
        setRead("bookshelf-active  bookshelf-underline");

        break;
      case "currently-reading":
        setWant("");
        setCurrent("bookshelf-active bookshelf-underline");
        setRead("");

        break;
    }
  }, [params]);
  return (
    <div className="list-group-mybooks">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <h5>BOOKSHELVES</h5>
          <div className="list-links-container">
            <Link
              className={`link-decoration underline ${current}`}
              to="/mybooks/currently-reading"
            >
              <span>Currenty reading</span>
            </Link>
            <Link
              className={`link-decoration underline ${want}`}
              to="/mybooks/want-to-read"
            >
              <span>Want to read</span>
            </Link>
            <Link
              className={`link-decoration underline ${read}`}
              to="/mybooks/read-books"
            >
              <span>Read</span>
            </Link>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <h5>Add Books</h5>
          <Link
            style={{ display: "block" }}
            className="link-decoration"
            to="/home"
          >
            Explore
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default ListGroupMyBooks;
