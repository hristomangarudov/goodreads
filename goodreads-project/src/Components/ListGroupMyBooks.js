import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {getBookshelf,getNewBookshelf} from "../store/bookshelfTabSlice"
function ListGroupMyBooks(props) {
  const dispatch = useDispatch()
  return (
    <div className='list-group-mybooks'>
    <ListGroup variant="flush">
        <ListGroup.Item>
        <h5>BOOKSHELVES</h5>
        <div className='list-links-container'>
        <a className="link-decoration underline" href='#' onClick={()=>dispatch(getBookshelf("currentlyReading"))}><span>Currenty reading</span></a>
        <a className="link-decoration underline" href='#' onClick={()=>dispatch(getBookshelf("wantToRead"))}><span>Want to read</span></a>
        <a className="link-decoration underline" href='#' onClick={()=>dispatch(getBookshelf("read"))}><span>Read</span></a>
        </div>
            
        </ListGroup.Item>
        <ListGroup.Item>
        <h5>Add Books</h5>
        <Link style={{display:"block"}} className="link-decoration" to='/home'>Explore</Link>
        </ListGroup.Item>
    </ListGroup>
    </div>

  );
}

export default ListGroupMyBooks;