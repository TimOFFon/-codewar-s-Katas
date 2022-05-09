//  https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

/*
функция принимает 1 параметр:arr, это числовой массив, нам нужно пройти arr с помощью цикла for, 
если элемент нечетный номер, поместите его в нечетный массив, если это четное число, поместите его в четный массив

Уже объявленно два массива нечетных и четных в функции, а также создан оператор возврата. Ваша работа - написать цикл for.

function pickIt(arr){
  var odd=[],even=[];
  code here..............<<<<
  return [odd,even];
}

*/

function pickIt(arr){
  var odd=[],even=[];
  //coding here
  for(let i = 0; i < arr.length; i++) {
    arr[i] % 2 ? odd.push(arr[i]) : even.push(arr[i]);
  }
  
  return [odd,even];
}
