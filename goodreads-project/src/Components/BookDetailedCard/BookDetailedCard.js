import "./BookDetailedCard.scss";
import StarRating from "../StartRating/StarRating";
import { useNavigate } from "react-router-dom";
import SmallComment from "../SmallComment/SmallComment";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getActiveUser } from "../../server/users";

function BookDetailedCard(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/detailed-info/write-review`;
    navigate(path);
  };

  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const toggleBtn = () => {
    setReadMoreShown(!isReadMoreShown);
  };
  const editProfile = useSelector((state) => state.editProfile);
  return (
    <div className="center-position">
      <div className="general-container detailedCard-white-container">
        <div className="detailedCard-wrapper ">
          <h1 className="detailedCard-title">Book Details</h1>
          <div className="detailedCard-container">
            <div className="detailedCard-img">
              <img
                src={props.image}
                className="img-fluid rounded-start"
                alt="..."
              />
              <div className="detailedCard-button">
                <div className="select">
                  {/* <span>Currently reading </span> */}
                  <select
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                    name="slct"
                    id="slct"
                  >
                    <option value="" disabled selected>Add to shelf</option>
                    <option value="currently reading">Currently reading</option>
                    <option value="read">Read</option>
                    <option value="toRead">Want to read</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="detailedCard-body-wrapper">
              <div className="detailedCard-body">
                <div>
                  <h2 className="detailedCard-title">{props.title}</h2>
                  <h4 className="detailedCard-title">{props.author}</h4>
                </div>
                <div className="detailedCard-ratings">
                  <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <small>{props.averageRating}</small>
                  <span>&nbsp;·&nbsp;</span>
                  <a href="">{props.ratingsCount} ratings</a>
                  <span>&nbsp;·&nbsp;</span>
                  <a href="">855 reviews</a>
                </div>
                {isReadMoreShown ? (
                  <>
                    <p className="detailedCard-plot">
                      {props.description}
                      <button className="read-more-less" onClick={toggleBtn}>
                        {isReadMoreShown ? "read less" : "read more"}
                      </button>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="detailedCard-plot">
                      {props.description.substr(0, 500)}

                      <button className="read-more-less" onClick={toggleBtn}>
                        {isReadMoreShown ? "read less" : "read more"}
                      </button>
                    </p>
                  </>
                )}

                <div className="detailedCard-text">
                  <small>
                    <strong>Type:</strong> {props.printType}
                  </small>
                  <small>
                    <strong>Category:</strong> {props.categories}
                  </small>
                  <small>
                    <strong>Pages:</strong> {props.pageCount}
                  </small>
                  <small>
                    <strong>Published:</strong> {props.publishedDate} by{" "}
                    {props.publisher}
                  </small>
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
                  <a className="username-review" href="">
                    {editProfile.profileUsername}
                  </a>
                  , start your review of A Sign of Affection, Vol. 1
                </span>
              </div>
              <div className="rating-review">
                {/* {<StarRating></StarRating>} */}
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
