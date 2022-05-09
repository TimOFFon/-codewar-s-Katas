//https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
/*
Функция принимает 2 параметра:

str, это строка, представляющая строку для дополнения, нам нужно добавить некоторые "*" слева или справа от str;
n, это число, сколько раз нужно дополнить строку;

Вам нужно написать оператор цикла внутри функции, которая выполняет цикл n раз. 
Каждый раз в цикле он будет добавлять один * к str, чередуя, с какой стороны он дополняется:
первый раз добавит * к левой стороне str, второй раз добавит * к правой стороне и так далее.

function padIt(str,n){
  coding here
}

*/

function padIt(str,n){
  //coding here
  const sign = '*';
  do {
    --n;
    n % 2 ? str = str + sign : str = sign + str;
  } while (n > 0)
    return str;
}