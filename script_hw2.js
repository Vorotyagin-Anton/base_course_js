	"use strict";	
	// Задание №2
	
	function task2(){
		var a = 2;
		var x = 1 + (a *= 2);
		document.getElementById("task2-2result").innerHTML = x;
	}

	// Задание №3

	function task3(){
		let a = +document.getElementById("varA").value;
		let b = +document.getElementById("varB").value;
		if (a >= 0 && b >= 0) document.getElementById("task2-3result").innerHTML = a - b;
		else if (a < 0 && b < 0) document.getElementById("task2-3result").innerHTML = a * b;
		else document.getElementById("task2-3result").innerHTML = a + b;
	}

	// Задание №4

	function task4(){
		let a = +document.getElementById("varA-task4").value;
		switch(a){
			case 0 :
			document.getElementById("task2-4result").innerHTML = '0, 1, 2, 3, 4, 5';
			break;
			case 1 :
			document.getElementById("task2-4result").innerHTML = '1, 2, 3, 4, 5';
			break;
			case 2 :
			document.getElementById("task2-4result").innerHTML = '2, 3, 4, 5';
			break;
			case 3 :
			document.getElementById("task2-4result").innerHTML = '3, 4, 5';
			break;
			case 4 :
			document.getElementById("task2-4result").innerHTML = '4, 5';
			break;
			case 5 :
			document.getElementById("task2-4result").innerHTML = '5';
			break;
			default:
			document.getElementById("task2-4result").innerHTML = 'Введите число от 0 до 5';
			break;
		}
	}

	// Задание №5

	function sumOfnum(a,b){
		return (a + b);
	}

	function difOfnum(a,b){
		return (a - b);
	}

	function prodOfnum(a,b){
		return (a * b);
	}

	function quotOfnum(a,b){
		return (a / b);
	}

	function task5() {
		let a = +document.getElementById("varA-task5").value;
		let b = +document.getElementById("varB-task5").value;

		document.getElementById("task2-5sum").innerHTML = sumOfnum(a, b);
		document.getElementById("task2-5dif").innerHTML = difOfnum(a, b);
		document.getElementById("task2-5prod").innerHTML = prodOfnum(a, b);
		document.getElementById("task2-5quot").innerHTML = quotOfnum(a, b);
	}

	// Задание №6

	function mathOperation(arg1, arg2, operation){

		switch(operation){
			case 'сложить' :
			document.getElementById("task2-6output").innerHTML = sumOfnum(arg1, arg2);
			break;
			case 'вычесть' :
			document.getElementById("task2-6output").innerHTML = difOfnum(arg1, arg2);
			break;
			case 'умножить' :
			document.getElementById("task2-6output").innerHTML = prodOfnum(arg1, arg2);
			break;
			case 'разделить' :
			document.getElementById("task2-6output").innerHTML = quotOfnum(arg1, arg2);
			break;
			default :
			document.getElementById("task2-6output").innerHTML = 'Введите один из предложенных вариантов операций';
			break;
		}
	}

	function task6(){
		let arg1 = +document.getElementById("varArg1").value;
		let arg2 = +document.getElementById("varArg2").value;
		let operation = document.getElementById("operation").value;

		mathOperation(arg1, arg2, operation);
		
	}

	// Задание №8

	function power(val, pow){
		if (pow == 0){
			return 1;
		} else if (pow < 0) {
			return (power(val, pow + 1) / val);
		} else {
			return power(val, pow - 1) * val;
		}
	}

	function task8(){
		let val = +document.getElementById("degBasis").value;
		let pow = +document.getElementById("exponent").value;
		document.getElementById("task2-8result").innerHTML = power(val, pow);
	}