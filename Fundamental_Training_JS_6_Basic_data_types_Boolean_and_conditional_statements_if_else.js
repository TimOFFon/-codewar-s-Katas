https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript

/*использовать условный оператор if...else, если значение val равно false (val==false или оно может преобразоваться в false), 
должно возвращать строку «false», если нет, вернуть строку "true"
function trueOrFalse(val){
  if ()    return ?;             
  else     return ?;
}
*/

function trueOrFalse(val){
  if (Boolean(val) === false)    return 'false';             
  else     return 'true';
}

