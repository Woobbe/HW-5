function init() {

    let password = '123+qwerty';

    function validatePassword(password) {

        let isValid = strLength(password) && containsLetter(password) && containsNum(password) && !containsNotLetterNum(password);
        let resultValidation = (isValid) ? 'VALID' : 'INVALID';

        return console.log(`Password: ${resultValidation}`);
    };


    let strLength = (password) => (password.length > 6 && password.length <= 20);


    let containsLetter = (password) => {
        for (let char of password) {
            let getUnicodeChar = char.charCodeAt();
            if ((getUnicodeChar >= 1040 && getUnicodeChar <= 1103) || (getUnicodeChar >= 65 && getUnicodeChar <= 90 || getUnicodeChar >= 97 && getUnicodeChar <= 122)) {
                return true;
            }
        }
        return false;
    };


    let containsNum = (password) => {
        for (let number of password) {
            let getUnicodeNum = number.charCodeAt();
            if ((getUnicodeNum >= 48 && getUnicodeNum <= 57)) {
                return true;
            }
        }
        return false;
    };


    let containsNotLetterNum = (password) => {
        for (let symbol of password) {
            let getUnicodeSymbol = symbol.charCodeAt();
            let number = (getUnicodeSymbol >= 48 && getUnicodeSymbol <= 57);
            let letter = (getUnicodeSymbol >= 1040 && getUnicodeSymbol <= 1103) || (getUnicodeSymbol >= 65 && getUnicodeSymbol <= 90 || getUnicodeSymbol >= 97 && getUnicodeSymbol <= 122);
            if (!number && !letter) {
                return true;
            }
        }
        return false;
    };


    validatePassword(password);
};


init();




