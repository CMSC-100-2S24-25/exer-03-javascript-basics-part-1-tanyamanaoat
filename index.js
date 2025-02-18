// Function to validate if the given passwords match
function validatePassword(password1, password2) { // Takes two paramaters of password
    // If passwords don't match, return false
    if (password1 !== password2) 
        return false; 
    // If password is less than 8 characters, return false
    if (password1.length < 8)
        return false;

    /*
    If password has at least 1 number, 1 uppercase character,
    and 1 lowercase character, accept password
    */
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;

    // Check character requirements
    for (let char of password1) {
        if (char >= 'A' && char <= 'Z') hasUpperCase = true;
        if (char >= 'a' && char <= 'z') hasLowerCase = true;
        if (char >= '0' && char <= '9') hasNumber = true;
    }

    return hasUpperCase && hasLowerCase && hasNumber;
}

// Function to reverse a password
function reversePassword(password) {
    let newPassword = "";
    for (let i = password.length - 1; i >= 0; i--) {
        newPassword += password[i];
    }
    return newPassword;
}

// Function to store password in an object
function storePassword(name, password1, password2) {
    // If passwords match, reverse password
    // condition ? true : false
    let newpassword = validatePassword(password1, password2) ? reversePassword(password1) : password1;
        return { name: name, newpassword: newpassword }; //Print format
}

// Sample Input
console.log(storePassword("John", "Pass1234", "Pass1234")); // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")); // returns { name: "John", newpassword: "Pass123" }
