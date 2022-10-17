import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm";
import * as Constants from "./constants.js";
import { useState } from "react";
import LoginForm from "./Components/LoginForm";
import Navigation from "./Components/Navigation";
import BookCard from "./Components/BookCard";

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
            <Route path="myBooks" element={<div>My Books</div>} />
            <Route path="categories" element={<div>Categories</div>} />
            <Route path="profile" element={<div>Profile</div>} />
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
