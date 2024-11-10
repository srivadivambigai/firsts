function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.textContent = '🙈'; // Change icon to indicate password is visible
    } else {
        passwordInput.type = 'password';
        eyeIcon.textContent = '👁️'; // Change icon back to original
    }
}

// Optional: Handle form submission
// document.getElementById('loginForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     // Add your form submission logic here
//     alert('Form submitted!🎉🎉🎉');
// });
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    // Capture input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Log the values to the console
    console.log('User Information:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    alert('Form submitted! PROCEED TO PERSONAL DETAILS PAGE 🎉');
});