import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom'
function ListGroupMyBooks() {
  return (
    <ListGroup variant="flush">
        <ListGroup.Item>
        <h5>BOOKSHELVES</h5>
        <div className='list-links-container'>
        <Link className="link-decoration underline" to='/mybooks'><span>Currenty reading</span></Link>
        <Link className="link-decoration underline" to='/mybooks'><span>Want to read</span></Link>
        <Link className="link-decoration underline" to='/mybooks'><span>Read</span></Link>
        </div>
            
        </ListGroup.Item>
        <ListGroup.Item>
        <h5>Add Books</h5>
        <Link style={{display:"block"}} className="link-decoration" to='/home'>Explore</Link>
        </ListGroup.Item>
    </ListGroup>
  );
}

export default ListGroupMyBooks;