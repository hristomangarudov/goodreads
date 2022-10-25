import "./Profile.scss";
import SmallBookCard from "../SmallBookCard/SmallBookCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const editProfile = useSelector((state) => state.editProfile);
  const navigate = useNavigate()
  const toEdit = () => {
    navigate("/edit-profile")
  }


  return (
    <div className="profile-main-wrapper">
      <div className="profile-wrapper">
        <div className="profile-img">
          <img src={editProfile.profileImg}></img>
        </div>
        <div className="profile-data">
          <div className="profile-name">
            <h4>{editProfile.username}</h4>
            <a className="edit-profile-a" onClick={toEdit}>(edit profile)</a>
          </div>
          <div className="profile-details">
            <span>
              <strong>Age:</strong> {editProfile.age}
            </span>
            <span>
              <strong>Gender:</strong> {editProfile.gender}
            </span>
            <span>
              <strong>Country:</strong> {editProfile.country}
            </span>
            <span>
              <strong>Profession:</strong> {editProfile.profession}
            </span>
          </div>
        </div>
      </div>
      <div className="bookshelf-wrapper">
        <div className="bookshelf-user">
          <h6 className="profile-h6"> EVLOGI BOOKSHELF</h6>
        </div>
        <div className="bookshelf-links">
          <a href="">read(3)</a>
          <a href="">currently reading(1)</a>
          <a href="">to-read(2)</a>
        </div>
      </div>
      <div className="currently-reading-wrapper">
        <div className="currently-reading-user">
          <h6 className="profile-h6">EVLOGI IS CURRENTLY READING</h6>
        </div>
        <div className="currently-reading-books">
          {
            <>
              <SmallBookCard
                picture={"https://m.media-amazon.com/images/I/51V6zvaRjkL.jpg"}
              />
              <SmallBookCard
                picture={
                  "https://play-lh.googleusercontent.com/0eX9LmXp1-wpNNrPmqsbnZxvFm6IJWC0z-o3MGmbFEDQPKhpYP0p2saxLYL9qGlisK0w"
                }
              />
              <SmallBookCard
                picture={
                  "https://rfbd.hs.llnwd.net/siteContent/bkimages/detail/KM765.jpg"
                }
              />
            </>
          }
        </div>
      </div>
      <div className="recent-updates-wrapper">
        <div className="recent-updates-user">
          <h6 className="profile-h6"> EVLOGI BOOKSHELF</h6>
        </div>
        <div className="recent-updates-books">
          {
            <>
              <SmallBookCard
                picture={
                  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470082995l/29056083._SY475_.jpg"
                }
              />
              <SmallBookCard
                picture={
                  "https://images.booksense.com/images/427/791/9780545791427.jpg"
                }
              />
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default Profile;
