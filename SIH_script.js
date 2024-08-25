document.querySelector('form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password');
    
    if (confirmPassword && password !== confirmPassword.value) {
        alert('Passwords do not match!');
        event.preventDefault();
    }
});
