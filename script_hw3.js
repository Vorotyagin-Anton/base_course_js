"use strict";

// Задание №1

function task1() {

	let i = 0;

	while(true){
		console.log(i);
		i++;
		if (i > 100)
			break;
	}

};

task1();

// Задание №2

let basket = [["Куртка", 100], ["Штаны", 50], ["Футболка", 30]];

function countBasketPrice(arrayOfGoods) {

	let total = 0;

	for (let good = 0; good < arrayOfGoods.length; good++){
		total += arrayOfGoods[good][1]; 
	}

	console.log(total);
	
};

countBasketPrice(basket);

function countBasketPrice2(arrayOfGoods) {

		function forReduce(sum, current) {

			return sum + current[1]; 

		}

		let result = arrayOfGoods.reduce(forReduce, 0);

		console.log(result);

}

countBasketPrice2(basket);

// Задание №3

for (let i = 0; i < 10; console.log(i++)){}

// Задание №4

function task4(){

	let raw = "x";

	for (let i = 0; i < 20; i++){
		console.log(raw);
		raw += "x";
	}

};

task4();