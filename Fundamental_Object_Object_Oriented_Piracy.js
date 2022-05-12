//https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript
//Object Oriented Piracy

/*
средний член экипажа на борту добавляет к осадке 1,5 единицы, корабль, имеющий осадку более 20 без экипажа, считается достойным лута.

draft -оценка веса корабля на основе того, насколько низко он находится в воде
crew - количество членов экипажа на борту

var titanic = new Ship(15, 10);

Добавьте метод - isWorthIt
чтобы решить, достоин ли корабль грабить. 
Например: titanic.isWorthIt() // return false

*/

function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
}

//YOUR CODE HERE...
Object.prototype.isWorthIt = function() {
    let allWeight = this.draft - (this.crew * 1.5);
    return allWeight > 20 ? true : false;
}
