import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import ReactLogo from "../newLogo.svg";
import "./Navigation.scss";
import "./DropdownMenu.scss";

import { useSelector } from "react-redux";
import ConfirmLogout from "../ConfirmLogout/ConfirmLogout";


export default function Navigation() {
  const editProfile = useSelector((state) => state.editProfile);

  const navigate = useNavigate();
  // const logOut = () => {
  //   localStorage.removeItem("activeUser");

  // };
  
  
  const goToProfile = () =>{
    navigate('/profile')
  };
  const goToEdit = () =>{
    navigate('/edit-profile')
  };

  return (
    <div className="nav-wrapper sticky-top">
      <nav className="navbar navbar-expand-lg bg-light nav-container padding-ref">
        <div className="container-fluid">
          <div style={{ width: "150px" }}>
              <Link className="navbar-brand" to="/home">
                <img src={ReactLogo} />
              </Link>
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
                <Link className="nav-link active" to="/mybooks/read-books">
                  My Books
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" to="/challenges">
                  Challenges
                </Link>
              </li> */}
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link className="nav-link active" to="/detailed-info/">
                  Detailed Book Info
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/detailed-info/write-review"
                >
                  Write Review
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <Dropdown bsPrefix="dropdown">
              <Dropdown.Toggle
                bsPrefix="dropdown-toggle"
                variant="success"
                id="dropdown-basic"
              >
                <img src={editProfile.profileImg}></img>
              </Dropdown.Toggle>

              <Dropdown.Menu bsPrefix="dropdown-menu">
                <strong>{editProfile.profileUsername}</strong>
                <Dropdown.Item bsPrefix="dropdown-item underline-items" onClick={goToProfile}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item bsPrefix="dropdown-item underline-items"  onClick={goToEdit}>
                  Profile settings
                </Dropdown.Item>
                <Dropdown.Item
                  bsPrefix="dropdown-item underline-items"
                  // onClick={(e) =>{
                  //   return <ConfirmLogout></ConfirmLogout>
                  // }}
                  // href='/login'
                >
                  Log out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
    </div>
  );
}
