import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./BookCard.scss";
function BookCard(props) {
  const navigate = useNavigate();
  const navigateToDetailedBookInfo = () => {
    navigate("/detailed-info");
  };

  return (
    <Card
      style={{ width: props.cardWidth }}
      bg="light"
      text="dark"
      className="book-card"
    >
      <Card.Img
        onClick={navigateToDetailedBookInfo}
        variant="top"
        src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651426717i/60784641._SX300_.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text as="h6">Author</Card.Text>
        <div>
          <span className="single-star">&#9733;</span>4.5
        </div>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
