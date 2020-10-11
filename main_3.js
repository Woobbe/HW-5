function init() {

    let numberToCheck = 997;
    let checkArray = [];
    let simple;
    let even;
    let multipleTen;

    function checkNumber(number) {

        if (number === 2) {
            simple = true;
            even = true;
            multipleTen = false;
            checkArray.push(simple, even, multipleTen);
            console.log(checkArray);
            return;
        }

        if (isSimpleNumber(number)) {
            simple = true;
            even = false;
            multipleTen = false;
        } else {
            simple = false;
            multipleTenNumber(number);

        }

        checkArray.push(simple, even, multipleTen);
        console.log(checkArray);
    }


    function isSimpleNumber(number) {

        if (number < 0) {
            return false;
        } else {
            for (let num = 2; num < number; num++) {
                if (!(number % num)) return false;
            }
        }
        return true;
    };


    function multipleTenNumber(number) {
        if (!(number % 10)) {
            even = true;
            multipleTen = true;
        } else {
            checkEvenNumber(number);
            multipleTen = false;
        }
    };

    function checkEvenNumber(number) {
        if (number & 1) {
            even = false;
        } else {
            even = true;
        }

    };
    checkNumber(numberToCheck);
};

init();