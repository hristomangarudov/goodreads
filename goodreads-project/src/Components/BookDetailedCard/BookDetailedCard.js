import "./BookDetailedCard.scss";
import StarRating from "../StartRating/StarRating";
import { useNavigate } from "react-router-dom";
import SmallComment from "../SmallComment/SmallComment";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getActiveUser } from "../../server/users";
import jsonData from "../../Data/data.json";

function BookDetailedCard(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(`/detailed-info/write-review/${props.id}`);
  };

  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const toggleBtn = () => {
    setReadMoreShown(!isReadMoreShown);
  };

  const handleSelect = (e) => {
    let status = e.target.value;
    let active = getActiveUser();
    let bookshelf = active.bookshelf;
    let bookId = props.id;
    let isInCurrently = bookshelf.currentlyReading.some((id) => id === bookId);
    let isInWantToRead = bookshelf.wantToRead.some((id) => id === bookId);
    let isInRead = bookshelf.read.some((id) => id === bookId);

    switch (status) {
      case "currentlyReading":
        if (isInCurrently) {
        } else if (isInWantToRead) {
          let bookIndex = bookshelf.wantToRead.findIndex((id) => id === bookId);
          bookshelf.wantToRead.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
        } else if (isInRead) {
          let bookIndex = bookshelf.read.findIndex((id) => id === bookId);
          bookshelf.read.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
        } else {
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
        }
        break;
      case "wantToRead":
        if (isInWantToRead) {
        } else if (isInCurrently) {
          let bookIndex = bookshelf.currentlyReading.findIndex(
            (id) => id === bookId
          );
          console.log(bookIndex);
          bookshelf.currentlyReading.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
        } else if (isInRead) {
          console.log("GLOBALEN SI ");
          let bookIndex = bookshelf.read.findIndex((id) => id === bookId);
          bookshelf.read.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
        } else {
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
        }
        break;
      case "read":
        if (isInRead) {
          console.log("IMA GO VECHE");
        } else if (isInWantToRead) {
          let bookIndex = bookshelf.wantToRead.findIndex((id) => id === bookId);
          bookshelf.wantToRead.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
        } else if (isInCurrently) {
          let bookIndex = bookshelf.currentlyReading.findIndex(
            (id) => id === bookId
          );
          bookshelf.currentlyReading.splice(bookIndex, 1);
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
        } else {
          bookshelf[status].push(bookId);
          active.bookshelf = bookshelf;
          localStorage.setItem("activeUser", JSON.stringify(active));
        }
        break;
    }
  };

  function getRandomComments(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }
  const randomComments = getRandomComments(jsonData, 10);

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
                  <select
                    className="select-dropdown"
                    onChange={handleSelect}
                    name="slct"
                    id="slct"
                    defaultValue={"addToShelf"}
                  >
                    <option disabled hidden value="addToShelf">
                      Add to shelf
                    </option>
                    <option value="currentlyReading">Currently reading</option>
                    <option value="read">Read</option>
                    <option value="wantToRead">Want to read</option>
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
                  <span>&#9733;</span>
                  <small>{props.averageRating}</small>
                  <span>&nbsp;·&nbsp;</span>
                  <a>{props.ratingsCount} ratings</a>
                  <span>&nbsp;·&nbsp;</span>
                  <a>855 reviews</a>
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
          {randomComments.map((obj) => (
            <SmallComment
              key={obj.id}
              username={obj.username}
              profilePicture={obj.profilePicture}
              rate={obj.rate}
              review={obj.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookDetailedCard;
