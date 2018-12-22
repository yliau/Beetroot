; (function(){
	"use strict"

	let playList = [{
		author: "led zeppelin",
		song: "stairway to heaven",
		duration: "2:03"
	},
	{
		author: "queen",
		song: "bohemian rhapsody",
		duration: "2:30"
	},
	{
		author: "lynyrd skynyrd",
		song: "free bird",
		duration: "1:56"
	},
	{
		author: "deep purple",
		song: "smoke on the water",
		duration: "3:03"
	},
	{
		author: "jimi hendrix",
		song: "all along the watchtower",
		duration: "2:53"
	},
	{
		author: "AC/DC",
		song: "back in black",
		duration: "2:43"
	},
	{
		author: "queen",
		song: "we will rock you",
		duration: "2:13"            
	},
	{
		author: "metallica",
		song: "enter sandman",
		duration: "3:03"            
	}
	];

// let parentElem = document.body

// const add = () => {

// 	const div = document.createElement('div');
// 	const ul = document.createElement('ul');
// 	const li = document.createElement('li');
// 	const p = document.createElement('p');
// 	const span = document.createElement('p');


// div.className = "alert alert-success";

// document.createElement(tag) 
// elem.setAttribute(name, value)

// }



var person = {
	name : 'Alex',
	country : 'UA',
	age : 29,
	beetrootTeacher : true,
	skills : ['JavaScript', 'HTML', 'CSS']
};



function print(message) {
	document.write(message);
}

function printItem(item) {
let a = '';
for ( var key in codes ){

	a += '<span>' + key + ':' + codes[key]  + '</span>';
    
}
 return a;
}


function printList(list) {
let listHTML = '<ul>';



for (let i=0; i < list.length; i++) {

listHTML += '<li>' + printItem(list[i]) + '</li>';

}
listHTML += '</ul>';

print(listHTML);
}

printList(playList);



// 	for (var key in menu) {
// 		alert( "Ключ: " + key + " значение: " + menu[key] );
// 	}
// 	var student = {
// 		name: "Dave",
// 		age: 25
// 	};

// 	alert(student['name']);
// 	alert(student.name);



// 	for ( var key in person ){
//     console.log(key); // ключ
//     console.log(person[key]); // значение

//     console.log(person.key); // не сработает

//     // прикольная фича
//     console.log(key, ':', person[key]);
// }

// html += '<li>'+item+'</li>';
// });
// html += '</ul>'




})();