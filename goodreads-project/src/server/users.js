
export function getAllUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// export function registerUser(username, password) {
//     let users = getAllUsers();
//     const isUserTaken = users.find(user => user.username === username);
//     if (isUserTaken) {
//         return false;
//     }
//     users.push({ username, password });
//     localStorage.setItem('users', JSON.stringify(users));
//     return true;
// }

export function registerUser(
  username,
  password,
  profileUsername = `User-${Math.floor( Math.random()*10000)}`,
  age = "",
  gender = "",
  country = "",
  profession = "",
  profileImg = "http://bootdey.com/img/Content/avatar/avatar1.png",
  bookshelf = {
    currentlyReading: ["zyTCAlFPjgYC","3Hr5ONX-2G8C","gHcEDAAAQBAJ"],
    wantToRead:["DaUqAQAAIAAJ"],
    read:["NtvWPAAACAAJ"]
  }
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
    bookshelf
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

