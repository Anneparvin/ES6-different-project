const loadUser =()=>{
fetch('https://randomuser.me/api/?results=5000')
.then(res => res.json())
.then(data =>displayUsers(data.results))
}
const displayUsers = users =>{
    const usersContainer = document.getElementById('users-container');
for (const user of users){
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.innerHTML =
    `
    <h3>user name:${user.first}</h3>
    <p>Email:${user.email}</p>
    <p>user Location:${user.location.city}</p>
    `
    usersContainer.appendChild(userDiv);
}
}
loadUser();