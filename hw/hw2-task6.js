// Напиши скрипт со следующим функционалом:

//     При загрузке страницы пользователю предлагается в prompt ввести число.
//      Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
//     Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
//     пока пользователь не нажмет Cancel в prompt.
//     После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
//     необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
//     Используй цикл for или for...of.После чего в консоль выведи строку
// 'Общая сумма чисел равна [сумма]'.

// bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор
// символов, не обязательно.Если хочешь, в случае некорректного ввода, показывай alert с 
// текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt 
// записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести
//  число в prompt.

let input = 0;
const numbers = [];
let total = 0;


// for (input = prompt('Введите число'); input > 0; ) {



for (let i = 0; input >= i; i += 0) {
    input = prompt('Введите число');
    
    if (input !== null) {
numbers.push(+input);
    console.log(numbers);
    }
    
    else if (input === null) {
        
        for (let i = 0; i < numbers.length; i += 1) {
            console.log(numbers[i]);
            total += numbers[i];
        
        }
        break;
    }
    
}

console.log(`Общая сумма чисел равна ${total}`);
    


// if (input > 0) {
//        numbers.push(input);
//     console.log(numbers);
    
// } 
// else if (input === null && numbers !== []) {
    
// }


 