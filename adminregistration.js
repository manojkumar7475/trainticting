document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // var firstName = document.getElementById('firstName').value;
    var adminname = document.getElementById('adminname').value;
    var adminpassword=document.getElementById('adminpassword').value;
    var adminconfirmpassword=document.getElementById('adminconfirmpassword').value;
    var email = document.getElementById('email').value;
    var mobileno = document.getElementById('mobileno').value;
    var aadhaar = document.getElementById('aadhaar').value;
    
    var acknowledgment = document.getElementById('acknowledgment');
    var adminId = Math.floor(10000 + Math.random() * 90000);
    var acknowledgment = "Passenger Registration is successful.<br>";
    acknowledgment += "User ID: " + adminId + "<br>";
    acknowledgment += "Password: " + adminpassword + "<br>";
    acknowledgment+= "You can now proceed to login.";
    
    document.getElementById('acknowledgment').innerHTML = acknowledgment;
    var modal=document.getElementById('modal');
    var okbtn=document.getElementById('okbtn');
    modal.style.display="block";

    okbtn.onclick=function(){
        modal.style.display="none";
    window.location.href = "adminlogin.html";}
    
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
        image.style.transform = 'translate(100px, 0px)';
      }
      