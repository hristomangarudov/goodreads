import Card from 'react-bootstrap/Card';
import './book-card.scss'
function BookCard(props) {
  return (
    <Card style={{ width: props.cardWidth }} bg="light" text='dark' className='book-card'>
      <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651426717i/60784641._SX300_.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <div><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
        <Card.Text>
          Some quick example text to build on the card title
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;