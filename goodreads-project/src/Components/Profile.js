import "../Profile.css";

function Profile(props) {
  return (
    <div className="profile-main-wrapper">
      <div className="profile-wrapper">
        <div className="profile-img">
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651426717i/60784641._SX300_.jpg"
          ></img>
          <a>1 rating (4.00 avg)</a>
          <a>0 reviews</a>
        </div>
        <div className="profile-data">
          <div className="profile-name">
            <h4>Evlogi Georgiev</h4>
            <a>(edit profile)</a>
          </div>
          <div className="profile-details">
            <strong>Details:</strong>
            <p>Sofia,22</p>
          </div>
        </div>
      </div>
      <div className="bookshelf-wrapper">
            <div className="bookshelf-user">Evlogi Bookshelf</div>
            <div className="bookshelf-links">
                <a>read(3)</a>
                <a>currently-reading</a>
                <a>to-read(2)</a>
                <a>More...</a>

            </div>
            
      </div>
    </div>
  );
}

export default Profile;
