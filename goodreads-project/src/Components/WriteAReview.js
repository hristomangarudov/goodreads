import BookCard from "./BookCard";
function WriteAReview(props) {
  return (
    <div>
      <div className="cards-wrapper">
        <div className="reviewImgContainer">
          <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470082995l/29056083._SY475_.jpg" />
        </div>
        <div>
          <h5>A Sign of Affection</h5>
          <h6>Suu Morishita, Christine Dashiell</h6>
          <p>
            My Rating:<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </p>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
export default WriteAReview;
