let num = +prompt("enter number", "837");
let numberObj = num => {
	
	if (num >= 0 && num <= 999) {
		let obj = {"единицы": num % 10, "десятки": Math.trunc(num % 100 / 10), "сотни": Math.trunc(num / 100)};
		return obj;
	} else {
		console.error("Out of range");
		return {}
	}
	
}

console.log(numberObj(num));