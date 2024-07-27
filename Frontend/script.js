document.addEventListener('DOMContenteLoaded', () => {
    const userList = document.getElementById('user-list');

    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users =>{
            users.forEach(user =>{
                const li = document.createElement('li');
                li.textContent = user.name;
                userList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar usuários:', error);
        });
});