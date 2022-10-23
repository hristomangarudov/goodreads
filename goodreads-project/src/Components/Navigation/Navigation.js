import { Link } from "react-router-dom";
import ReactLogo from "../newLogo.svg";
import "./Navigation.scss";
export default function Navigation() {
  return (
    <div className="nav-wrapper sticky-top">
      <nav className="navbar navbar-expand-lg bg-light nav-container padding-ref">
        <div className="container-fluid">
          <div style={{ width: "150px" }}>
            <a className="navbar-brand" href="#">
              <img src={ReactLogo} />
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/mybooks">
                  My Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/challenges">
                  Challenges
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link className="nav-link active" to="/detailed-info">
                  Detailed Book Info
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/detailed-info/write-review"
                >
                  Write Review
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link className="nav-link active nav" to="/profile">
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}