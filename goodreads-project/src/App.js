import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegisterForm from "./pages/registerPage/RegisterForm";
import * as Constants from "./constants.js";
import { useState } from "react";
import LoginForm from "./pages/loginPage/LoginForm";
import Navigation from "./Components/Navigation/Navigation";
import "./Components/list-group-home.scss";
import "./Components/login-register.scss";
import "./Components/WriteAReview.scss";
import MyBooksPage from "./pages/myBooksPage/MyBooksPage";
import HomePage from "./pages/homePage/home";
import ProfilePage from "./pages/profilePage/ProfilePage";
import BookDetailedPage from "./pages/bookDetailedPage/BookDetailedPage";
import WriteAReviewPage from "./pages/writeReviewPage/WriteAReviewPage";
import ChallengesPage from "./pages/challengesPage/ChallengesPage";
import BannerComponent from "./Components/Banner/Banner";
import AuthorInfo from "./Components/AuthorInfo/AuthorInfo";

function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem(Constants.USER_LIST_KEY)) || []
  );
  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem(Constants.ACTIVE_USER_KEY)) || null
  );

  const updateUsers = (newUser) => {
    setUsers(users.push(newUser));
    localStorage.setItem(Constants.USER_LIST_KEY, JSON.stringify(users));
  };

  const updateActive = (user) => {
    localStorage.setItem(Constants.ACTIVE_USER_KEY, JSON.stringify(user));
    setActiveUser(user);
  };

  const isLogged = activeUser;

  return (
    <BrowserRouter>
      {isLogged ? (
        <>
          <BannerComponent />
          <Navigation />
          <Routes>
            <Route path="*" element={<div>Page Not Found</div>} />
            <Route
              path="register"
              element={<RegisterForm users={users} updateUsers={updateUsers} />}
            />
            <Route
              path="login"
              element={<LoginForm users={users} updateActive={updateActive} />}
            />
            <Route path="home" element={<HomePage />} />
            <Route path="mybooks" element={<MyBooksPage />} />
            <Route path="challenges" element={<ChallengesPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="detailed-info" element={<BookDetailedPage />} />
            <Route path="author-info" element={<AuthorInfo />} />

            <Route
              path="/detailed-info/write-review"
              element={<WriteAReviewPage />}
            />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route
              path="register"
              element={<RegisterForm users={users} updateUsers={updateUsers} />}
            />
            <Route
              path="login"
              element={<LoginForm users={users} updateActive={updateActive} />}
            />
            <Route path="*" element={<Navigate to="/register" replace />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
