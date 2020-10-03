// function init() {
//
//     const num1 = '123.1234';
//     const num2 = '123.1234567';
//
//     // Возвращает индекс точки в переменных заданных чисел
//     function findIndexDot(numString1, numString2) {
//         let indexDotOfNum1 = numString1.indexOf('.');
//         let indexDotOfNum2 = numString2.indexOf('.');
//
//         let num1FactionalPart = numString1.slice(indexDotOfNum1 + 1);
//         let num2FactionalPart = numString2.slice(indexDotOfNum2 + 1);
//
//         console.log(num1FactionalPart);
//         console.log(num2FactionalPart);
//
//         let minLengthFactionalPart = Math.min(num1FactionalPart.length, num2FactionalPart.length);
//         console.log(`min: ${minLengthFactionalPart}`);
//
//         if (num1FactionalPart.length < num2FactionalPart.length) {
//             let a = num2FactionalPart.substr(0, minLengthFactionalPart);
//
//         }
//
//
//
//         console.log(`num1: ${num1FactionalPart}`);
//         console.log(`num2: ${num2FactionalPart}`);
//     }
//
//
//
//
//
//
//
//
//     console.log(findIndexDot(num1, num2));
//
//
// };
// init();
//
//
// /*
// Функция, которая через If вмещает две другие и ее задача рроверить на наличие точки в обоих числах. Если точкма есть,
// то мы проверяем второе число на наличие точки. Если есть, то плюсуем два ПЕРВЫХ числа после точки и движемся
// в сторону Math.Max обоих чисел. Если мы еще не дошли до Max, а в индексе другого числа пошли undefinde (цисла уже нет),
// то все оставшиееся конкатенируем с получившимся число после точки и записываем в переменную.
// Преходим к целому числу. Отсекаем все после точки, включая ее саму (добавим ее уже после всех перерасчетов в итоговом result)
// Тут мы уже суммируем числа с последнего (определяя по length + 1, ибо по индексу обращаемся)
// И через pop вырываемя последние и возвращаем в переменные
//  */