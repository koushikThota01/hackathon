let selectedRole = '';

// Event listeners for role selection buttons
document.getElementById('student-btn').addEventListener('click', () => {
    selectedRole = 'student';
    showLoginForm();
});

document.getElementById('parent-btn').addEventListener('click', () => {
    selectedRole = 'parent';
    showLoginForm();
});

// Show login form and hide register form
function showLoginForm() {
    document.querySelector('.login-form').style.display = 'block';
    document.querySelector('.register-form').style.display = 'none';
}

// Show register form and hide login form
function showRegisterForm() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'block';
}

// Close both forms
function closeForm() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'none';
}

// Add event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    if (selectedRole === 'student') {
        // Redirect to index1.html if role is student
        window.location.href = 'index1.html';
    } else if (selectedRole === 'parent') {
        // Handle parent login (this can be adjusted as needed)
        alert('Parent login is not yet implemented.');
    } else {
        // Prompt user to select a role if none is set
        alert('Please select a role first.');
    }
});
