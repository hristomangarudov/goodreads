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
import AuthorInfoPage from "./pages/authorInfoPage/AuthorInfoPage";
import EditProfilePage from "./pages/editProfilePage/EditProfilePage";
import {getActiveUser} from "./server/users"

function App() {
  const [isLogged, setIsLogged] = useState(getActiveUser());

  const handleSuccessLogin = () => {
    setIsLogged(getActiveUser())
  }


  fetch("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&startIndex=0&maxResults=8&printType=books")
  .then(res =>{
    if(res.ok){
      return res.json()
    }
  })
  .then(data =>{
    console.log(data)
  })


  
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
              element={<RegisterForm/>}
            />
            <Route
              path="login"
              element={<LoginForm successLogin={handleSuccessLogin}/>}
            />
            <Route path="home" element={<HomePage />} />
            <Route path="mybooks" element={<MyBooksPage />} />
            <Route path="challenges" element={<ChallengesPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="detailed-info" element={<BookDetailedPage />} />
            <Route path="author-info" element={<AuthorInfoPage />} />
            <Route path="edit-profile" element={<EditProfilePage/>} />

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
              element={<RegisterForm/>}
            />
            <Route
              path="login"
              element={<LoginForm successLogin={handleSuccessLogin}/>}
            />
            <Route path="*" element={<Navigate to="/register" replace />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
