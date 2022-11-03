import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SmallBookCard.scss";

function SmallBookCard(props) {
  const editProfile = useSelector((state) => state.editProfile);
  return (
    <div className="smallBook-wrapper">
      <div className="smallBook-container">
        <div>
          <p className="username-review-small" to="/profile">
            {editProfile.profileUsername} has read
          </p>
        </div>
        <div className="smallBook-body-wrapper">
          <Link to={`/detailed-info/${props.id}`}>
            <img className="small-card-image" src={props.picture} />
          </Link>
          <div className="smallBook-text">
            <Link className="h5-container" to={`/detailed-info/${props.id}`}>
              <h5>{props.title}</h5>
            </Link>
            <span>by {props.author[0]}</span>
            <span>
              bookshelves: <Link to="/mybooks/read-books">read</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallBookCard;
