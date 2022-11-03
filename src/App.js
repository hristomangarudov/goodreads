import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegisterForm from "./pages/registerPage/RegisterForm";
import { useState} from "react";
import LoginForm from "./pages/loginPage/LoginForm";
import Navigation from "./components/Navigation/Navigation";
import "./components/list-group-home.scss";
import "./components/login-register.scss";
import "./components/WriteAReview.scss";
import MyBooksPage from "./pages/myBooksPage/MyBooksPage";
import HomePage from "./pages/homePage/home";
import ProfilePage from "./pages/profilePage/ProfilePage";
import WriteAReviewPage from "./pages/writeReviewPage/WriteAReviewPage";
import BannerComponent from "./components/Banner/Banner";
import EditProfilePage from "./pages/editProfilePage/EditProfile";
import { getActiveUser } from "./server/users";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import BookDetailedPage from "./pages/bookDetailedPage/BookDetailedPage";
function App() {
  const [isLogged, setIsLogged] = useState(getActiveUser());
  const handleSuccessLogin = () => {
    setIsLogged(getActiveUser());
  };

  return (
    <BrowserRouter>
      {isLogged ? (
        <>
          <BannerComponent />
          <Navigation />
          <Routes>
            <Route path="*" element={<div>Page Not Found</div>} />
            <Route path="home" element={<HomePage />} />
            <Route path="mybooks/:shelf" element={<MyBooksPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="detailed-info/:id" element={<BookDetailedPage />} />
            <Route path="edit-profile" element={<EditProfilePage />} />
            <Route path="dropdown-menu" element={<DropdownMenu />} />
            <Route
              path="/detailed-info/write-review/:id"
              element={<WriteAReviewPage />}
            />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="register" element={<RegisterForm />} />
            <Route
              path="login"
              element={<LoginForm successLogin={handleSuccessLogin} />}
            />
            <Route path="*" element={<Navigate to="/register" replace />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
