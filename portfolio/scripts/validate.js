/*
Creator: Conner Caspar
Date created: 2/1/2021
Date last modified: 
*/
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["check"].elements.length; 
        loopCounter++) {
        if (document.forms["check"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["check"].elements[loopCounter]
               .parentElement.className = "info";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["check"]["name"].focus();
}

function validateItems() {
	clearErrors(); 
	var phone = document.forms["check"]["phone"].value;
	var name = document.forms["check"]["name"].value;
	var email = document.forms["check"]["email"].value;

	if (phone == "" || name == "" || email =="") {
			alert("Please fill out all required fields."); 
	} 
	return false;
	
}