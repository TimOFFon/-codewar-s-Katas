//https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/train/javascript
//Add property to every object in array

/*
Ваша задача — добавить новое свойство usersAnswer к каждому объекту в массиве вопросов. 
Значение usersAnswer должно быть установлено равным null. Решение должно работать для массива любой длины.
*/

function loadKey(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].usersAnswer = null;
    }
    return arr;
};

loadKey(questions);
