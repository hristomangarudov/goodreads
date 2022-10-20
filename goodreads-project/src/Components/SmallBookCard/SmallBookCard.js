import "./SmallBookCard.scss";

function SmallBookCard(props) {
  return (
    <div className="smallBook-wrapper">
      <div className="smallBook-container">
        <div className="smallBook-body-wrapper">
          <img
            src={props.picture}
            alt="..."
          />
          <div className="smallBook-text">
            <span>
              <a href="">Evlogi Georgiev</a> is currently reading
            </span>
            <h5>A Sign of Affection, Vol. 1 (A Sign of Affection, #1)</h5>
            <span>
              by <a href="">Suu Morishita</a>
            </span>
            <span>
              bookshelves: <a href="">currently-reading</a>
            </span>
          </div>
        </div>
        <div className="smallBook-button">
          <div>
            <span>Currently reading </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <small>Rate this book</small>
            <small>&#9733;&#9733;&#9733;&#9733;&#9733;</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallBookCard;
