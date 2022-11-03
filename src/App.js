import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegisterForm from "./pages/registerPage/RegisterForm";
import { useState, useEffect } from "react";
import LoginForm from "./pages/loginPage/LoginForm";
import Navigation from "./Components/Navigation/Navigation";
import "./Components/list-group-home.scss";
import "./Components/login-register.scss";
import "./Components/WriteAReview.scss";
import MyBooksPage from "./pages/myBooksPage/MyBooksPage";
import HomePage from "./pages/homePage/home";
import ProfilePage from "./pages/profilePage/ProfilePage";
import WriteAReviewPage from "./pages/writeReviewPage/WriteAReviewPage";
import BannerComponent from "./Components/Banner/Banner";
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
            {/* НУЖНО ЛИ Е ДА ИМАМЕ ДОСТЪП ДО LOGIN И REGISTER СЛЕД КАТО СМЕ LOG-НАТИ*/}
            {/* <Route path="register" element={<RegisterForm />} />
            <Route
              path="login"
              element={<LoginForm successLogin={handleSuccessLogin} />}
            /> */}
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
