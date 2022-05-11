//https://www.codewars.com/kata/59ea2a532a7accf2510000ce/train/javascript

// Can this object fly? Balloons in "Up" and in real life

/*
Сюжет знаменитого анимационного фильма Disney-Pixar «Вверх» основан на путешествии главного героя Карла Фредриксена в своем доме, оснащенном воздушными шарами.

Но может ли это произойти на самом деле? Какие предметы можно поднять с помощью гелиевых шаров? Сколько воздушных шаров вам нужно?

В этом ката вы создадите класс

Journey(object, crew, balloons)

так что любой может создавать такие объекты, как

var gravityFalls = new Journey(house, 2, 20622)

что означает начать новое путешествие в Гравити Фолз в доме с двумя членами экипажа (Карл и Рассел).

Но возможно ли это путешествие? Будет ли дом парить? Достаточно ли иметь 20622 гелиевых шара (количество, которое использовали аниматоры Pixar в сцене взлета)?

В вашем классе Journey должен быть публичный метод isPossible() который возвращает true или false на основе следующих правил:

1). Каждый объект, переданный в Journey, будет иметь свойство веса, например

var house = {"weight": 45000};

(в этом ката мы будем использовать метрическую систему, 45 000 кг это примерно 100 000 фунтов).

2). Каждый член экипажа весит 80 кг.

3). Мы используем обычные воздушные шары, наполненные гелием. Каждый шар поднимает 4,8 грамма + собственный вес.

Сможете ли вы поднять крошечную тележку весом 95 кг (~ 200 фунтов) с 50 воздушными шарами, как в одной из начальных сцен фильма?

Может ли один воздушный шар действительно нести сообщение на одном листе бумаги размером с письмо, отправленном Карлом своей умирающей жене Элли в другой сцене?

Может ли быть правдой история, которую я слышал о человеке, летящем в своем шезлонге, оснащенном 1000 воздушными шарами?

Ваше мастерство программирования даст ответы на эти и многие другие важные вопросы в тестах. Да начнется путешествие!
 */
/*
В вашем классе Journey должен быть публичный метод isPossible(), который возвращает true или false
*/

var letterToEllie = { 'weight': 0.004536 };
var house = { 'weight': 45000 };
var pushCart = { 'weight': 95 };
var lawnChair = { 'weight': 5 };

// 1 ballon can push up 4,8grams (0.0048kg) + its own weght. 
// 1 crew weighs 80kg 


function Journey(name, crew, balloons) {
    // let the journey begin

    this.name = name;
    this.weight = name['weight'];
    this.POWER_UP = 0.0048;
    this.MEMBER_WEIGHT = 80;
    this.crew = crew;
    this.balloons = balloons;



    this.crewWeight = function() {
        return this.crew * this.MEMBER_WEIGHT;
    };

    this.sumWeight = function() {
        return this.crewWeight() + this.weight;
    };


    this.summBaloons = function() {
        return this.balloons * this.POWER_UP;
    };


    this.isPossible = function() {
        return this.summBaloons() >= this.sumWeight() ? true : false;
    };
}
