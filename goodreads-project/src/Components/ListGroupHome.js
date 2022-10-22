import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom'
function ListGroupHome() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
      <h5>CURRENTLY READING</h5>
        <img src="https://s.gr-assets.com/assets/react_components/currently_reading/icn_default_CR_ltrail-16f28d39654104ceb329648a474943eb.svg"/>
        What are you reading?
        <div>
        <div className='input-field'>
        <input style={{display:"block"}} placeholder='search books'/>
        <span></span>
        </div>
        </div>
        </ListGroup.Item>
        <ListGroup.Item>
        <h5>WANT TO READ</h5>
        <img src="https://s.gr-assets.com/assets/react_components/currently_reading/icn_default_CR_ltrail-16f28d39654104ceb329648a474943eb.svg"/>
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