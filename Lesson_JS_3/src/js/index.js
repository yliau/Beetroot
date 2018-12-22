
let arr = [1, 2, 3];

function square(x) { return x * x; } // возведение в квадрат

const map = (fn, array) => {
	let b=[];
	for (let i = 0; i < array.length; i++) {
		b.push(fn(array[i]));    
	}
	return b;
};

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]