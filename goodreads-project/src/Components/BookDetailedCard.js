import "../BookDetailedCard.css";

function BookDetailedCard(props) {
  return (
    <div className="detailedCard-container">
      <div className="detailedCard-wrapper">
        <div className="detailedCard-img">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651426717i/60784641._SX300_.jpg"
            className="img-fluid rounded-start"
            alt="..."
          />
          <div className="detailedCard-button">
            <div>
              <span>Currently reading </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <small>Rate this book</small>
              <small>&#9733;&#9733;&#9733;&#9733;&#9733;</small>
            </div>
          </div>
        </div>
        <div className="detailedCard-body-wrapper">
          <div className="detailedCard-body">
            <div>
              <h2 className="detailedCard-title">
                A Sign of Affection, Vol. 1
              </h2>
              <h4 className="detailedCard-title">
                by Suu Morishita, Christine Dashiell
              </h4>
            </div>

            <div className="detailedCard-ratings">
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <small>4.54</small>
              <span>&nbsp;·&nbsp;</span>
              <small>Rating details</small>
              <span>&nbsp;·&nbsp;</span>
              <small>4.215 ratings</small>
              <span>&nbsp;·&nbsp;</span>
              <small>855 reviews</small>
            </div>

            <p className="detailedCard-plot">
              Yuki is a typical college student, whose world revolves around her
              friends, social media, and the latest sales. But when a chance
              encounter on a train leads to her meeting friend-of-a-friend and
              fellow student Itsuomi-san, her world starts to widen. But even
              though Itsuomi-kun can speak three languages, sign language isn't
              one of them. Can the two learn to communicate the budding feelings
              between them?
            </p>

            <div className="detailedCard-text">
              <small>Kindle Edition, 198 pages</small>
              <small>Published March 31st 2020 by Kodansha Comics</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetailedCard;
