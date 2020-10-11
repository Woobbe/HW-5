function init() {

    let numberToCheck = 2;
    let checkArray = [];
    let simple;
    let even;
    let multipleTen;

    function checkNumber(number) {

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
        if (number & 1 || number === 2) {
            even = false;
        } else {
            even = true;
        }

    };
    checkNumber(numberToCheck);
};

init();