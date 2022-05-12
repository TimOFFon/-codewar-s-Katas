//https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript
//Extract Nested Object Reference

/*
Вам дан сложный объект, который имеет множество глубоко вложенных переменных. Вы не хотите идти по обычному маршруту if obj.property == null. Создайте метод-прототип, который с учетом вложенного пути либо возвращает значение, либо undefined.

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined
*/

Object.prototype.hash = function(string) {
    let arr = string.split('.');
    let arrKey = [];
    let flag = null;
    let result = null;
    let obj = this;

    function deepDive(obj) {
        for (let key in obj) {
            if (key !== 'hash') {
                arrKey.push(key);
                if (typeof obj[key] === 'object') {
                    deepDive(obj[key])
                };
            };

        };
    };
    deepDive(obj);

    for (let j = 0; j < arr.length; j++) {
        let marck = arrKey.includes(arr[j]);
        if (marck === false) {
            flag = undefined;
        };
    };

    if (flag === null) {
        result = arr.reduce((previous, current) => previous[current], obj);

    };


    return result !== null ? result : flag;

};
