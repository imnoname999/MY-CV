document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'admin' && password === '12345') {
        
        window.location.href = 'index.html'; 
    } else {
        
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
