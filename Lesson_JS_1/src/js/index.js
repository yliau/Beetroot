let userName

const message = () => {
	let userName = prompt ('What is your name?', ' ');

	if (userName === null) {
		alert ('Вход отменён');
		return;
	}

	else if (userName !== 'admin') {
		alert ('Я вас не знаю');
		return;
	} 
	else if (userName == 'admin') {
		let password = prompt ('Password?', ' ');

		if (password === null) {
			alert ('Вход отменён');
			return;
		} 
		else if (password !== 'Чёрный Властелин') {
			alert ('Пароль неверен'); return;
		} 
		else 
		alert ('Добро пожаловать!'); 
		return;
	}
}

message();