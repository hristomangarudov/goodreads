import { useSelector } from "react-redux";
import "./SmallBookCard.scss";

function SmallBookCard(props) {
  const editProfile = useSelector((state) => state.editProfile);
  return (
    <div className="smallBook-wrapper">
      <div className="smallBook-container">
        <div className="smallBook-body-wrapper">
          <img src={props.picture} alt="..." />
          <div className="smallBook-text">
            <span>
              <a className="username-review" href="">
                {editProfile.profileUsername}
              </a>
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
      </div>
    </div>
  );
}

export default SmallBookCard;
