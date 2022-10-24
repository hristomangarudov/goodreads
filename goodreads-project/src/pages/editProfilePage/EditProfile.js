import "./EditProfile.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeProfilePicture,
  changeUserData,
} from "../../store/editProfileSlice";


function EditProfile() {
  const navigate = useNavigate();
  const goToProfilePage = () => {
    navigate("/profile");
  };
  const editProfile = useSelector((state) => state.editProfile);
  const dispatch = useDispatch();

  const [profileImg, setFile] = useState(editProfile.profileImg);
  const [username, setUsername] = useState(editProfile.username);
  const [age, setAge] = useState(editProfile.age);
  const [gender, setGender] = useState(editProfile.gender);
  const [country, setCountry] = useState(editProfile.country);
  const [profession, setProfession] = useState(editProfile.profession);

  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const updtateProfileData = () => {
    dispatch(changeUserData({ username, age, gender, country, profession }));
    dispatch(changeProfilePicture({ profileImg }));
    navigate("/profile");
  };

  return (
    <div className="container-wrapper">
      <div className="container-xl px-4 mt-4">
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                <img className="profile-upload-img" src={profileImg} alt="" />

                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                <div>
                  <label className="btn btn-primary edit-btn">
                    Upload Photo
                    <input
                      className="img-upload"
                      type="file"
                      onChange={fileSelectedHandler}
                    ></input>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="small mb-1">
                      Username (how your name will appear to other users on the
                      site)
                    </label>
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1">Age</label>
                      <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="form-control"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        placeholder="Enter your birthday"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Gender</label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="form-control"
                        name="gender"
                        id="gender"
                      >
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1">Profession</label>
                      <input
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        className="form-control"
                        id="inputProfession"
                        type="text"
                        name="profession"
                        placeholder="Enter your profession"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Country</label>
                      <input
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="form-control"
                        id="inputCountry"
                        type="text"
                        name="country"
                        placeholder="Enter your country"
                      />
                    </div>
                  </div>

                  <div className="buttons">
                    <button
                      className="btn btn-primary edit-btn"
                      type="button"
                      onClick={goToProfilePage}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn btn-primary edit-btn"
                      type="button"
                      onClick={updtateProfileData}
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;
