function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateSignUpInputCredentials(){
    username=document.getElementById("name").value;
    email=document.getElementById("email_address").value;
    password=document.getElementById("password").value;
    confirmpassword=document.getElementById("confirm_password").value;
    var nameErr = emailErr = passwordErr = confirmPasswordErr = true;

    // Validate User Name
    if(username == "") {
        printError("nameErr", "Please, Enter your User Name");
    } else {
        // Regular expression for basic User Name validation
        var regex = /^[A-Za-z ]+$/;
        if(regex.test(username) === false) {
            printError("nameErr", "Please, Enter a valid User Name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

        // Validate Email Address
        if(email == "") {
            printError("emailErr", "Please, Enter your Email Address");
        } else {
            // Regular expression for basic User Name validation
            var regex = /^\S+@\S+\.\S+$/;
            if(regex.test(email) === false) {
                printError("emailErr", "Please, Enter a valid Email Address");
            } else {
                printError("emailErr", "");
                emailErr = false;
            }
        }

        if(password == "") {
            printError("passwordErr", "Please, Enter your Password");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }

        if(confirmpassword == "") {
            printError("confirmPasswordErr", "Please, Enter your Password");
        } else {
            printError("confirmPasswordErr", "");
            ConfirmPasswordErr = false;
        }

        if((nameErr || emailErr || passwordErr || confirmPasswordErr) == true) {
            return false;
        } else {
            return true;
        }
}

function validateLoginInputCredentials(){
}