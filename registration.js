// Variable to track if the user is registered
var isRegistered = false;

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var confirmpassword=document.getElementById('confirmpassword').value;
    var email = document.getElementById('email').value;
    var mobileno = document.getElementById('mobileno').value;
    var aadhaar = document.getElementById('aadhaar').value;
    var acknowledgment = document.getElementById('acknowledgment');
    // Generate a 5-digit user ID
    var userId = Math.floor(10000 + Math.random() * 90000);
    
    // Display success message with user ID
    // acknowledgment.style.color = 'green';
    // acknowledgment.textContent = 'Passenger Registration is successful.';
    // acknowledgment.textContent += '\nYou can Login Now.';
    // acknowledgment.textContent += '\nUser is successfully registered with user ID: ' + userId;

    // // Set registration status to true
    isRegistered = true;
    var acknowledgment = "Passenger Registration is successful.<br>";
    acknowledgment += "User ID: " + userId + "<br>";
    acknowledgment += "Password: " + password + "<br>";
    acknowledgment+= "You can now proceed to login.";
    
    document.getElementById('acknowledgment').innerHTML = acknowledgment;
    var modal=document.getElementById('modal');
    var okbtn=document.getElementById('okbtn');
    modal.style.display="block";

    okbtn.onclick=function(){
        modal.style.display="none";
        window.location.href = "userlogin.html";}
    
    });
    window.onclick=function(event){
        var modal=document.getElementById("modal");
        if(event.target==modal){
            modal.style.display="none";

        }
    }
function moveImage() {
    var image = document.getElementById('movingImage');
    // Move the image 100px down and 100px right
    image.style.transform = 'translate(1500px, 0px)';
  }
  