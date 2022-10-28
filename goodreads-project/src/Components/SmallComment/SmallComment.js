import "./SmallComment.scss";

function SmallComment() {
  return (
    <div className="smallComment-container">
      <div className="smallComment-wrapper">
        <div className="smallComment-img">
          <img
            src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt="..."
          />
        </div>
        <div className="smallComment-body-wrapper">
          <div className="smallComment-body">
            <div>
              <p className="smallComment-title">
                <a className="username-review" href="">Clay</a>
                <span style={{ marginLeft: "5px" }}>rated it</span>
                <span> &#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </p>
              <h6 className="smallComment-title">
                Special thanks to NetGalley and the publisher for a free,
                electronic copy of this novel received in exchange for an honest
                review.
              </h6>
            </div>
            <br />

            <p className="smallComment-plot">
              A Sign of Affection is a shojo manga that follows college student
              Yuki who is deaf. While on the train she meets fellow student
              Itsuomi who she seemingly grows an attraction towards. Yuki is one
              of the most charming and sweet characters that I've read in a
              manga. There is this shyness about her, but also a level of
              boldness that I enjoyed.
            </p>

            <div className="detailedCard-ratings">
              <a href="">46 likes</a>
              <span>&nbsp;·&nbsp;</span>
              <button className="detailedCard-likeBtn">Like</button>
              <span>&nbsp;·&nbsp;</span>
              <a href="">comment</a>
              <span>&nbsp;·&nbsp;</span>
              <a href="">see review</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallComment;
