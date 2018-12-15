// import * as assets from './assets/';

// alert ('я люблю борщ');
// let name = 'Вася';
// let admin = 'Вася'; 
// console.log(admin);
// let userName = prompt ('What is your name?', 'Василий');
// console.log(userName);



// let userName

// const message = () => {
// 	let userName = prompt ('What is your name?', ' ');

// 	if (userName === null) {
// 		alert ('Вход отменён');
// 		return;
// 	}

// 	else if (userName !== 'admin') {
// 		alert ('Я вас не знаю');
// 		return;
// 	} 
// 	else if (userName == 'admin') {
// 		let password = prompt ('Password?', ' ');

// 		if (password === null) {
// 			alert ('Вход отменён');
// 			return;
// 		} 
// 		else if (password !== 'Чёрный Властелин') {
// 			alert ('Пароль неверен'); return;
// 		} 
// 		else 
// 		alert ('Добро пожаловать!'); 
// 		return;
// 	}
// }

// message();

// const isPrime = (num) => {
// 	if (num<2){return false;}
// 	for (let i = 2; i <= num/2 ; i++) {
// 		if (num%i===0) 
// 			{return false;}
// 	}
// 	return true;
// };

// const getPrimeNumbers = (a, b) => {
// 	if (a <= b && b > 1) {
// 		while (a <= b) {			
// 			if (isPrime(a)) {
// 				console.log(a);
// 			}
// 			a++;
// 		}
// 		return;
// 	}
// 	else 
// 		console.log('Введите другие цифры'); 
// 	return;
// }

let arr = [1, 2, 3];


function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []


console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

