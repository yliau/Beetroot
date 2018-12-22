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






// let arr = [1, 2, 3];


// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(map(square, [])); // []


// console.log(map(square, arr)); // [1, 4, 9]
// console.log(arr); // [1, 2, 3]





// const getSum = (num) => {
// 	let result = 0;
// 	for (let i=0; i < length(num); i++ ) {
// 		if (length(result) == 1){console.log(result);
// 			return result; 
// 		} else   {
// 			console.log(result); 
// 			result = result + num[i];}
// 			console.log(result);
// 		}
// }


// let result = 0;
//   for (let i = 0; i < length(str); i += 1) {
//     if (toUpperCase(str[i]) === str[i]) {
//       result += 1;
//     }
//   }

// const addDigits = getSum(num);


// const getSum = (num) => {
//   let result = 0;
//   let k = 0;
//   const str = String(num);
//   for (let i = 0; i < length(str); i += 1) {
//     k = Number('str.charAt(i)');
//     result = result + k;
//   }
//   return result;
// };


  // if (begin > end) {
  //   return NaN;
  // } else if (begin === end) {
  //   return begin;
  // }
  // return begin + sequenceSum(begin + 1, end);



// const getSum1 = (num1) => {
// var s = 0;
// while (num1 > 0)
// {
//  s += num1 % 10;
//  num1 = Math.floor(num1/10);
// }
// return s;
// };

// const getSum = (num) => {

// if (num < 1) {
// 	return 0;
// } else if (getSum1(num) < 10) {
// 	return getSum1(num);
// } else getSum1(getSum1(num));

// return getSum1(num);
// }



// function getSumViaStrings(num) {
//     var strNum = num.toString();
//     var strLen = strNum.length;
//     var sum = 0;

//     for (var i = 0; i < strLen; i++) {
//         sum += parseInt(strNum[i]);
//     }

//     return sum < 10 ? sum : getSumViaStrings(sum);
// }

  // const identity = str => str;
  // const length = str => str.length;


  // let l = 9999855;



// const getSumViaStrings = (num) => {
// 	let strNum = String(num);
// 	let sum = 0;

// 	for (let i = 0; i < length(strNum); i++) {
// 		sum += parseInt(strNum[i]);
// 	}

// 	return sum < 10 ? sum : getSumViaStrings(sum);

// }

// const getSum = (num) => {
// let sum = 0;
// if (num < 1) {
// 	return 0;
// } else {

// while(num != 0){
//         sum += (num % 10);
//         num/=10;
// }

// }
// return getSum1(num);
// }

// const addDigits = getSumViaStrings();
// console.log(getSumViaStrings(l));

// console.log(addDigits(l));
// console.log(String(l));
// console.log(Number(l));



// const getSum = (num) => {
//   const a = String(num);
//   let sum = 0;

//   for (let i = 0; i < length(a); i += 1) {
//     sum += parseInt(a[i], 10);
//   }
//   return sum < 10 ? sum : getSum(sum);
// };
// const addDigits = getSum();



  
// const getSumViaStrings = (num) => {
// 	let strNum = String(num);
// 	let sum = 0;

// 	for (let i = 0; i < length(strNum); i++) {
// 		sum += parseInt(strNum[i]);
// 	}

// 	return sum < 10 ? sum : getSumViaStrings(sum);

// }
// console.log(getSumViaStrings(l));



// const addDigits = (num) => {
//   const strNum = String(num);
//   let sum = 0;
//   for (let i = 0; i < length(strNum); i += 1) {
//     sum += parseInt(strNum[i], 10);
//   }
//   return sum < 10 ? sum : addDigits(sum);
// };

// export default addDigits;


// const length = str => str.length;
// const toUpperCase = str => str.toUpperCase();

// let text = 'sgsg sfgsfg zv';

// const solution1 = (text) => {
// let str='';

// for (let i = 0; i < length(text); i += 1) {
    
// if (text.indexOf(" ") === text[i]) {
// 	let a=1+i;
// 	str+=text[a].toUpperCase();
// } else str += text[i];
//   }
//   return str;
// };

// // let text = 'sgsg sfgsfg zv';
// // const solution = (str) => {
// // "str"[0].toUpperCase();

// // }

// const solution = (text) => {
// let str = '';
//   for (let i = 0; i <= text.length - 1; i+=1 ) {
//     if (text[i - 1] == 0 || text[i - 1] === undefined) {
//      str += text[i].toUpperCase(); 
//     } else str += text[i];
//   }
//   return str;
// };
// solution('aм vcs  gvc');


// console.log(solution(text));


// // export default solution;

