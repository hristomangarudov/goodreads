import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StarRating from "./StartRating/StarRating";
function WriteAReview(props) {
  return (
    <div className="review-wrapper ">
      <div className="general-container">
        <h1>Review</h1>
        <div className="headers-container-titles">
          <h4>A Sign of Affection</h4>
          <h5>{">"}Review</h5>
        </div>
        <div className="cards-wrapper">
          <div className="reviewImgContainer">
            <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470082995l/29056083._SY475_.jpg" />
          </div>
          <div>
            <h5>A Sign of Affection</h5>
            <h6>Suu Morishita, Christine Dashiell</h6>
            <p>
              <span>My Rating:</span><span><StarRating/></span>
            </p>
          </div>
        </div>
        <div className="review-container ">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>What do you think?</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                placeholder="Write your thoughts here"
              />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Post
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default WriteAReview;
