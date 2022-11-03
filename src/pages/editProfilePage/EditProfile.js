import "./EditProfile.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeProfilePicture,
  changeUserData,
} from "../../store/editProfileSlice";
import {
  getActiveUser,
  getAllGlobalRatedBooks,
  getAllUsers,
  setNewUserData,
} from "../../server/users";

function EditProfile() {
  const navigate = useNavigate();
  const goToProfilePage = () => {
    navigate("/profile");
  };
  const editProfile = useSelector((state) => state.editProfile);
  const dispatch = useDispatch();

  const [profileImg, setProfileImg] = useState(editProfile.profileImg);
  const [profileUsername, setProfileUsername] = useState(
    editProfile.profileUsername
  );
  const [age, setAge] = useState(editProfile.age);
  const [gender, setGender] = useState(editProfile.gender);
  const [country, setCountry] = useState(editProfile.country);
  const [profession, setProfession] = useState(editProfile.profession);
  const [imgSize, setImgSize] = useState(true)
  const [editBtnDisabled, setEditBtn] = useState(false)

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const fileSize = file.size / 1024;
    if (fileSize < 2048) {
      const base64 = await convertBase64(file);
      setProfileImg(base64);
      setImgSize(true)
    } else {
      setImgSize(false)
      setEditBtn(true)
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const updtateProfileData = () => {
    dispatch(
      changeUserData({ profileUsername, age, gender, country, profession })
    );
    dispatch(changeProfilePicture({ profileImg }));
    let active = getActiveUser();
    let newUserInfo = {
      username: active.username,
      password: active.password,
      profileUsername,
      age,
      gender,
      country,
      profession,
      profileImg,
      bookshelf: active.bookshelf,
      ratedBooks: active.ratedBooks,
    };
    localStorage.setItem("activeUser", JSON.stringify(newUserInfo));

    let users = JSON.parse(localStorage.getItem("users"));
    let neededUserIndex = users.findIndex(
      (obj) => obj.username === active.username
    );
    users.splice(neededUserIndex, 1);
    users.push(newUserInfo);

    localStorage.setItem("users", JSON.stringify(users));

    let allRatedBooks = getAllGlobalRatedBooks();
    allRatedBooks.forEach((book) => {
      let usersReviews = book.usersReviews;
      usersReviews.forEach((user) => {
        if (user.distinctName === active.username) {
          let userIndex = usersReviews.findIndex(
            (user) => user.distinctName === active.username
          );
          let newUserComment = {
            distinctName: user.distinctName,
            picture: user.picture,
            rating: user.rating,
            review: user.review,
            username: profileUsername,
          };
          usersReviews.splice(userIndex, 1, newUserComment);

          let neededBookIndex = allRatedBooks.indexOf(book);
          book.usersReviews = usersReviews;
          allRatedBooks.splice(neededBookIndex, 1, book);

          localStorage.setItem(
            "globalRatedBooks",
            JSON.stringify(allRatedBooks)
          );
        }
      });
    });

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
                  JPG or PNG no larger than 2 MB
                </div>
                <div>
                  <label className="btn btn-primary edit-btn">
                    Upload Photo
                    <input
                      className="img-upload"
                      type="file"
                      accept="image/jpg, image/png"
                      onChange={(e) => {
                        uploadImage(e);
                      }}
                    ></input>
                  </label>
                </div>
                <span style={{visibility: imgSize ? "hidden" : "visible", color: 'red'}}>The file is too large</span>
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
                      value={profileUsername}
                      onChange={(e) => setProfileUsername(e.target.value)}
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
                      disabled={editBtnDisabled}
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
