// var selectedRow = null
//     const value = localStorage.getItem('origin');
//     document.getElementById('boardingstation').textContent = value;
//     const des = localStorage.getItem('destination');
//     document.getElementById('destinationStation').textContent = des;
//     const dat = localStorage.getItem('date');
//     document.getElementById('date').textContent = dat;
//     // const name = localStorage.getItem('uname');
//     // document.getElementById('uname').textContent = name;
//     // const ticketid = localStorage.getItem('ticketid');
//     // document.getElementById('ticketid').textContent = ticketid;
//     // const trainid = localStorage.getItem('trainid');
//     // document.getElementById('trainid').textContent = trainid;
//     // const userid = localStorage.getItem('userid');
//     // document.getElementById('userid').textContent = userid;
//     // const numTickets = localStorage.getItem('numTickets');
//     // document.getElementById('numTickets').textContent = numTickets;

// function onFormSubmit() {
//     if (true) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//         // else
//         //     updateRecord(formData);
//         resetForm();
//     }
// }   
    
    

// function readFormData() {
//     var formData = {};
//     // formData["TicketID"] = document.getElementById("TicketID").value;
//     formData["name"] = document.getElementById("name").value;
//     formData["mobile"] = document.getElementById("mobile").value;
//     formData["age"] = document.getElementById("age").value;
//     formData["date"] = dat;
//     formData["boardingStation"] = value;
//     formData["destinationStation"] = des;
//     formData["ticketCategory"] = document.getElementById("ticketCategory").value;
//     formData["trainsAvailable"] = document.getElementById("trainsAvailable").value;
//     formData["numTickets"] = document.getElementById("numTickets").value;
 
            
//             // localStorage.setItem('name', formData["uname"]);
//             // localStorage.setItem('mobile',formData["mobile"])
//             // localStorage.setItem('age',formData["age"]);
//             // localStorage.setItem('ticketCategory', formData["ticketCategory"] );
//             // localStorage.setItem('trainsAvailable',formData["trainsAvailable"])
//             // localStorage.setItem('numTickets',formData["numTickets"]);
//     return formData;
// }
// function insertNewRecord(data) {
//     var table = document.getElementById("viewTicketTable").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = TicketID();
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML =TrainID();
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = userID();
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.name;
//     cell5 = newRow.insertCell(4);
//     cell5.innerHTML = data.boardingStation;
//     cell6 = newRow.insertCell(5);
//     cell6.innerHTML = data.destinationStation;
//     cell7 = newRow.insertCell(6);
//     cell7.innerHTML = data.date;
//     cell8 = newRow.insertCell(7);
//     cell8.innerHTML = data.date;
//     cell9 = newRow.insertCell(8);
//     cell9.innerHTML = data.numTickets;
//     cell10 = newRow.insertCell(9);
//     // cell10.innerHTML = data.;

//     cell10.innerHTML = '<a onClick="onCancel(this)">Cancel</a>';
// }




// function resetForm() {
//     document.getElementById("name").value= "";
//     document.getElementById("mobile").value= "";
//     document.getElementById("age").value= "";
//     document.getElementById("date").value= "";
//     document.getElementById("boardingStation").value= "";
//     document.getElementById("destinationStation").value= "";
//     document.getElementById("ticketCategory").value= "";
//     document.getElementById("trainsAvailable").value= "";
//     document.getElementById("numTickets").value= "";
//     selectedRow = null;
// }

// function onFormUpdate() {
//     if (true) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//         // else
//         //     updateRecord(formData);
//         resetForm();
//     }
// }

// function onCancel(td) {
//     if (confirm('Are you sure to Cancel Ticket ?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("viewTicketTable").deleteRow(row.rowIndex);
//         resetForm();
        
//         var deleteMessage = document.getElementById('deleteMessage');
//         setTimeout(function() {
//             // Show the success message
//             deleteMessage.classList.remove('hide');
//             // Reset the form
            
//             setTimeout(function() {
//                 deleteMessage.classList.add('hide');
//             }, 6000);
//         }, 1000); // Simulating insertion delay with 1 second
       
//     }
// }
// function validate() {
//     isValid = true;
//     if (document.getElementById("name").value == "") {
//         isValid = false;
//         document.getElementById("fullNameValidationError").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
//             document.getElementById("fullNameValidationError").classList.add("hide");
//     }
//     return isValid;
        
// }

//     // function displayUsername() {
//     //     // Retrieve the username from session storage
//     //     var username = sessionStorage.getItem('userId');
    
//     //     if (username) {
//     //         // If username is available, display it
//     //         document.getElementById('user-info').innerHTML = '<p>' + username + '</p>';
//     //         console.log(username)
//     //     } else {
//     //         // If username is not available, redirect to login page
//     //         window.location.href = "login.html";
//     //     }
//     // }
    
//     // Function to logout the user
//     // function logout() {
//     //     window.location.href = "index.html"; // Replace with your logout page URL
//     // }
var selectedRow = null
  const value = localStorage.getItem('origin');
  document.getElementById('boardingstation').textContent = value;
  const des = localStorage.getItem('destination');
  document.getElementById('destinationStation').textContent = des;
  const dat = localStorage.getItem('date');
  document.getElementById('date').textContent = dat;

function onFormSubmit() {
    if (true) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        // else
        //     updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    // formData["TicketID"] = document.getElementById("TicketID").value;
    formData["name"] = document.getElementById("name").value;
    formData["mobile"] = document.getElementById("mobile").value;
    formData["age"] = document.getElementById("age").value;
    formData["date"] = dat;
    formData["boardingStation"] = value;
    formData["destinationStation"] = des;
    formData["ticketCategory"] = document.getElementById("ticketCategory").value;
    formData["trainsAvailable"] = document.getElementById("trainsAvailable").value;
    formData["numTickets"] = document.getElementById("numTickets").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("viewTicketTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = TicketID();
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = TrainID();
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = userID();
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.name;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.boardingStation;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.destinationStation;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.date;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.date;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.numTickets;
    cell10 = newRow.insertCell(9);
    // cell10.innerHTML = data.;

    cell10.innerHTML = '<a onClick="onCancel(this)">Cancel</a>';
}

function resetForm() {
    document.getElementById("name").value= "";
    document.getElementById("mobile").value= "";
    document.getElementById("age").value= "";
    document.getElementById("date").value= "";
    document.getElementById("boardingStation").value= "";
    document.getElementById("destinationStation").value= "";
    document.getElementById("ticketCategory").value= "";
    document.getElementById("trainsAvailable").value= "";
    document.getElementById("numTickets").value= "";
    selectedRow = null;
}

function onFormUpdate() {
    if (true) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        // else
        //     updateRecord(formData);
        resetForm();
    }
}

function onCancel(td) {
    if (confirm('Are you sure to Cancel Ticket ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("viewTicketTable").deleteRow(row.rowIndex);
        resetForm();
        
        var deleteMessage = document.getElementById('deleteMessage');
        setTimeout(function() {
            // Show the success message
            deleteMessage.classList.remove('hide');
            // Reset the form
            
            setTimeout(function() {
                deleteMessage.classList.add('hide');
            }, 6000);
        }, 1000); // Simulating insertion delay with 1 second
       
    }
}

    
