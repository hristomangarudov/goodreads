import ProgressBarWithPercent from "../../Components/ProgressBar/ProgressBar";

function ChallengesPage() {
  return (
    <div className="main-wrapper">
    <div className="general-container">
      <div className="readingChallengeBoard">
        <div className="readingChallengeContent">
          <div className="challengeUser user-img">
          <img src="http://bootdey.com/img/Content/avatar/avatar1.png"/>
          </div>
          <div className="challengeProgress">
            <h5>You have read 2 out of 3 books</h5>
          <ProgressBarWithPercent/>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}
export default ChallengesPage;
