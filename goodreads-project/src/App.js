import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm";
import * as Constants from "./constants.js";
import { useState } from "react";
import LoginForm from "./Components/LoginForm";

function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem(Constants.USER_LIST_KEY)) || []
  );
  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem(Constants.ACTIVE_USER_KEY)) || null
  );

  const updateUsers = (newUser)=>{
    setUsers(users.push(newUser));
    localStorage.setItem(Constants.USER_LIST_KEY, JSON.stringify(users));
  }
  
  const updateActive= (user)=>{
    localStorage.setItem(
      Constants.ACTIVE_USER_KEY,
      JSON.stringify(user)
    );
    setActiveUser(user);
    console.log(activeUser)
  };
  return (
    <BrowserRouter>
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
          element={<div>Home</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
