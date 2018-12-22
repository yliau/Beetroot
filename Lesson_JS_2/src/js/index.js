const isPrime = (num) => {
	if (num<2){return false;}
	for (let i = 2; i <= num/2 ; i++) {
		if (num%i===0) 
			{return false;}
	}
	return true;
};

const getPrimeNumbers = (a, b) => {
	if (a <= b && b > 1) {
		while (a <= b) {			
			if (isPrime(a)) {
				console.log(a);
			}
			a++;
		}
		return;
	}
	else 
		console.log('Введите другие цифры'); 
	return;
}