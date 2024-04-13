document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var userId = document.getElementById('userId').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');
    localStorage.setItem('userId',userId)

    // Reset error message and hide it
    errorMessage.innerHTML = "";
    errorMessage.style.display = "none";

    // Check if user id and password are not empty
    if (userId.trim() === "" || password.trim() === "") {
        errorMessage.innerHTML = "User ID and Password are required";
        errorMessage.style.display = "block"; // Show the error message
        return;
    }

    // Check user id format (only numeric value not more than 5 digits)
    if (!(/^\d{1,5}$/.test(userId))) {
        errorMessage.innerHTML = "ID not valid";
        errorMessage.style.display = "block"; // Show the error message
        return;
    }

    // Check password length
    if (password.length < 6 || password.length > 30) {
        errorMessage.innerHTML = "Password length should be between 6 and 30 characters";
        errorMessage.style.display = "block"; // Show the error message
        return;
    }

    // Validate credentials (replace with actual validation logic)
    var validCredentials = {
        "12345": "password1",
        "54321": "password2",
        "98765": "password3"
    };

    if (!(userId in validCredentials)) {
        errorMessage.innerHTML = "ID not valid";
        errorMessage.style.display = "block"; // Show the error message
        return;
    }

    if (validCredentials[userId] !== password) {
        errorMessage.innerHTML = "Password not valid";
        errorMessage.style.display = "block"; // Show the error message
        return;
    }

    // Redirect to homepage
    window.location.href = "cusportal.html"; // Replace with actual homepage URL
});
