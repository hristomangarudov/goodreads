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
  profileImg = "http://bootdey.com/img/Content/avatar/avatar1.png"
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

export function makeInitApiCall() {
  return fetch(
    "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&startIndex=0&maxResults=8&printType=books"
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}
