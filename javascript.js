const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginBtn.addEventListener('click', () => {
	loginForm.classList.remove('hidden');
	signupForm.classList.add('hidden');
});

signupBtn.addEventListener('click', () => {
	signupForm.classList.remove('hidden');
	loginForm.classList.add('hidden');
});

loginForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	console.log(`Username: ${username}\nPassword: ${password}`);
});

signupForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const firstName = document.getElementById('first-name').value;
	const lastName = document.getElementById('last-name').value;
	const birthdate = document.getElementById('birthdate').value;
	const phoneNumber = document.getElementById('phone-number').value;
	const newUsername = document.getElementById('new-username').value;
	const newPassword = document.getElementById('new-password').value;
	console.log(`First Name: ${firstName}\nLast Name: ${lastName}\nBirthdate: ${birthdate}\nPhone Number: ${phoneNumber}\nNew Username: ${newUsername}\nNew Password: ${newPassword}`);
});