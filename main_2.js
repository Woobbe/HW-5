function init() {

    let password = '123qwerty';

    function validatePassword(pass) {

        let isValid = strLength(pass) && containsLetter(pass) && containsNum(pass) && !containsNotLetterNum(pass);
        let resultValidation = (isValid) ? 'VALID' : 'INVALID';

        return console.log(`Password: ${resultValidation}`);
    };


    let strLength = (pass) => (pass.length > 6 && pass.length <= 20);


    let containsLetter = (pass) => {
        for (let char of pass) {
            let unicodeChar = char.charCodeAt();
            if ((unicodeChar >= 1040 && unicodeChar <= 1103) || (unicodeChar >= 65 && unicodeChar <= 90 || unicodeChar >= 97 && unicodeChar <= 122)) {
                return true;
            }
        }
        return false;
    };


    let containsNum = (pass) => {
        for (let num of pass) {
            let unicodeNum = num.charCodeAt();
            if ((unicodeNum >= 48 && unicodeNum <= 57)) {
                return true;
            }
        }
        return false;
    };


    let containsNotLetterNum = (pass) => {
        for (let symb of pass) {
            let unicodeSymb = symb.charCodeAt();
            let num = (unicodeSymb >= 48 && unicodeSymb <= 57);
            let letter = (unicodeSymb >= 1040 && unicodeSymb <= 1103) || (unicodeSymb >= 65 && unicodeSymb <= 90 || unicodeSymb >= 97 && unicodeSymb <= 122);
            if (num || letter) {
                continue;
            } else {
                return true;
            }
        }
        return false;
    };


    validatePassword(password);
};


init();




