import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./BookCard.scss";
function BookCard(props) {
  const navigate = useNavigate();
  return (
    <Card
      style={{ width: "15rem" }}
      bg="light"
      text="dark"
      className="book-card"
    >
      <Card.Img
        variant="top"
        src={props.cover}
        alt=""
      />
      <Card.Body className="bookcard-body">
        <Card.Title as="h5">{props.title}</Card.Title>
        <Card.Text as="h6">{props.author.toString()}</Card.Text>
        <div>
          <span className="single-star">&#9733;</span>{props.averageRating? props.averageRating:0}
          <span className="total-ratings">
          {props.ratingsCount? props.ratingsCount:0} Total Reviews
        </span>
        </div>

      </Card.Body>
    </Card>
  );
}

export default BookCard;
