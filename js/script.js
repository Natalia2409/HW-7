const time = 2500; 
const step = 1;

function outNum(num, elem) {
	let l = document.querySelector('#' + elem);
	n = 0;
	let t = Math.round(time / (num / step));
	let interval = setInterval(() => {
		n = n + step;
		if (n == num) {
			clearInterval(interval);
		}
		l.innerHTML = n;
	},
		t);
}
outNum(7, 'out-1');



const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };



function getMyTaxes(salary) {
	return salary * this.tax;
}


function getMiddleTaxes() {
	return this.tax * this.middleSalary;
}


function getTotalTaxes() {
	return this.tax * this.middleSalary * this.vacancies;
}



let timer;
function getMySalary() {
	let tax = this.tax;
	timer = setTimeout(function run() {
		let salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
		result4.innerHTML = `salary: ${salary}, taxes: ${tax}, profit: ${(salary - (salary * tax)).toFixed(2)}`;
		timer = setTimeout(run, 10000);
	}, 100);
}

function stopTimeout() {
	clearTimeout(timer);
	result4.innerHTML = '';
}





let f1btn1 = document.getElementById('f1btn1');
let f1btn2 = document.getElementById('f1btn2');
let f1btn3 = document.getElementById('f1btn3');
let result1 = document.getElementById('result1');

f1btn1.addEventListener('click', () => {
	result1.innerHTML = `${getMyTaxes.call(ukraine, 10000)} грн`;
});

f1btn2.addEventListener('click', () => {
	result1.innerHTML = `${getMyTaxes.call(latvia, 10000)} грн`;
});

f1btn3.addEventListener('click', () => {
	result1.innerHTML = `${getMyTaxes.call(litva, 10000)} грн`;
});


let f2btn1 = document.getElementById('f2btn1');
let f2btn2 = document.getElementById('f2btn2');
let f2btn3 = document.getElementById('f2btn3');
let result2 = document.getElementById('result2');

f2btn1.addEventListener('click', () => {
	result2.innerHTML = `${(getMiddleTaxes.call(ukraine)).toFixed(2)} грн`;
});

f2btn2.addEventListener('click', () => {
	result2.innerHTML = `${(getMiddleTaxes.call(latvia)).toFixed(2)} грн`;
});

f2btn3.addEventListener('click', () => {
	result2.innerHTML = `${(getMiddleTaxes.call(litva)).toFixed(2)} грн`;
});


let f3btn1 = document.getElementById('f3btn1');
let f3btn2 = document.getElementById('f3btn2');
let f3btn3 = document.getElementById('f3btn3');
let result3 = document.getElementById('result3');

f3btn1.addEventListener('click', () => {
	result3.innerHTML = `${(getTotalTaxes.call(ukraine)).toFixed(2)} грн`;
});

f3btn2.addEventListener('click', () => {
	result3.innerHTML = `${(getTotalTaxes.call(latvia)).toFixed(2)} грн`;
});

f3btn3.addEventListener('click', () => {
	result3.innerHTML = `${(getTotalTaxes.call(litva)).toFixed(2)} грн`;
});


let f4btn1 = document.getElementById('f4btn1');
let f4btn2 = document.getElementById('f4btn2');
let f4btn3 = document.getElementById('f4btn3');
let result4 = document.getElementById('result4');

f4btn1.addEventListener('click', () => {
	getMySalary.call(ukraine);
});

f4btn2.addEventListener('click', () => {
	getMySalary.call(latvia);
});

f4btn3.addEventListener('click', () => {
	getMySalary.call(litva);
});






