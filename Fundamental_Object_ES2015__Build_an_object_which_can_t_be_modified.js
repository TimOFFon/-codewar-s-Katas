//https://www.codewars.com/kata/599a6aaf1924716c3000003f/train/javascript
//ES2015: Build an object which can't be modified
/*Объявите переменную с именем stone, которую нельзя изменить.

Начальное значение stone указано ниже.

{
  feature: 'earth',
  style: {
    color: 'black'
  }
}
*/

var stone = {
    feature: 'earth',
    style: {
        color: 'black'
    }
}

function deepFreeze(obj) {

    let propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function(name) {
        let prop = obj[name];
        if (typeof prop == 'object' && prop !== null)
            deepFreeze(prop);
    });
    return Object.freeze(obj);
}

//   deepFreeze(stone);
