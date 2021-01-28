// 1
let i = 0;
while (i <= 100) {
	let sum = 0;
	for (let j = 2; j <= i/2+1; j++) {
		if (i % j == 0) {
			sum++;
		}
	}
	if (sum == 0) {
		console.log(i)
	}
	i++;
}

//2
let basketPrice = [
	{
		title:'qwe',
		price: 100
	},
	{
		title:'qhwe',
		price: 200
	},
	{
		title:'qjwe',
		price: 300
	},
	{
		title:'qwke',
		price: 400
	}
]

for (let item of basketPrice) {
	console.log(`товар ${item.title} стоит ${item.price}`)
}

function countBasketPrice(mas){
	let res = 0;
	for (let item of basketPrice) {
		res += item.price;
	}
	return res;
}

console.log(countBasketPrice(basketPrice));

//4

for (let i = 0; i <= 9; console.log(i++)){}

//5

for (let i = 1; i <= 20; i++) {
	let arr = new Array(i);
	arr.fill('x');
	let res = arr.join('');
	console.log(res)
}