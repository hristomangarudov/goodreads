export function getAllUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

export function registerUser(username, password) {
    let users = getAllUsers();
    const isUserTaken = users.find(user => user.username === username);
    if (isUserTaken) {
        return false;
    }
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

export function loginUser(username, password) {
    let users = getAllUsers();
    const user = users.find(
        user => user.username === username && user.password === password
    );

    if (user) {
        localStorage.setItem('activeUser', JSON.stringify(user));
    }

    return user;
}

export function getActiveUser() {   

    return JSON.parse(localStorage.getItem('activeUser'));
}