import { useNavigate } from "react-router-dom";
import "./AuthorInfo.scss";

function AuthorInfo(props) {
  return (
    <div className="center-position">
      <div className="general-container author-white-container">
        <div className="author-wrapper ">
          <div className="author-img-container">
            <img
              src={"https://images.gr-assets.com/authors/1362814142p5/3389.jpg"}
              className="author-img"
              alt="..."
            />
          </div>
          <div className="author-container">
            <div className="author-body-wrapper">
              <div className="author-body">
                <div>
                  <h3 className="author-title">Stephen King</h3>
                </div>
                <div className="information">
                  <div className="information-1">
                    <div>Born</div>
                    <div>Website</div>
                    <div>Genre</div>
                    <div>Influences</div>
                  </div>
                  <div className="information-2">
                    <div>in Portland, Maine, The United States</div>
                    <div>
                      <a href="http://www.stephenking.com">
                        http://www.stephenking.com
                      </a>
                    </div>
                    <div>Horror, Mystery, Literature & Fiction</div>
                    <div>
                      Robert Bloch, Ray Bradbury, Charles Dickens, Shirley
                      Jackson
                    </div>
                  </div>
                </div>
                <p className="author-data">
                  Stephen Edwin King was born the second son of Donald and
                  Nellie Ruth Pillsbury King. After his father left them when
                  Stephen was two, he and his older brother, David, were raised
                  by his mother. Parts of his childhood were spent in Fort
                  Wayne, Indiana, where his father's family was at the time, and
                  in Stratford, Connecticut. When Stephen was eleven, his mother
                  brought her children back to Durham, Maine, for good. Her
                  parents, Guy and Nellie Pillsbury, had become incapacitated
                  with old age, and Ruth King was persuaded by her sisters to
                  take over the physical care of them. Other family members
                  provided a small house in Durham and financial support. After
                  Stephen's grandparents passed away, Mrs. King found work in
                  the kitchens of Pineland, a nearby residential facility for
                  the mentally challenged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AuthorInfo;
