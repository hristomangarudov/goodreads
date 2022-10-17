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
import SmallComment from "./Components/SmallComment";
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
                    <div className="cards-container">
                      <BookCard />
                      <BookCard />
                      <BookCard />
                      <BookCard />
                      <BookCard />
                      <BookCard />
                      <BookCard />
                      <BookCard />
                      <BookCard />
                      <BookCard />
                      <BookCard />
                      <BookCard />
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
            <Route path="categories" element={<div>Categories</div>} />
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
                  <BookDetailedCard picture={'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470082995l/29056083._SY475_.jpg'}/>
                  <br/>
                  <br/>
                  <br/>
                  <div>
                  <p className="smallComentTitle">COMMUNITY REVIEWS</p>
                    <SmallComment picture={'https://jenite.bg/pictures/1542216_480_.png'}/>
                    <SmallComment picture={'https://www.obekti.bg/sites/default/files/styles/article_gallery/public/images/shutterstock_125157233.jpg?itok=ro-c05c1'}/>
                    <SmallComment picture={'https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gallery/shutterstock_339451460.jpg?itok=gJWH6dJC'}/>
                    <SmallComment picture={'https://img.cms.bweb.bg/media/images/gallery/Oct2014/2110250466.webp'}/>
                    <SmallComment picture={'https://www.obekti.bg/sites/default/files/styles/article_gallery/public/gallery/shutterstock_220755979.jpg?itok=ZbpDDqT-'}/>
                  </div>
                </>
              }
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
