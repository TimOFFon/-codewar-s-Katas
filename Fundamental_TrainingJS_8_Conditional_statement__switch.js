// https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript

/*
Полная функция howManydays, функция принимает 1 параметр:
месяц, означает месяц года, разные месяцы имеют разные дни (см. следующую таблицу), 
нужно вернуть число, сколько дней в этом месяце (месяц всегда больше 0, меньше или равен 12).
+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+

function howManydays(month){
  var days;
  switch (){
  
  }
  return days;
}
*/

function howManydays(month){
  var days;
  switch (month){
      case 4:
      case 6:
      case 9:
      case 11:
              days = 30;
              break;
      case 2:
             days = 28;
             break;
      default:
              days = 31;
  }
  return days;
}
