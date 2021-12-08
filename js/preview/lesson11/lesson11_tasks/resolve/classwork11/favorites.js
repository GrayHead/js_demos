const favoritesKey = 'favorites';
const container = document.getElementById('container');
const users = JSON.parse(localStorage.getItem(favoritesKey));

users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.className = 'user';
    const content = document.createElement('div');
    content.innerText = `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;
    userDiv.appendChild(content);
    container.appendChild(userDiv);
})
