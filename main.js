function init() {

    const num1 = '999';
    const num2 = '99999';


    function sumString(num1, num2) {

        let num1Array = num1.split('');
        let num2Array = num2.split('');

        let maxLength = Math.max(num1Array.length, num2Array.length);

        let result = '';
        let sum = 0;
        let ten = 0;
        for (let i = 0; i < maxLength; i++) {
            let num1LastSymb = ~~num1Array.pop();
            let num2LastSymb = ~~num2Array.pop();

            sum = num1LastSymb + num2LastSymb + ten;

            if (sum > 9) {
                sum = sum - 10;
                ten = 1;
            } else {
                ten = 0;
            }

            result = sum + result;
        }
        ;

        if (ten === 1) {
        result = '1' + result;
        }

        return result;
    };

    console.log(sumString(num1, num2));
};


init();
