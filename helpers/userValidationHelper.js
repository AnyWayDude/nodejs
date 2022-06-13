function emailValidation(email) {
    const reqExp = /^[\w.+\-]+@gmail\.com$/;

    return reqExp.test(email);
}

function phoneNumberValidation(phoneNumber) {
    const reqExp = /^\+380\d{9}$/;

    return reqExp.test(phoneNumber);
}

function passwordValidation(password) {

    return password.length >= 3;
}



exports.emailValidation = emailValidation;
exports.phoneNumberValidation = phoneNumberValidation;
exports.passwordValidation = passwordValidation;