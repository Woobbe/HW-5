function init() {

    let numberToCheck = 5;
    let checkArray = [];

    function checkNumber(number) {
        if (number === 2) {
            checkArray.push(true, true, false);
            console.log(checkArray);
            return;
        };

        if (isSimpleNumber(numberToCheck)) {
            checkArray.push(true, false, false);
        } else {
            checkArray.push(false);
            multipleTenNumber(number);

        };
        console.log(checkArray);
    }


    function isSimpleNumber(number) {

        if (number < 0) {
            return false;
        } else {
            for (let num = 2; num < number; num++) {
                if (!(number % num)) return false;
            }
        };
        return true;
    };


    function multipleTenNumber(number) {
        if (!(number % 10)) {
            checkArray.push(true, true);
        } else {
            checkEvenNumber(number);
            checkArray.push(false);
        };
    };

    function checkEvenNumber(number) {
        if (number & 1) {
            checkArray.push(false);
        } else {
            checkArray.push(true);
        };
    };
    checkNumber(numberToCheck);
};

init();