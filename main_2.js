let password = '123+qwerty';

function validatePassword(password) {
    let isValid = strLength(password)
        && containsLetter(password)
        && containsNum(password)
        && !containsNotLetterNum(password);
    let resultValidation = (isValid) ? 'VALID' : 'INVALID';

    return console.log(`Password: ${resultValidation}`);
}

let strLength = (password) => (password.length > 6 && password.length <= 20);

let containsLetter = (password) => {
    for (let char of password) {
        let getUnicodeChar = char.charCodeAt();

        let isLetterA_я = getUnicodeChar >= 1040 && getUnicodeChar <= 1103;
        let isLetterA_Z = getUnicodeChar >= 65 && getUnicodeChar <= 90;
        let isLetter_a_z = getUnicodeChar >= 97 && getUnicodeChar <= 122;

        if (isLetterA_я || isLetterA_Z || isLetter_a_z) return true;
    }

    return false;
};

let containsNum = (password) => {
    for (let number of password) {
        let getUnicodeNum = number.charCodeAt();

        let isNumber = getUnicodeNum >= 48 && getUnicodeNum <= 57;

        if (isNumber) return true;
    }

    return false;
};

let containsNotLetterNum = (password) => {
    for (let symbol of password) {
        let getUnicodeSymbol = symbol.charCodeAt();

        let isLetterA_я = getUnicodeSymbol >= 1040 && getUnicodeSymbol <= 1103;
        let isLetterA_Z = getUnicodeSymbol >= 65 && getUnicodeSymbol <= 90;
        let isLetter_a_z = getUnicodeSymbol >= 97 && getUnicodeSymbol <= 122;
        let isNumber = (getUnicodeSymbol >= 48 && getUnicodeSymbol <= 57);
        let isLetter = isLetterA_я || isLetterA_Z || isLetter_a_z;

        if (!isNumber && !isLetter) return true;
    }

    return false;
};

validatePassword(password);
