	
	// Задание №1

	let tempF = 32;

	function tempConvert(){
		let tempC = document.getElementById("tempC").value;
		tempF = (9/5) * tempC + 32;
		document.getElementById("tempF").innerHTML = tempF.toFixed(1);
	}

	function showAlert(){
		alert(tempF);
	}

	// Задание №3

	let name = "";
	let admin = "";

	function newAdmin(){
		name = document.getElementById("name").value;
		admin = name;
		document.getElementById("admin").innerHTML = admin;
	}

	// Задание №4

	function task4(){
		let testSum = 1000 + "108";
		document.getElementById('testSum').innerHTML = testSum;
	}
