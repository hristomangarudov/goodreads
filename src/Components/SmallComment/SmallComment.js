import "./SmallComment.scss";

function SmallComment(props) {
  function starsRating(rate) {
    let arr = [];
    for (let i = 0; i < rate; i++) {
      arr.push(<span>&#9733;</span>);
    }
    let stars = arr.map((x) => x.props.children).join("");
    return stars;
  }

  return (
    <div className="smallComment-container">
      <div className="smallComment-wrapper">
        <div className="smallComment-img">
          <img src={props.profilePicture} alt="..." />
        </div>
        <div className="smallComment-body-wrapper">
          <div className="smallComment-body">
            <div>
              <p className="smallComment-title">
                <span className="username-review">
                  {props.username}
                </span>
                <span style={{ marginLeft: "5px" }}>rated it </span>
                <span>{starsRating(props.rate)}</span>
              </p>
            </div>

            <p className="smallComment-plot">{props.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallComment;
