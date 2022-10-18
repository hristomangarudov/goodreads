import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm";
import * as Constants from "./constants.js";
import { useState } from "react";
import LoginForm from "./Components/LoginForm";
import Navigation from "./Components/Navigation";
import BookCard from "./Components/BookCard";
import Profile from "./Components/Profile";
import BookDetailedCard from "./Components/BookDetailedCard";
import StarRating from "./Components/StarRating";
import "./Components/login-register.css";
import MyBooksTable from "./Components/MyBooksTable";
import ListGroupHome from "./Components/ListGroupHome";
import "./Components/list-group-home.css";
import "./Components/login-register.css";
import SmallComment from "./Components/SmallComment";
import WriteAReview from "./Components/WriteAReview";
import "./Components/writeareview.css";
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
            <Route
              path="home"
              element={
                <div>
                  <div className="cards-wrapper">
                    <ListGroupHome></ListGroupHome>
                    <div className="cards-container">
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                    </div>
                  </div>
                </div>
              }
            />
            <Route
              path="mybooks"
              element={
                <div className="cards-wrapper">
                  <div className="cards-container">
                    <MyBooksTable />
                  </div>
                </div>
              }
            />
            <Route
              path="categories"
              element={
                <div>
                  <div className="cards-wrapper">

                    <div className="category-container">
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                      <BookCard cardWidth="15rem" />
                    </div>
                  </div>
                </div>
              }
            />
            <Route
              path="profile"
              element={
                <div>
                  <div className="profile-wrapper">
                    <div className="profile-container">
                      <Profile />
                    </div>
                  </div>
                </div>
              }
            />
            <Route
              path="detailed-info"
              element={
                <>
                  <BookDetailedCard
                    picture={
                      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470082995l/29056083._SY475_.jpg"
                    }
                  />
                  <br />
                  <br />
                  <br />
                </>
              }
            />
            <Route
              path="/detailed-info/write-review"
              element={<WriteAReview />}
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
