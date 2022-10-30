import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import {
  getActiveUser,
  getAllGlobalRatedBooks,
  setNewRatedBook,
  updateUsers,
} from "../../server/users";
import StarRating from "../StartRating/StarRating";

function WriteAReview(props) {
  const [bookRating, setBookRating] = useState("");
  const takeRating = (rating) => {
    setBookRating(rating);
  };
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const handlePostReview = (e) => {
    e.preventDefault();

    const active = getActiveUser();
    const globalRatedBooks = getAllGlobalRatedBooks();
    let ratedBooks = active.ratedBooks;

    let isThereCurrentBook = ratedBooks.some((book) => book.id === props.id);
    if (isThereCurrentBook) {
      console.log("You have aldready rated this book");
    } else {
      let newRatedBook = { id: props.id, rating: bookRating, review: review };
      ratedBooks.push(newRatedBook);
      active.ratedBooks = ratedBooks;
      localStorage.setItem("activeUser", JSON.stringify(active));
      updateUsers(active);
      //
      let ratedBook = globalRatedBooks.find((obj) => obj.id === props.id);
      if (ratedBook) {
        let user = ratedBook.usersReviews.find(
          (obj) => obj.username === active.username
        );
        if (!user) {
          let userReview = {
            username: active.username,
            rating: bookRating,
            review: review,
          };
          ratedBook.usersReviews.push(userReview);

          let neededBookIndex = globalRatedBooks.findIndex(
            (obj) => obj.id === ratedBook.id
          );
          globalRatedBooks.splice(neededBookIndex, 1);
          globalRatedBooks.push(ratedBook);

          localStorage.setItem(
            "globalRatedBooks",
            JSON.stringify(globalRatedBooks)
          );
        }
      } else {
        let userReview = {
          username: active.username,
          rating: bookRating,
          review: review,
        };
        let newBook = { id: props.id, usersReviews: [] };
        newBook.usersReviews.push(userReview);

        globalRatedBooks.push(newBook);

        localStorage.setItem(
          "globalRatedBooks",
          JSON.stringify(globalRatedBooks)
        );
      }
    }
    navigate(-1);
  };
  return (
    <div className="review-wrapper ">
      <div className="general-container">
        <h1>Review</h1>
        <div className="headers-container-titles">
          <h4>{props.title}</h4>
          <h5>{">"}Review</h5>
        </div>
        <div className="cards-wrapper-review">
          <div className="reviewImgContainer">
            <img src={props.image} />
          </div>
          <div>
            <h5>{props.title}</h5>
            <h6>by {props.author}</h6>
            <div className="rating-container">
              <div>My Rating:</div>
              <span>
                <StarRating takeRating={takeRating} />
              </span>
            </div>
          </div>
        </div>
        <div className="review-container ">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>What do you think?</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setReview(e.target.value);
                }}
                as="textarea"
                type="text"
                placeholder="Write your thoughts here"
              />
            </Form.Group>
            <Button
              onClick={handlePostReview}
              variant="secondary"
              type="submit"
            >
              Post
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default WriteAReview;
