import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom'
import WantToRead from '../assets/logo/want_to_read.svg'
import CurrentlyReading from '../assets/logo/currently_reading.svg'
function ListGroupHome() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
      <h5>CURRENTLY READING</h5>
        <img src={CurrentlyReading} alt="Currently Reading"/>
        What are you reading?
        <div>
        {/* <div className='input-field'>
        <span></span>
        </div> */}
        </div>
        </ListGroup.Item>
        <ListGroup.Item>
        <h5>WANT TO READ</h5>
        <img src={WantToRead} alt="Want to read"/>
        What do you want to read next?
        </ListGroup.Item>
        <ListGroup.Item>
        <h5>BOOKSHELVES</h5>
        <div className='list-links-container'>
        <Link className="link-decoration underline" to='/mybooks'><span>Currenty reading</span></Link>
        <Link className="link-decoration underline" to='/mybooks'><span>Want to read</span></Link>
        <Link className="link-decoration underline" to='/mybooks'><span>Browse collection</span></Link>
        </div>

            
        </ListGroup.Item>
        
    </ListGroup>
  );
}

export default ListGroupHome;