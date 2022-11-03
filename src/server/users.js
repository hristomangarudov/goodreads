export function getAllUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

export function getAllGlobalRatedBooks() {
  return JSON.parse(localStorage.getItem("globalRatedBooks")) || [];
}
export function registerUser(
  username,
  password,
  profileUsername = "",
  age = "",
  gender = "",
  country = "",
  profession = "",
  profileImg = "http://bootdey.com/img/Content/avatar/avatar1.png",
  bookshelf = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  },
  ratedBooks = []

) {
  let users = getAllUsers();
  const isUserTaken = users.find((user) => user.username === username);
  if (isUserTaken) {
    return false;
  }
  users.push({
    username,
    password,
    profileUsername,
    age,
    gender,
    country,
    profession,
    profileImg,
    bookshelf,
    ratedBooks
  });
  localStorage.setItem("users", JSON.stringify(users));
  return true;
}

export function loginUser(username, password) {
  let users = getAllUsers();
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    localStorage.setItem("activeUser", JSON.stringify(user));
  }

  return user;
}

export function getActiveUser() {
  return JSON.parse(localStorage.getItem("activeUser"));
}

export function setNewUserData(
  username,
  password,
  profileUsername,
  age,
  gender,
  country,
  profession,
  profileImg,

) {

  let active = getActiveUser();
  let newUserInfo = {
    username,
    password,
    profileUsername,
    age,
    gender,
    country,
    profession,
    profileImg,
    bookshelf: active.bookshelf,
  };
  localStorage.setItem("activeUser", JSON.stringify(newUserInfo));

  let users = JSON.parse(localStorage.getItem("users"));
  let neededUserIndex = users.findIndex(
    (obj) => obj.username === active.username
  );
  users.splice(neededUserIndex, 1);
  users.push(newUserInfo);

  localStorage.setItem("users", JSON.stringify(users));
}

export function updateUsers(activeUser){
  let users = JSON.parse(localStorage.getItem("users"));
  let neededUserIndex = users.findIndex(
    (obj) => obj.username === activeUser.username
  );
  users.splice(neededUserIndex, 1);
  users.push(activeUser);

  localStorage.setItem("users", JSON.stringify(users));
}