// auth.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
  
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = loginForm.querySelector('input[name="username"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;
  
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
  
        if (username === storedUsername && password === storedPassword) {
          window.location.href = 'game.html';
        } else {
          alert('Invalid username or password');
        }
      });
    }
  
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = signupForm.querySelector('input[name="username"]').value;
        const newEmail = signupForm.querySelector('input[name="email"]').value;
        const newPassword = signupForm.querySelector('input[name="password"]').value;
  
        localStorage.setItem('username', newUsername);
        localStorage.setItem('email', newEmail);
        localStorage.setItem('password', newPassword);
  
        alert('Signup successful! Please login.');
        window.location.href = 'login.html';
      });
    }
  });
  