export const validMail = (mail) => {
    mail = String(mail).toLocaleLowerCase()
    var regExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regExpression.test(mail)) { return true; }
    else { return false; }
}

export const validPhone = (phone) => {
    if (/^[0-9]{10}$/.test(phone)) { return true; }
    else { return false; }
}
export const isNum = (number) => {
    if (isNaN(number)) { return false; }
    else { return true; }
}

export const validString = (str) => {
    var firstChar = str.charAt(0);
    if (/^[a-zA-Z]$/.test(firstChar)) { return true; }
    else { return false; }
}
export const noSpecialChar = (str) => {
    var reg = /^[a-zA-Z0-9]*$/
    if (reg.test(str)) { return true }
    else { return false }
}
export const passwordStrength = (password) => {
    var strength;
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var lowRegex = new RegExp("(?=.{6,}).*", "g");
    if (lowRegex.test(password) == false) { strength = "enter more characters" }
    else if (mediumRegex.test(password)) { strength = "Medium" }
    else if (strongRegex.test(password)) { strength = "Strong Password" }
    else { strength = "Weak Password" }
    return strength;
}
export const validate = (lstOfTypes, value) => {
    var isValid = true;
    (lstOfTypes||[]).forEach(element => {
        if (element == 'mail' && !validMail(value)) {
            isValid = false;
        }
        else if (element == 'phone' && !validPhone(value)) {
            isValid = false;

        }
        else if (element == 'number' && !isNum(value)) {
            isValid = false;
        }
        else if (element == 'string' && !validString(value)) {
            isValid = false
        }
        else if (element == 'no special char' && !noSpecialChar(value)) {
            isValid = false
        }
        else if (element == 'passowrd' && !passwordStrength(value)) {
            isValid = false
        }
    });
    return isValid;
}