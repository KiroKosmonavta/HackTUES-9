const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  if (username === 'hacktues' && password === 'hacktues123456') {
    alert('Login successful!');
  } else {
    alert('Invalid username or password!');
  }
});