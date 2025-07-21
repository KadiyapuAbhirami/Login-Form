const users = [
  { username: 'admin', password: '1234' },
  { username: 'rakesh', password: '5678' },
  { username: 'john', password: 'abcd' }
];

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    const foundUser = users.find(user =>
      user.username === enteredUsername && user.password === enteredPassword
    );

    if (foundUser) {
      message.textContent = `Welcome, ${foundUser.username}!`;
      message.style.color = 'green';
    } else {
      message.textContent = 'Invalid credentials!';
      message.style.color = 'red';
    }
  });
});