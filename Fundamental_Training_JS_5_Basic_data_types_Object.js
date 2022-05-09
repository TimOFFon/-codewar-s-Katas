https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript

// Представлен пример объекта {name:"dog",legs:4,color:"white"}
// Нужно вернуть строку по шаблону "This white dog has 4 legs."
// В функцию передаётся объект с разными свойствами, конкантинируем их в строку

function animal(obj){
  let str = '';
  str = `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
  return str
}
