import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom'
function ListGroupMyBooks() {
  return (
    <ListGroup variant="flush">
        <ListGroup.Item>
        <h5>BOOKSHELVES</h5>
        <Link style={{display:"block"}} className="link-decoration" to='/mybooks'>Currently reading</Link>
        <Link style={{display:"block"}} className="link-decoration" to='/mybooks'>Want to read</Link>
        <Link style={{display:"block"}} className="link-decoration" to='/mybooks'>Browse your collection</Link>
            
        </ListGroup.Item>
        <ListGroup.Item>
        <h5>Add Books</h5>
        <Link style={{display:"block"}} className="link-decoration" to='/home'>Explore</Link>
        </ListGroup.Item>
    </ListGroup>
  );
}

export default ListGroupMyBooks;