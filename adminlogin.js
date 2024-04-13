document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var AdminId = document.getElementById('AdminId').value;
    var adminpassword = document.getElementById('adminpassword').value;
    var errorMessage = document.getElementById('errorMessage');

    // Reset error message and hide it
    errorMessage.innerHTML = "";
    errorMessage.style.display = "none";

    // Check if user id and password are not empty
    if (AdminId.trim() === "" || adminpassword.trim() === "") {
        errorMessage.innerHTML = "User ID and Password are required";
        errorMessage.style.display = "block"; // Show the error message
        return;
    }

    // Check user id format (only numeric value not more than 5 digits)
    if (!(/^\d{1,5}$/.test(AdminId))) {
        errorMessage.innerHTML = "ID not valid";
        errorMessage.style.display = "block"; // Show the error message
        return;
    }

    // Check password length
    if (adminpassword.length < 6 || adminpassword.length > 30) {
        errorMessage.innerHTML = "Password length should be between 6 and 30 characters";
        errorMessage.style.display = "block"; // Show the error message
        return;
    }

    // Validate credentials (replace with actual validation logic)
    var validCredentials = {
        "12345": "adminpassword1",
        "54321": "adminpassword2",
        "98765": "adminpassword3"
    };

    if (!(AdminId in validCredentials)) {
        errorMessage.innerHTML = "ID not valid";
        errorMessage.style.display = "block"; // Show the error message
        return;
    }

    if (validCredentials[AdminId] !== adminpassword) {
        errorMessage.innerHTML = "Password not valid";
        errorMessage.style.display = "block"; // Show the error message
        return;
    }

    // Redirect to homepage
    window.location.href = "adminportal.html"; // Replace with actual homepage URL
});
