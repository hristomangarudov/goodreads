import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom'
function ListGroupHome() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
      <h5>CURRENTLY READING</h5>
        <img src="https://s.gr-assets.com/assets/react_components/currently_reading/icn_default_CR_ltrail-16f28d39654104ceb329648a474943eb.svg"/>
        What are you reading?
        <input style={{display:"block"}} placeholder='search books'/>
        </ListGroup.Item>
        <ListGroup.Item>
        <h5>WANT TO READ</h5>
        <img src="https://s.gr-assets.com/assets/react_components/currently_reading/icn_default_CR_ltrail-16f28d39654104ceb329648a474943eb.svg"/>
        What do you want to read next?
        </ListGroup.Item>
        <ListGroup.Item>
        <h5>BOOKSHELVES</h5>
        <Link style={{display:"block"}} to='/mybooks'>Currently reading</Link>
        <Link style={{display:"block"}} to='/mybooks'>Want to read</Link>
        <Link style={{display:"block"}} to='/mybooks'>Browse your collection</Link>
            
        </ListGroup.Item>
        
    </ListGroup>
  );
}

export default ListGroupHome;