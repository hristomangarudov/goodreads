import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom'
function ListGroupMyBooks(props) {
  return (
    <div className='list-group-mybooks'>
    <ListGroup variant="flush">
        <ListGroup.Item>
        <h5>BOOKSHELVES</h5>
        <div className='list-links-container'>
        <a className="link-decoration underline" href='#' onClick={()=>props.getShelf("currentlyReading")}><span>Currenty reading</span></a>
        <a className="link-decoration underline" href='#' onClick={()=>props.getShelf("wantToRead")}><span>Want to read</span></a>
        <a className="link-decoration underline" href='#' onClick={()=>props.getShelf("read")}><span>Read</span></a>
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