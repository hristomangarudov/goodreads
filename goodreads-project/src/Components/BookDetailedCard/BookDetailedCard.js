import "./BookDetailedCard.scss";
import StarRating from "../StartRating/StarRating";
import { useNavigate } from "react-router-dom";
import SmallComment from "../SmallComment/SmallComment";
import { useSelector } from "react-redux";

function BookDetailedCard(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/detailed-info/write-review`;
    navigate(path);
  };

  const editProfile = useSelector((state) => state.editProfile);

  return (
    <div className="center-position">
      <div className="general-container detailedCard-white-container">
        <div className="detailedCard-wrapper ">
          <h1 className='detailedCard-title'>Book Details</h1>
          <div className="detailedCard-container">
            <div className="detailedCard-img">
              <img
                src={
                  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1649778755l/60095973._SX318_.jpg"
                }
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
                  <h2 className="detailedCard-title">Carrie</h2>
                  <h4 className="detailedCard-title">
                    by Stephen King (Goodreads Author)
                  </h4>
                </div>
                <div className="detailedCard-ratings">
                  <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <small>4.54</small>
                  <span>&nbsp;·&nbsp;</span>                 
                  <a href="">4.215 ratings</a>
                  <span>&nbsp;·&nbsp;</span>
                  <a href="">855 reviews</a>
                </div>
                <p className="detailedCard-plot">
                  A modern classic, Carrie introduced a distinctive new voice in
                  American fiction -- Stephen King. The story of misunderstood
                  high school girl Carrie White, her extraordinary telekinetic
                  powers, and her violent rampage of revenge, remains one of the
                  most barrier-breaking and shocking novels of all time.
                </p>
                <div className="detailedCard-text">
                  <small>Kindle Edition, 198 pages</small>
                  <small>Published March 31st 2020 by Kodansha Comics</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="community-reviews">COMMUNITY REVIEWS</p>
        <div className="write-review-container">
          <div className="write-review-wrapper">
            <div className="user-img">
              <img src={editProfile.profileImg} />
            </div>
            <div>
              <div>
                <span>
                  <a href="">{editProfile.profileUsername}</a>, start your review of A Sign of
                  Affection, Vol. 1
                </span>
              </div>
              <div className="rating-review">
                {<StarRating></StarRating>}
                <button onClick={routeChange} className="write-review">
                  Write a review
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SmallComment
            picture={"https://jenite.bg/pictures/1542216_480_.png"}
          />
          <SmallComment
            picture={
              "https://www.obekti.bg/sites/default/files/styles/article_gallery/public/images/shutterstock_125157233.jpg?itok=ro-c05c1"
            }
          />
          <SmallComment
            picture={
              "https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gallery/shutterstock_339451460.jpg?itok=gJWH6dJC"
            }
          />
          <SmallComment
            picture={
              "https://img.cms.bweb.bg/media/images/gallery/Oct2014/2110250466.webp"
            }
          />
          <SmallComment
            picture={
              "https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gallery/shutterstock_220755979.jpg?itok=ZbpDDqT-"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default BookDetailedCard;
