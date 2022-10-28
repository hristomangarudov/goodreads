import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import StarRating from "../StartRating/StarRating";
import "./MyBooksTable.scss";
function MyBooksTable(props) {
  const [currentBooks, setCurrentBooks] = useState(props.books);
  const [currentShelf,setCurrentShelf] = useState(props.shelf)
  const [newBooks, setNewBooks] = useState([]);
  useEffect(()=>{
    setCurrentBooks(props.books)
    setCurrentShelf(props.shelf)
  },[props])
  useEffect(() => {
    let productReturn = [];
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
          <th>Review</th>
        </tr>
      </thead>
      <tbody>
      {/* {console.log(newBooks)} */}
        {newBooks.length>0?(
          newBooks.map((book,index)=>{
            return ( 
            <tr key={index}>
              <td>
                <Link to="/mybooks">
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
                <Link to="/mybooks">{book.volumeInfo.title}</Link>
              </td>
              <td>
                <Link to="/mybooks">{book.volumeInfo.authors}</Link>
              </td>
              <td>
                <span>{book.volumeInfo.averageRating}</span>
              </td>
              <td>
                <span>
                  <StarRating />
                </span>
              </td>
              <td>
                <Link to="/mybooks">{currentShelf}</Link>
              </td>
              <td>
                <Link to="/mybooks">Write a Review</Link>
              </td>
              <td>
                <button>X</button>
              </td>
            </tr>)
          })
        ):<tr><td>smth</td></tr>}
       
      </tbody>
    </Table>
  );
}

export default MyBooksTable;
