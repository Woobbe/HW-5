function init() {

    let numberToCheck = 20;

    function checkNumber(number) {

        let checkArray = [isSimpleNumber(number), multipleNumber(number, 2), multipleNumber(number, 10)];
        console.log(checkArray);
    };


    function isSimpleNumber(number) {
        if (Math.sign(number) === -1) {
            return false;
        } else {
            for (let num = 2; num < number; num++) {
                if (!(number % num)) return false;
            }
        }
        return true;
    };


    function multipleNumber(number, multiple) {
        return !(number % multiple);
    };


    checkNumber(numberToCheck);

};

init();