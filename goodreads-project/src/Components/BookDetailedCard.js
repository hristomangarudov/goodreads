import "../BookDetailedCard.css";
import SmallComment from "./SmallComment";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";

function BookDetailedCard(props) {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/detailed-info/write-review`; 
    navigate(path);
  }

  return (
    <>
      <div className="detailedCard-wrapper">
        <div className="detailedCard-container">
          <div className="detailedCard-img">
            <img
              src={props.picture}
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
                <a href="">Rating details</a>
                <span>&nbsp;·&nbsp;</span>
                <a href="">4.215 ratings</a>
                <span>&nbsp;·&nbsp;</span>
                <a href="">855 reviews</a>
              </div>
              <p className="detailedCard-plot">
                Yuki is a typical college student, whose world revolves around
                her friends, social media, and the latest sales. But when a
                chance encounter on a train leads to her meeting
                friend-of-a-friend and fellow student Itsuomi-san, her world
                starts to widen. But even though Itsuomi-kun can speak three
                languages, sign language isn't one of them. Can the two learn to
                communicate the budding feelings between them?
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
            <img src="https://static.dir.bg/uploads/images/2019/10/03/1869405/768x.jpg?_=1570090953" />
          </div>
          <div>
            <div>
              <span>
                {" "}
                <a href="">Evlogi Georgiev</a>, start your review of A Sign of
                Affection, Vol. 1
              </span>
            </div>
            <div className="rating-review">
              {<StarRating></StarRating>}
              <button
                onClick={routeChange}
                className="write-review"
              >
                Write a review
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SmallComment picture={"https://jenite.bg/pictures/1542216_480_.png"} />
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
    </>
  );
}

export default BookDetailedCard;
