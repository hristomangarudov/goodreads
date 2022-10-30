import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import StarRating from "../StartRating/StarRating";
import "./MyBooksTable.scss";
import { Link, useNavigate } from "react-router-dom";
import { getActiveUser } from "../../server/users";
function MyBooksTable(props) {
  const [currentBooks, setCurrentBooks] = useState(props.books);
  const [newBooks, setNewBooks] = useState([]);
  const navigate = useNavigate()
  useEffect(()=>{
    setCurrentBooks(props.books)
  },[props])
  useEffect(() => {
    let requests = currentBooks.map((id) => {
      return new Promise((resolve, reject) => {
        return fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(res =>{
          resolve(res.json())
        })
      });
    });
    Promise.all(requests)
    .then((values)=>{
      setNewBooks(values)
    })
  }, [currentBooks]);
  const handleSelect = (e,book) => {
    let status = e.target.value;
    let active = getActiveUser();
    let bookshelf = active.bookshelf;
    let bookId = book.id;
    let isInCurrently = bookshelf.currentlyReading.some((id) => id === bookId);
    let isInWantToRead = bookshelf.wantToRead.some((id) => id === bookId);
    let isInRead = bookshelf.read.some((id) => id === bookId);
    switch (status) {
      case "currentlyReading":
        if (isInCurrently) {
        } else if (isInWantToRead) {
          let bookIndex = bookshelf.wantToRead.findIndex((id) => id === bookId);
          bookshelf.wantToRead.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active))
          navigate(`/mybooks/${props.currentShelf}`)
        } else if (isInRead) {
          let bookIndex = bookshelf.read.findIndex((id) => id === bookId);
          bookshelf.read.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active))
          navigate(`/mybooks/${props.currentShelf}`)
        } else {
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active))
          navigate(`/mybooks/${props.currentShelf}`)
        }
        break;
      case "wantToRead":
        if (isInWantToRead) {
        } else if (isInCurrently) {
          let bookIndex = bookshelf.currentlyReading.findIndex(
            (id) => id === bookId
          );
          console.log(bookIndex);
          bookshelf.currentlyReading.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`)
        } else if (isInRead) {
          let bookIndex = bookshelf.read.findIndex((id) => id === bookId);
          bookshelf.read.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`)
        } else {
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`)
        }
        break;
      case "read":
        if (isInRead) {
          console.log("IMA GO VECHE");
        } else if (isInWantToRead) {
          let bookIndex = bookshelf.wantToRead.findIndex((id) => id === bookId);
          bookshelf.wantToRead.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`)
        } else if (isInCurrently) {
          let bookIndex = bookshelf.currentlyReading.findIndex(
            (id) => id === bookId
          );
          bookshelf.currentlyReading.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`)
        } else {
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
          navigate(`/mybooks/${props.currentShelf}`)
        }
        break;
    }
  };

  return (
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
      {/* {console.log(newBooks)} */}
        {newBooks.length>0?(
          newBooks.map((book,index)=>{
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
                <Link to={`/detailed-info/${book.id}`}>{book.volumeInfo.title}</Link>
              </td>
              <td>
                {book.volumeInfo.authors}
              </td>
              <td>
                <span>{book.volumeInfo.averageRating?book.volumeInfo.averageRating:"0"}<span className="single-star">&#9733;</span></span>
              </td>
              <td>
                <span>
                  <StarRating />
                </span>
              </td>
              <td>
              <div className="detailedCard-button">
                <div className="select">
                  <select
                    className="select-dropdown"
                    onChange={(e)=>
                      handleSelect(e,book)
                    }
                    name="slct"
                    id="slct"
                    defaultValue={'addToShelf'}

                  >
                    <option disabled hidden value="addToShelf">Add to shelf</option>
                    <option value="currentlyReading">Currently reading</option>
                    <option value="read">Read</option>
                    <option value="wantToRead">Want to read</option>
                  </select>
                 </div>
                 </div>
              </td>
              <td>
                <button>X</button>
              </td>
            </tr>)
          })
        ):<tr></tr>}
       
      </tbody>
    </Table>
  );
}

export default MyBooksTable;
