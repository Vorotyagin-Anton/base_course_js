'use strict'

// Задание №1 - Написать функцию, преобразующую число в объект.

function determineNumber(number){

	let determinate = {
		numHundreds: 'hundreds',
		numDozens: 'dozens',
		numUnits: 'units'
	};

	if (number >= 0 && number <= 999){

		let hundreds = Math.trunc(number / 100);
		let dozens = Math.trunc((number - hundreds*100) / 10);
		let units = number - hundreds*100 - dozens*10;

		determinate.numHundreds = hundreds;
		determinate.numDozens = dozens;
		determinate.numUnits = units;

	} else {
		console.log("Введённое число не входит в диапазон от 0 до 999. Создан пустой объект.");
		determinate = {};
	}

	return determinate;

}; determineNumber(123);

// Задание №2 - Cоздать функцию конструтор для фруктов Fruit.

function Fruit(color, form){
	this.color = color;
	this.form = form;
}

let apple = new Fruit("зелёное", "круглое");
let banana = new Fruit("жёлтый", "длинный");

console.log(apple);
console.log(banana);

// Задание №3 - Создать рекурсивную функцию сравнения всего - цифры, строчки, объекта, массива, булеана и тд.

function compare(a,b){

	let result = true;

	if ((typeof(a) != "object") && (typeof(b) != "object")) {

		if (a !== b) return false;

	} else 

	if ((Array.isArray(a) == true) && (Array.isArray(b) == true)) {

		for(i = 0; i < Math.max(a.length, b.length); i++) {

			if(compare(a[i],b[i]) == false) return false;

		}

	} else

	if ((typeof(a) == "object") && (typeof(b) == "object") && (Array.isArray(a) == false) && (Array.isArray(b) == false) && (a !== null) && (b !== null)) {

		for (var prop in a){

			if(compare(a[prop], b[prop]) == false) return false;

		}

		for (var prop in b){

			if(compare(a[prop], b[prop]) == false) return false;

		}

	} else result = false;

	return result;

};

console.assert(compare('текст', 'текст') === true, `Неправильно написана`);
console.assert(compare(367, 367) === true, `Неправильно написана`);
console.assert(compare([1,2,3,4], [1,2,3,4]) === true, `Неправильно написана`);
console.assert(compare({ 
	old: 10, 
	family: {
		grandFatherName: 'Анатолий',
		fatherName: 'Владимир',
		brothers: ['Толя', 'Женя']
	}   
}, { 
	old: 10, 
	family: {
		grandFatherName: 'Анатолий',
		fatherName: 'Владимир',
		brothers: ['Толя', 'Женя']
	}   
}) === true, `Неправильно написана`);
console.assert(compare(compare, compare) === true, `Неправильно написана`);
console.assert(compare(null, {}) === false, `Неправильно написана`);